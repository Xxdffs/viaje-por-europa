export const cities = [
  {
    id: "barcelona",
    name: "Barcelona",
    country: "España",
    flag: "🇪🇸",
    color: "#c45c26",
    arrival: "21 jun 2026 · 15:29",
    departure: "22 jun 2026 · mañana (vuelo)",
    transportIn: "Llegada al aeropuerto",
    transportOut: "Vuelo a París",
    stayLabel: "Media tarde y noche",
    stayDays: 0.5,
    summary:
      "Llegas por la tarde: aprovecha el atardecer en el Barrio Gótico o una caminata por Las Ramblas. Si tienes energía, sube al búnker del Carmel para vistas nocturnas.",
    places: [
      {
        name: "La Sagrada Familia",
        category: "Arquitectura",
        duration: "1–2 h",
        priority: "imprescindible",
        description:
          "Obra maestra de Antoni Gaudí, símbolo de la ciudad. Reserva entrada con antelación; el interior es tan impactante como el exterior.",
        tip: "Compra tickets en sagradafamilia.org con semanas de anticipación.",
      },
      {
        name: "Barrio Gótico y Catedral",
        category: "Historia",
        duration: "1–2 h",
        priority: "recomendado",
        description:
          "Calles medievales, plazas escondidas y la Catedral de Barcelona. Ideal para tu primera tarde a pie desde el centro.",
        tip: "Pasea al atardecer; la luz en las plazas es espectacular.",
      },
      {
        name: "Las Ramblas y La Boquería",
        category: "Paseo",
        duration: "1 h",
        priority: "recomendado",
        description:
          "El paseo más famoso de la ciudad termina en el mercado de La Boquería, perfecto para tapas y fruta fresca.",
        tip: "Cuidado con carteristas en zona turística.",
      },
      {
        name: "Park Güell",
        category: "Parque",
        duration: "2 h",
        priority: "opcional",
        description:
          "Parque con mosaicos y vistas panorámicas de Gaudí. Requiere más tiempo; solo si sales muy temprano al día siguiente.",
        tip: "Zona monumental requiere entrada; las zonas libres también ofrecen buenas vistas.",
      },
      {
        name: "Casa Batlló / Casa Milà (La Pedrera)",
        category: "Arquitectura",
        duration: "1 h c/u",
        priority: "opcional",
        description:
          "Fachadas modernistas de Gaudí en el Passeig de Gràcia. La Pedrera tiene terraza con vistas al atardecer.",
        tip: "Entrada nocturna en La Pedrera incluye espectáculo de luces.",
      },
    ],
  },
  {
    id: "paris",
    name: "París",
    country: "Francia",
    flag: "🇫🇷",
    color: "#2d4a7c",
    arrival: "22 jun 2026 · 10:20",
    departure: "24 jun 2026 · 08:30 (tren)",
    transportIn: "Vuelo desde Barcelona",
    transportOut: "Eurostar a Londres",
    stayLabel: "Casi 2 días completos",
    stayDays: 2,
    summary:
      "Dos días para los clásicos parisinos: Torre Eiffel, Louvre, paseo por el Sena y barrios como Le Marais o Montmartre.",
    places: [
      {
        name: "Torre Eiffel",
        category: "Monumento",
        duration: "2–3 h",
        priority: "imprescindible",
        description:
          "El icono de París. Sube al segundo piso o la cima al atardecer; cada hora en punto brilla con luces durante 5 minutos.",
        tip: "Reserva en toureiffel.paris; considera un picnic en el Champ de Mars.",
      },
      {
        name: "Museo del Louvre",
        category: "Museo",
        duration: "3–4 h",
        priority: "imprescindible",
        description:
          "Uno de los museos más grandes del mundo: La Gioconda, la Venus de Milo y miles de obras. Imposible verlo todo.",
        tip: "Entrada con horario; el miércoles cierra más tarde. Prioriza Denon y Sully.",
      },
      {
        name: "Catedral de Notre-Dame",
        category: "Historia",
        duration: "45 min",
        priority: "imprescindible",
        description:
          "Reabierta tras su restauración, es el corazón gótico de París en la Île de la Cité.",
        tip: "Combina con Sainte-Chapelle (vidrieras) en la misma isla.",
      },
      {
        name: "Crucero por el Sena",
        category: "Experiencia",
        duration: "1 h",
        priority: "recomendado",
        description:
          "Vista de monumentos desde el agua: Louvre, Musée d'Orsay, Notre-Dame y puentes iluminados de noche.",
        tip: "Los billetes Bateaux-Mouches o similares se venden en el muelle.",
      },
      {
        name: "Montmartre y Sacré-Cœur",
        category: "Barrio",
        duration: "2–3 h",
        priority: "recomendado",
        description:
          "Colina bohemia con basílica blanca, artistas en la Place du Tertre y vistas de toda la ciudad.",
        tip: "Evita restaurantes muy turísticos en la plaza; baja a calles laterales.",
      },
      {
        name: "Arco del Triunfo y Champs-Élysées",
        category: "Monumento",
        duration: "1–2 h",
        priority: "recomendado",
        description:
          "Sube al arco para una vista axial hacia la Torre Eiffel y La Défense.",
        tip: "El atardecer desde el Arco es memorable.",
      },
      {
        name: "Museo d'Orsay",
        category: "Museo",
        duration: "2–3 h",
        priority: "opcional",
        description:
          "Impresionismo en una antigua estación: Monet, Van Gogh, Degas y Rodin.",
        tip: "Alternativa al Louvre si prefieres arte del siglo XIX.",
      },
      {
        name: "Palacio de Versalles",
        category: "Excursión",
        duration: "Medio día",
        priority: "opcional",
        description:
          "Residencia de los reyes de Francia con jardines enormes. A 40 min en RER desde París.",
        tip: "Solo si dedicas una mañana entera; reserva con antelación en temporada alta.",
      },
    ],
  },
  {
    id: "londres",
    name: "Londres",
    country: "Reino Unido",
    flag: "🇬🇧",
    color: "#1a3d5c",
    arrival: "24 jun 2026 · 08:30",
    departure: "26 jun 2026 · 09:13 (tren)",
    transportIn: "Eurostar desde París",
    transportOut: "Tren a Bruselas",
    stayLabel: "Casi 2 días completos",
    stayDays: 2,
    summary:
      "Historia real, museos gratuitos de clase mundial y barrios como Westminster, Soho y Camden.",
    places: [
      {
        name: "Palacio de Buckingham y Cambio de Guardia",
        category: "Historia",
        duration: "1–2 h",
        priority: "imprescindible",
        description:
          "Residencia real; el cambio de guardia (11:00 ciertos días) es un clásico. Pasea por St James's Park.",
        tip: "Consulta el calendario oficial del Changing of the Guard.",
      },
      {
        name: "Big Ben y Palacio de Westminster",
        category: "Monumento",
        duration: "45 min",
        priority: "imprescindible",
        description:
          "Reloj y Parlamento junto al Támesis. Foto icónica desde Westminster Bridge.",
        tip: "Tours al interior del Parlamento requieren reserva previa.",
      },
      {
        name: "British Museum",
        category: "Museo",
        duration: "2–3 h",
        priority: "imprescindible",
        description:
          "Entrada gratuita: Piedra Rosetta, frisos del Partenón y tesoros de civilizaciones antiguas.",
        tip: "Llega temprano para evitar multitudes en las piezas estrella.",
      },
      {
        name: "Tower of London y Tower Bridge",
        category: "Historia",
        duration: "2–3 h",
        priority: "recomendado",
        description:
          "Fortaleza medieval con las Joyas de la Corona. El puente levadizo está junto al río.",
        tip: "Compra entrada combinada online para ahorrar cola.",
      },
      {
        name: "Tate Modern y South Bank",
        category: "Arte / Paseo",
        duration: "2 h",
        priority: "recomendado",
        description:
          "Arte contemporáneo en antigua central eléctrica y paseo ribereño con street food en Borough Market.",
        tip: "La terraza del Tate tiene vistas gratuitas al skyline.",
      },
      {
        name: "Museo de Historia Natural",
        category: "Museo",
        duration: "2 h",
        priority: "recomendado",
        description:
          "Arquitectura victoriana y esqueletos de dinosaurios; ideal si viajas en familia.",
        tip: "Entrada gratuita; muy concurrido en vacaciones.",
      },
      {
        name: "Hyde Park y Notting Hill",
        category: "Naturaleza / Barrio",
        duration: "2 h",
        priority: "opcional",
        description:
          "Paseo verde en el centro o calles coloridas y Portobello Road (mercado los sábados).",
        tip: "Speaker's Corner los domingos en Hyde Park es curioso.",
      },
      {
        name: "London Eye",
        category: "Experiencia",
        duration: "30 min",
        priority: "opcional",
        description:
          "Noria con vistas de 360° sobre el Támesis. Caro pero panorámico.",
        tip: "Reserva horario al atardecer para las mejores fotos.",
      },
    ],
  },
  {
    id: "bruselas",
    name: "Bruselas",
    country: "Bélgica",
    flag: "🇧🇪",
    color: "#b8860b",
    arrival: "26 jun 2026 · 09:13",
    departure: "27 jun 2026 · 08:50",
    transportIn: "Tren desde Londres",
    transportOut: "Tren a Ámsterdam",
    stayLabel: "1 día completo",
    stayDays: 1,
    summary:
      "Capital europea en miniatura: Grand Place, chocolate, cerveza belga y el famoso Manneken Pis.",
    places: [
      {
        name: "Grand Place (Grote Markt)",
        category: "Plaza",
        duration: "1 h",
        priority: "imprescindible",
        description:
          "Una de las plazas más bellas de Europa, rodeada de gremios dorados del siglo XVII.",
        tip: "Vuelve de noche: la iluminación es impresionante.",
      },
      {
        name: "Manneken Pis y zona centro",
        category: "Monumento",
        duration: "30 min",
        priority: "imprescindible",
        description:
          "Estatuilla icónica a pocos minutos de la Grand Place. A veces viste trajes temáticos.",
        tip: "No esperes una obra monumental; es un guiño local divertido.",
      },
      {
        name: "Museo del Atomium",
        category: "Arquitectura",
        duration: "2 h",
        priority: "recomendado",
        description:
          "Estructura futurista de la Expo 58 con exposiciones y vistas desde las esferas.",
        tip: "Está en Heysel; metro directo desde el centro.",
      },
      {
        name: "Museos de arte: Magritte / Fin-de-Siècle",
        category: "Museo",
        duration: "2 h",
        priority: "recomendado",
        description:
          "Surrealismo de René Magritte y arte belga en el Mont des Arts.",
        tip: "Museo Magritte requiere reserva en temporada alta.",
      },
      {
        name: "Catedral de San Miguel y San Gudulio",
        category: "Historia",
        duration: "45 min",
        priority: "recomendado",
        description:
          "Catedral gótica en la colina del centro, cerca de la estación Central.",
        tip: "Sube si hay exposición en las bóvedas.",
      },
      {
        name: "Barrio de Sablon y galerías de chocolate",
        category: "Gastronomía",
        duration: "1–2 h",
        priority: "recomendado",
        description:
          "Anticuarios, pralines (Neuhaus, Pierre Marcolini) y ambiente elegante.",
        tip: "Prueba gaufres (waffles) en una friterie local.",
      },
      {
        name: "Excursión a Brujas (opcional)",
        category: "Excursión",
        duration: "Medio día",
        priority: "opcional",
        description:
          "Ciudad medieval a 1 h en tren: canales, campanario y arquitectura de cuento.",
        tip: "Solo si prefieres Brujas al ritmo tranquilo de Bruselas.",
      },
    ],
  },
  {
    id: "amsterdam",
    name: "Ámsterdam",
    country: "Países Bajos",
    flag: "🇳🇱",
    color: "#e85d04",
    arrival: "27 jun 2026 · 08:50",
    departure: "28 jun 2026 · 10:27",
    transportIn: "Tren desde Bruselas",
    transportOut: "Tren a Frankfurt",
    stayLabel: "1 día completo",
    stayDays: 1,
    summary:
      "Canales, bicicletas y museos de talla mundial. Un día intenso: prioriza un paseo en barco y un gran museo.",
    places: [
      {
        name: "Paseo en barco por los canales",
        category: "Experiencia",
        duration: "1 h",
        priority: "imprescindible",
        description:
          "La UNESCO declaró el anillo de canales Patrimonio de la Humanidad. La mejor forma de entender la ciudad.",
        tip: "Reserva por la mañana; hay tours con audioguía en español.",
      },
      {
        name: "Rijksmuseum",
        category: "Museo",
        duration: "2–3 h",
        priority: "imprescindible",
        description:
          "Rembrandt, Vermeer y el siglo de oro holandés en un edificio espectacular.",
        tip: "Entrada con horario en rijksmuseum.nl.",
      },
      {
        name: "Casa de Anne Frank",
        category: "Historia",
        duration: "1–1.5 h",
        priority: "imprescindible",
        description:
          "El escondite donde Anne escribió su diario durante la ocupación nazi. Emotivo y educativo.",
        tip: "Entradas se agotan semanas antes; reserva el día que salgan.",
      },
      {
        name: "Museo Van Gogh",
        category: "Museo",
        duration: "1.5–2 h",
        priority: "recomendado",
        description:
          "La mayor colección de Van Gogh: Girasoles, Autorretratos y cartas al hermano Theo.",
        tip: "Compra junto al Rijksmuseum si tienes tiempo extra.",
      },
      {
        name: "Plaza Dam y Barrio Jordaan",
        category: "Paseo",
        duration: "1–2 h",
        priority: "recomendado",
        description:
          "Corazón histórico y calles con cafés, galerías y el mercado de flores (Lunes–Sábado).",
        tip: "Mercado de flores en Bloemenmarkt es único en el mundo.",
      },
      {
        name: "Vondelpark",
        category: "Parque",
        duration: "1 h",
        priority: "opcional",
        description:
          "Pulmón verde para picnic o descanso entre museos.",
        tip: "Alquila bici si quieres moverte como un local.",
      },
    ],
  },
  {
    id: "frankfurt",
    name: "Frankfurt",
    country: "Alemania",
    flag: "🇩🇪",
    color: "#4a6741",
    arrival: "28 jun 2026 · 10:27",
    departure: "29 jun 2026 · 21:20 (tren)",
    transportIn: "Tren desde Ámsterdam",
    transportOut: "Tren a Venecia",
    stayLabel: "1 día completo",
    stayDays: 1,
    summary:
      "Skyline financiera y casco antiguo reconstruido: Römerberg, catedral imperial y museo junto al Main.",
    places: [
      {
        name: "Römerberg y Ayuntamiento (Römer)",
        category: "Plaza",
        duration: "1 h",
        priority: "imprescindible",
        description:
          "Plaza medieval reconstruida con fachadas de entramado de madera y el edificio del Römer.",
        tip: "Corazón del Altstadt; empieza aquí tu recorrido a pie.",
      },
      {
        name: "Catedral de San Bartolomé (Kaiserdom)",
        category: "Historia",
        duration: "45 min",
        priority: "imprescindible",
        description:
          "Catedral imperial donde se coronaban los emperadores del Sacro Imperio. Subida a la torre opcional.",
        tip: "Junto al Römerberg; entrada gratuita a la nave.",
      },
      {
        name: "Städel Museum",
        category: "Museo",
        duration: "2 h",
        priority: "recomendado",
        description:
          "Arte de 700 años: Durero, Rembrandt, Monet y arte contemporáneo a orillas del río Main.",
        tip: "Uno de los mejores museos de Alemania; reserva online.",
      },
      {
        name: "Paseo por el Main y Puente de Hierro",
        category: "Paseo",
        duration: "1 h",
        priority: "recomendado",
        description:
          "Vistas del skyline de rascacielos desde el Eiserner Steg, puente peatonal lleno de candados.",
        tip: "Atardecer con reflejos en el río es muy fotogénico.",
      },
      {
        name: "Palmengarten",
        category: "Jardín",
        duration: "2 h",
        priority: "opcional",
        description:
          "Jardín botánico con invernaderos tropicales, ideal si buscas tranquilidad.",
        tip: "A 15 min en metro; buen plan si el clima acompaña.",
      },
      {
        name: "Sachsenhausen y Apfelwein",
        category: "Gastronomía",
        duration: "1–2 h",
        priority: "recomendado",
        description:
          "Barrio al sur del Main famoso por sidra de manzana (Apfelwein) y cocina de Frankfurt.",
        tip: "Prueba Handkäse mit Musik y Grüne Soße en una tradicional Apfelweinwirtschaft.",
      },
    ],
  },
  {
    id: "venecia",
    name: "Venecia",
    country: "Italia",
    flag: "🇮🇹",
    color: "#0d5c63",
    arrival: "29 jun 2026 · 21:20",
    departure: "01 jul 2026 · 11:05",
    transportIn: "Tren desde Frankfurt",
    transportOut: "Tren a Roma",
    stayLabel: "Casi 1.5 días",
    stayDays: 1.5,
    summary:
      "Llegas de noche: paseo romántico por canales iluminados. Al día siguiente: Plaza de San Marcos, góndola o vaporetto y laberinto de callejones.",
    places: [
      {
        name: "Plaza de San Marcos",
        category: "Plaza",
        duration: "1–2 h",
        priority: "imprescindible",
        description:
          "Basílica de San Marcos, Palacio Ducal y campanile. El corazón político y religioso de la República.",
        tip: "Entra temprano a la Basílica; código de vestimenta (hombros cubiertos).",
      },
      {
        name: "Palacio Ducal y Puente de los Suspiros",
        category: "Historia",
        duration: "2 h",
        priority: "imprescindible",
        description:
          "Residencia de los dogos con obras de Tintoretto y Veronese. El puente conecta con la antigua prisión.",
        tip: "Reserva «skip the line» en verano.",
      },
      {
        name: "Paseo en góndola o vaporetto",
        category: "Experiencia",
        duration: "30 min – 1 h",
        priority: "recomendado",
        description:
          "La góndola es cara pero icónica; el vaporetto (línea 1 o 2) recorre el Gran Canal por menos.",
        tip: "Comparte góndola en traghetti (cruces cortas) por unos euros.",
      },
      {
        name: "Puente de Rialto",
        category: "Monumento",
        duration: "30 min",
        priority: "imprescindible",
        description:
          "El puente más antiguo sobre el Gran Canal, con tiendas y vistas a ambos lados.",
        tip: "Visítalo al amanecer antes de las multitudes.",
      },
      {
        name: "Islas de Murano y Burano",
        category: "Excursión",
        duration: "Medio día",
        priority: "opcional",
        description:
          "Murano: cristal soplado. Burano: casas coloridas y encaje. En vaporetto desde Fondamente Nove.",
        tip: "Solo si tienes la mañana del 1 de julio libre antes del tren.",
      },
      {
        name: "Peggy Guggenheim Collection",
        category: "Museo",
        duration: "1.5 h",
        priority: "opcional",
        description:
          "Arte moderno (Picasso, Pollock, Dalí) en palacio junto al Canal Grande.",
        tip: "Alternativa cultural si ya conoces San Marcos.",
      },
    ],
  },
  {
    id: "roma",
    name: "Roma",
    country: "Italia",
    flag: "🇮🇹",
    color: "#8b2635",
    arrival: "01 jul 2026 · 11:05",
    departure: "Fin del itinerario",
    transportIn: "Tren desde Venecia",
    transportOut: "—",
    stayLabel: "Destino final · varios días",
    stayDays: 3,
    summary:
      "La Ciudad Eterna: Imperio romano, Vaticano y la dolce vita. Reserva al menos un día para el Vaticano y otro para el centro antiguo.",
    places: [
      {
        name: "Coliseo y Foro Romano",
        category: "Historia",
        duration: "3–4 h",
        priority: "imprescindible",
        description:
          "Anfiteatro del siglo I y ruinas del centro de la Roma imperial. Entrada combinada con Palatino.",
        tip: "Compra «Full Experience» online; evita colas bajo el sol.",
      },
      {
        name: "Museos Vaticanos y Capilla Sixtina",
        category: "Museo / Religión",
        duration: "3–4 h",
        priority: "imprescindible",
        description:
          "Colección papal culminando en el techo de Miguel Ángel. Basílica de San Pedro al final.",
        tip: "Reserva entrada matinal; vestimenta sobria obligatoria.",
      },
      {
        name: "Basílica de San Pedro",
        category: "Religión",
        duration: "1–2 h",
        priority: "imprescindible",
        description:
          "La mayor iglesia del mundo: cúpula de Miguel Ángel, La Piedad y plaza barroca de Bernini.",
        tip: "Sube a la cúpula con reserva; vistas de Roma incomparables.",
      },
      {
        name: "Fontana di Trevi y Piazza di Spagna",
        category: "Monumento",
        duration: "1 h",
        priority: "imprescindible",
        description:
          "Tira una moneda para volver a Roma. La escalinata de España queda a pocos minutos.",
        tip: "Visita la fontana de madrugada o tarde noche para menos gente.",
      },
      {
        name: "Panteón",
        category: "Historia",
        duration: "45 min",
        priority: "imprescindible",
        description:
          "Templo romano mejor conservado con cúpula de hormigón y óculo central. Entrada gratuita (donativo).",
        tip: "Cerca de Piazza Navona; combina en un paseo.",
      },
      {
        name: "Piazza Navona y Campo de' Fiori",
        category: "Plaza",
        duration: "1–2 h",
        priority: "recomendado",
        description:
          "Plazas barrocas con fuentes de Bernini, cafés y mercado matutino de productos frescos.",
        tip: "Aperitivo al atardecer en Trastevere después.",
      },
      {
        name: "Castillo Sant'Angelo",
        category: "Historia",
        duration: "1.5 h",
        priority: "recomendado",
        description:
          "Mausoleo de Adriano convertido en fortaleza papal con vistas al Vaticano.",
        tip: "El puente de los ángeles conlleva a la Ciudad del Vaticano.",
      },
      {
        name: "Trastevere",
        category: "Barrio",
        duration: "2–3 h",
        priority: "recomendado",
        description:
          "Calles empedradas, trattorias auténticas y ambiente nocturno al otro lado del Tíber.",
        tip: "Cena en Da Enzo o similar; reserva mesa.",
      },
      {
        name: "Galería Borghese",
        category: "Museo",
        duration: "2 h",
        priority: "opcional",
        description:
          "Bernini, Caravaggio y Tiziano en villa con jardines en el Parque de Villa Borghese.",
        tip: "Entrada estrictamente con reserva horaria.",
      },
    ],
  },
];

export const timelineStops = cities.map((city, index) => ({
  order: index + 1,
  cityId: city.id,
  name: city.name,
  country: city.country,
  flag: city.flag,
  arrival: city.arrival,
  transportIn: city.transportIn,
  color: city.color,
}));
