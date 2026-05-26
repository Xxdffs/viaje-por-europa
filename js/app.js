import { cities, timelineStops } from "./data.js";

const timelineEl = document.getElementById("timeline");
const cityGridEl = document.getElementById("cityGrid");
const cityModal = document.getElementById("cityModal");
const modalHeader = document.getElementById("modalHeader");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const filterBar = document.querySelector(".filter-bar");

const priorityLabels = {
  imprescindible: "Imprescindible",
  recomendado: "Recomendado",
  opcional: "Opcional",
};

function makeGoogleMapsSearchUrl(query) {
  const q = encodeURIComponent(String(query || "").trim());
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

function makePlaceMapsUrl(city, place) {
  const query = `${place?.name || ""}, ${city?.name || ""}, ${city?.country || ""}`.trim();
  return makeGoogleMapsSearchUrl(query);
}

function makeCityMapsUrl(city) {
  const query = `${city?.name || ""}, ${city?.country || ""}`.trim();
  return makeGoogleMapsSearchUrl(query);
}

function renderTimeline() {
  timelineEl.innerHTML = timelineStops
    .map(
      (stop, i) => `
    <li class="timeline-item" style="--accent: ${stop.color}">
      <div class="timeline-marker">
        <span class="timeline-num">${stop.order}</span>
      </div>
      <div class="timeline-card">
        <div class="timeline-card-head">
          <span class="timeline-order" aria-hidden="true">${stop.order}</span>
          <span class="timeline-flag">${stop.flag}</span>
          <div>
            <h3>${stop.name}</h3>
            <p class="timeline-country">${stop.country}</p>
          </div>
        </div>
        <p class="timeline-arrival"><strong>Llegada:</strong> ${stop.arrival}</p>
        ${stop.transportIn ? `<p class="timeline-transport">${stop.transportIn}</p>` : ""}
        ${
          i < timelineStops.length - 1
            ? `<a href="#ciudad-${stop.cityId}" class="timeline-link" data-city="${stop.cityId}">Ver lugares →</a>`
            : `<span class="timeline-final">Destino final del viaje</span>`
        }
      </div>
    </li>
  `
    )
    .join("");

  timelineEl.querySelectorAll(".timeline-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openCityModal(link.dataset.city);
      document.getElementById("ciudades").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderCityCards(filter = "all") {
  const filtered =
    filter === "all" ? cities : cities.filter((c) => c.stayDays >= parseFloat(filter));

  cityGridEl.innerHTML = filtered
    .map(
      (city) => `
    <article class="city-card" id="ciudad-${city.id}" style="--city-color: ${city.color}">
      <div class="city-card-accent"></div>
      <div class="city-card-body">
        <header class="city-card-header">
          <span class="city-flag">${city.flag}</span>
          <div>
            <h3>${city.name}</h3>
            <p>${city.country}</p>
          </div>
        </header>
        <p class="city-stay">${city.stayLabel}</p>
        <p class="city-summary">${city.summary}</p>
        <ul class="city-highlights">
          ${city.places
            .filter((p) => p.priority === "imprescindible")
            .slice(0, 3)
            .map((p) => `<li>${p.name}</li>`)
            .join("")}
        </ul>
        <div class="city-card-footer">
          <span class="place-count">${city.places.length} lugares</span>
          <button type="button" class="btn btn-sm" data-city="${city.id}">
            Ver guía completa
          </button>
        </div>
      </div>
    </article>
  `
    )
    .join("");

  cityGridEl.querySelectorAll("[data-city]").forEach((btn) => {
    btn.addEventListener("click", () => openCityModal(btn.dataset.city));
  });
}

function openCityModal(cityId) {
  const city = cities.find((c) => c.id === cityId);
  if (!city) return;

  modalHeader.innerHTML = `
    <div class="modal-hero" style="--accent: ${city.color}">
      <span class="modal-flag">${city.flag}</span>
      <div>
        <h2 id="modalTitle">${city.name}</h2>
        <p>${city.country} · ${city.stayLabel}</p>
      </div>
    </div>
    <div class="modal-meta">
      <div><strong>Llegada</strong><span>${city.arrival}</span></div>
      <div><strong>Salida</strong><span>${city.departure}</span></div>
      <div><strong>Transporte</strong><span>${city.transportIn} → ${city.transportOut}</span></div>
      <div>
        <strong>Mapa</strong>
        <span>
          <a class="maps-link" href="${makeCityMapsUrl(city)}" target="_blank" rel="noopener noreferrer">
            Abrir ciudad
          </a>
        </span>
      </div>
    </div>
    <p class="modal-summary">${city.summary}</p>
  `;

  const grouped = { imprescindible: [], recomendado: [], opcional: [] };
  city.places.forEach((p) => grouped[p.priority].push(p));

  modalBody.innerHTML = Object.entries(grouped)
    .filter(([, places]) => places.length > 0)
    .map(
      ([priority, places]) => `
      <section class="places-section">
        <h3 class="places-section-title priority-${priority}">
          ${priorityLabels[priority]}
        </h3>
        <div class="places-list">
          ${places
            .map(
              (place) => `
            <article class="place-card">
              <div class="place-card-top">
                <h4>${place.name}</h4>
                <span class="place-category">${place.category}</span>
              </div>
              <p class="place-desc">${place.description}</p>
              <div class="place-meta">
                <span class="place-duration">⏱ ${place.duration}</span>
                <a class="maps-link maps-link-inline" href="${makePlaceMapsUrl(city, place)}" target="_blank" rel="noopener noreferrer">
                  Abrir en Google Maps →
                </a>
              </div>
              ${
                place.tip
                  ? `<p class="place-tip"><strong>Consejo:</strong> ${place.tip}</p>`
                  : ""
              }
            </article>
          `
            )
            .join("")}
        </div>
      </section>
    `
    )
    .join("");

  cityModal.showModal();
  document.body.style.overflow = "hidden";
}

function closeModal() {
  cityModal.close();
  document.body.style.overflow = "";
}

function initFilters() {
  const filters = [
    { id: "all", label: "Todas" },
    { id: "1.5", label: "1+ días" },
    { id: "2", label: "2+ días" },
  ];

  filterBar.innerHTML = filters
    .map(
      (f) =>
        `<button class="filter-btn${f.id === "all" ? " active" : ""}" data-filter="${f.id}">${f.label}</button>`
    )
    .join("");

  filterBar.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCityCards(btn.dataset.filter);
    });
  });
}

modalClose.addEventListener("click", closeModal);
cityModal.addEventListener("click", (e) => {
  if (e.target === cityModal) closeModal();
});
cityModal.addEventListener("cancel", (e) => {
  e.preventDefault();
  closeModal();
});

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const id = anchor.getAttribute("href");
    if (id === "#top" || id.length <= 1) return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

renderTimeline();
renderCityCards();
initFilters();
