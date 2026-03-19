export interface Education {
  institution: string;
  institutionUrl: string;
  location: string;
  degree: string;
  type: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  features: string[];
  tags: string[];
  link: string;
  linkLabel: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  description: string;
}

export interface Service {
  title: string;
  question: string;
  description: string;
  tags: string[];
}

export const hero = {
  name: "Petr Mikeska",
  specialties: [
    "Web GIS",
    "Remote Sensing",
    "GeoAI",
    "Spatial Databases",
    "Computer Vision",
  ],
  hashtags: [
    "#geoinformatika",
    "#DPZ",
    "#webgis",
    "#prostoroveanalyzy",
    "#mapoveaplikace",
    "#geodata",
    "#computervision",
  ],
  coordinates: "49.5167°N, 18.3333°E",
  photo: "/passport.webp",
  linkedin: "https://www.linkedin.com/in/petr-mikeska-b25669262/",
  github: "https://github.com/metrpikeska",
  cvUrl: "https://petrmikeska.cz/assets/resume/Petr_Mikeska_CV.pdf",
};

export const about = [
  "Vyvíjím geodatová řešení na pomezí WebGIS, prostorových databází, dálkového průzkumu Země a computer vision. Pracuji s technologiemi jako PostGIS, PostgreSQL, Python, Leaflet a FastAPI a zaměřuji se na praktické aplikace nad prostorovými a obrazovými daty.",
  "Současně aktivně pracuji i v klasickém GIS prostředí, zejména v QGIS, ArcGIS Pro a ArcGIS Online. Využívám je pro prostorové analýzy, práci s rastrovými a vektorovými daty, kartografické výstupy i publikaci mapových vrstev a webových aplikací.",
  "Specializuji se na návrh prostorových databází, vývoj webových mapových aplikací, automatizaci zpracování geodat a analytické workflow v Pythonu. Věnuji se také zpracování satelitních a rastrových dat a využití computer vision pro analýzu obrazu a videa.",
  "Pracuji na projektech od WebGIS aplikací s real-time IoT daty přes backendy pro prostorové dotazy až po AI detekci objektů z videa. Dlouhodobě se zaměřuji na propojování GIS, vývoje a datové analytiky do funkčních geodatových řešení.",
  "Mimo technologie mám blízko k horám a sportu. Pocházím z Beskyd, v zimě působím jako instruktor snowboardingu a ve volném čase se věnuji turistice, boxu a hudbě.",
];

export const education: Education[] = [
  {
    institution: "Univerzita Palackého v Olomouci",
    institutionUrl: "https://www.upol.cz/",
    location: "Přírodovědecká fakulta · Olomouc",
    degree: "Mgr. – Geoinformatika a kartografie (probíhá)",
    type: "Navazující magisterské · prezenční · 2 roky",
    highlights: [
      "Pokročilé prostorové analýzy a modelování",
      "Webový GIS, mapové aplikace a servery",
      "Dálkový průzkum Země a zpracování obrazu",
      "Pokročilá kartografie a vizualizace",
      "Drony, laserové skenování, 3D tisk, VR",
    ],
  },
  {
    institution: "Univerzita Palackého v Olomouci",
    institutionUrl: "https://www.upol.cz/",
    location: "Přírodovědecká fakulta · Olomouc",
    degree: "Bc. – Geoinformatika a kartografie",
    type: "Bakalářské · prezenční · 3 roky",
    highlights: [
      "GIS, DPZ, GPS, geostatistika, počítačová kartografie",
      "Prostorové analýzy a územní plánování",
      "Tematická kartografie",
      "Bakalářská práce: GIS toolbox pro hodnocení dostupnosti parků ve městech",
    ],
  },
  {
    institution: "SSINFOTECH",
    institutionUrl: "https://www.ssinfotech.cz/",
    location: "Frýdek-Místek",
    degree: "Maturita – Programování a vývoj aplikací – Internet věcí",
    type: "Střední odborná škola · 4 roky",
    highlights: [
      "Programování a vývoj aplikací",
      "Webové technologie (HTML, CSS, backend)",
      "Počítačové sítě a správa systémů",
      "Základy elektroniky a Internetu věcí",
      "Databáze a aplikační software",
    ],
  },
];

export const experience: Experience[] = [
  {
    company: "Skymaps s.r.o.",
    role: "Analytik GIS",
    period: "únor 2025 – Současnost",
    location: "Česká republika",
    highlights: [
      "Zpracování satelitních snímků a rastrových dat v prostředí GIS",
      "Analýza obrazových dat a jejich následná interpretace",
      "Tvorba tematických map půdního potenciálu na základě DPZ",
      "Automatizace dílčích analytických kroků pomocí Pythonu",
      "Propojení obrazových dat s prostorovými analýzami a mapovými výstupy",
      "Nástroje: QGIS, ArcGIS Pro, EO Browser",
    ],
  },
  {
    company: "Univerzita Palackého v Olomouci",
    role: "Správce webu",
    period: "květen 2023 – Současnost",
    location: "Česká republika",
    highlights: [
      "Správa aktualizací a změn obsahu webových stránek",
      "Řešení chyb na webových stránkách a implementace oprav",
      "Aktualizace obsahu a funkcí tak, aby odrážely aktuální informace",
      "Nástroje: WordPress, YOOtheme Builder",
    ],
  },
  {
    company: "Univerzita Palackého v Olomouci",
    role: "3D Modeling Specialist",
    period: "prosinec 2025 – únor 2026",
    location: "Česká republika",
    highlights: [
      "3D modelování objektů pro fyzickou instalaci a 3D tisk",
      "Úprava a optimalizace geometrie modelů pro výrobu",
      "Nástroje: Blender, 3D Builder",
    ],
  },
  {
    company: "Skymaps s.r.o.",
    role: "Analytik GIS",
    period: "únor 2025 – březen 2025",
    location: "Česká republika",
    highlights: [
      "Zpracování satelitních snímků a rastrových dat v prostředí GIS",
      "Analýza obrazových dat a jejich následná interpretace",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "AI Map Generation Evaluation",
    description:
      "Diplomová práce: evaluace kvality map generovaných AI pomocí objektních metrik a kartografické analýzy.",
    features: [
      "Analýza map generovaných AI ve srovnání s tradičními kartografickými výstupy",
      "Porovnání s tradičními kartografickými výstupy pomocí GIS metrik",
      "Python pipeline pro batch processing a statistické analýzy",
    ],
    tags: ["Python", "GIS", "AI/ML"],
    link: "https://github.com/MetrPikeska/ai-generated-map-evaluation",
    linkLabel: "GitHub",
  },
  {
    title: "Park Accessibility Toolbox",
    description:
      "ArcGIS toolbox pro analýzu dostupnosti parků a zeleně ve městech. Bakalářská práce.",
    features: [
      "Síťová a prostorová analýza pro hodnocení dostupnosti zeleně",
      "Hodnocení pěší dostupnosti veřejných zelených ploch v urbánním prostředí",
    ],
    tags: ["ArcGIS Pro", "Python", "Network Analyst"],
    link: "https://github.com/MetrPikeska/park-accessibility-toolbox",
    linkLabel: "GitHub",
  },
  {
    title: "GEOTE Klima",
    description:
      "Web GIS platforma pro klimatické a environmentální data s PostGIS backendem a interaktivní mapou.",
    features: [
      "PostGIS databáze s REST API pro prostorové dotazy na klimatické indikátory",
      "Interaktivní Leaflet mapa s vizualizací a filtrováním dat",
      "Full-stack: Python/Flask backend, PostgreSQL s prostorovými indexy",
    ],
    tags: ["PostGIS", "REST API", "JavaScript", "Python"],
    link: "https://github.com/MetrPikeska/geote-klima-ui",
    linkLabel: "GitHub",
  },
  {
    title: "VYGEO Opálená",
    description:
      "Real-time Web GIS aplikace propojující IoT senzory s mapovou vizualizací a PostGIS backendem.",
    features: [
      "Real-time stream dat z IoT senzorů do PostGIS s WebSocket broadcastem",
      "Leaflet mapa s dynamickými vrstvami a spatial queries",
      "REST API backend pro správu meteorologických dat a sjezdovek",
    ],
    tags: ["Leaflet", "PostGIS", "REST API", "Python", "IoT"],
    link: "https://github.com/MetrPikeska/VYGEO",
    linkLabel: "GitHub",
  },
  {
    title: "Vehicle Detection – Roundabout",
    description:
      "YOLOv8 computer vision: detekce a tracking vozidel z videa s line-crossing logiky.",
    features: [
      "YOLOv8 objektová detekce + geometrické tracking (Shapely polygony)",
      "GPU acceleration (CUDA) pro real-time zpracování videosekvencí",
      "Agregace výsledků do CSV a statistik pohybu vozidel",
    ],
    tags: ["Python", "YOLOv8", "OpenCV", "Shapely", "CUDA"],
    link: "https://github.com/MetrPikeska/01_Detekce_vyjezdu",
    linkLabel: "GitHub",
  },
  {
    title: "IoT Environmental Monitoring",
    description:
      "Kompletní IoT řešení: senzory \u2192 backend \u2192 PostgreSQL s Grafana dashboardem.",
    features: [
      "ESP32 senzorová síť (teplota, vlhkost, air quality) \u2192 MQTT/HTTP stream",
      "Python/FastAPI server s real-time ingestion do PostgreSQL s indexy",
      "Grafana dashboard pro monitoring a historické analýzy",
    ],
    tags: ["ESP32", "Python", "PostgreSQL", "REST API", "MQTT"],
    link: "https://github.com/MetrPikeska",
    linkLabel: "GitHub",
  },
  {
    title: "Znečištění ovzduší v MSK",
    description:
      "Kartografická práce zaměřená na analýzu a vizualizaci znečištění ovzduší v Moravskoslezském kraji pomocí analytických map a syntetických map.",
    features: [
      "Rastrová data, interpolace, analýza znečišťujících látek",
      "Kartografická vizualizace s analytickými mapami a syntetickou typizací",
      "GIS workflow pro hodnocení environmental burden v ČR",
    ],
    tags: ["Kartografie", "GIS", "Analytické mapy"],
    link: "https://petrmikeska.cz/sykar2026_kapitola_Mikeska.pdf",
    linkLabel: "PDF",
  },
  {
    title: "Ski Cam Analytics",
    description:
      "Computer vision application: real-time detekce osob a analýza videa z HLS streamu s AI.",
    features: [
      "YOLO ONNX detekce + Kalman filter tracking s line-crossing a occupancy counters",
      "FastAPI + WebSocket pro live metriky, SQLite persistence",
      "Chart.js dashboard – real-time vizualizace metrics a trendů",
    ],
    tags: ["Python", "FastAPI", "YOLO ONNX", "FFmpeg", "SQLite", "WebSocket"],
    link: "https://github.com/MetrPikeska/ski-cam-analytics",
    linkLabel: "GitHub",
  },
  {
    title: "Geo Places Quiz",
    description:
      "Webová GIS aplikace pro procvičování znalostí obcí s rozšířenou působností ČR (206 ORP) formou interaktivní mapy.",
    features: [
      "Leaflet mapa s PostGIS backendem – data ČÚZK, S-JTSK \u2192 WGS84",
      "Filtrování podle kraje a okresu, statistiky v localStorage",
      "Node.js/Express API s kešováním a GZIP kompresí",
    ],
    tags: ["JavaScript", "Leaflet", "Node.js", "PostGIS", "Express"],
    link: "https://github.com/MetrPikeska/geo-places-quiz",
    linkLabel: "GitHub",
  },
];

export const skills: SkillCategory[] = [
  {
    name: "GIS & Spatial Tools",
    items: [
      "QGIS",
      "ArcGIS Pro",
      "GDAL/OGR",
      "GeoServer",
      "MapServer",
      "SNAP",
      "Agisoft Metashape",
      "OGC Standards",
      "CloudCompare",
    ],
  },
  {
    name: "Programming Languages",
    items: ["Python", "JavaScript", "SQL", "Bash", "C#"],
  },
  {
    name: "Web Technologies",
    items: ["HTML", "CSS", "REST API", "WordPress", "YOOtheme", "Supabase"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "PostGIS", "MySQL", "Supabase"],
  },
  {
    name: "Geospatial & Data Libraries",
    items: ["GeoPandas", "Shapely", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    name: "Computer Vision & AI",
    items: ["YOLOv8", "OpenCV", "TensorFlow", "PyTorch"],
  },
  {
    name: "AI Nástroje",
    items: ["GitHub Copilot", "Claude"],
  },
  {
    name: "3D & Visualization",
    items: ["Blender", "MeshLab"],
  },
  {
    name: "DevOps & Infrastructure",
    items: ["Git", "GitHub", "Linux", "Ubuntu", "Docker"],
  },
];

export const certifications: Certification[] = [
  {
    name: "Python for Everyone",
    issuer: "Esri",
    date: "Květen 2023",
    description:
      "Kurz pokrývající základy programování v Pythonu se zaměřením na automatizaci GIS úloh a práci s geoprostorovými daty.",
  },
  {
    name: "Introduction to IoT",
    issuer: "Cisco Networking Academy",
    date: "Duben 2020",
    description:
      "Kurz pokrýval IoT a digitální transformaci, důležitost softwaru a dat, automatizaci, umělou inteligenci a základy síťové bezpečnosti.",
  },
  {
    name: "Online výcvik pilota bezpilotních prostředků",
    issuer: "Úřad pro civilní letectví ČR / EASA",
    date: "Říjen 2024",
    description:
      "Certifikát / Oprávnění pro piloty bezpilotních prostředků vydaný Úřadem pro civilní letectví ČR v souladu s předpisy EASA.",
  },
  {
    name: "Instruktor snowboardingu APUL/D",
    issuer: "APUL",
    date: "Prosinec 2021 – Leden 2027",
    description:
      "Licence instrukce snowboardingu – Asociace profesionálních učitelů lyžování a lyžařských škol.",
  },
];

export const services: Service[] = [
  {
    title: "Spatial Databases & API",
    question: "Potřebujete PostGIS databázi s REST API pro prostorové dotazy?",
    description:
      "Návrh a implementace prostorových databází v PostgreSQL + PostGIS. Tvorba efektivních indexů, SQL spatial queries a REST API backendu pro webové aplikace.",
    tags: ["GIS", "Vektorová data", "Rastrová data", "Automatizace"],
  },
  {
    title: "Web GIS Applications",
    question: "Chcete interaktivní mapu nebo dashboard s real-time daty?",
    description:
      "Vývoj web GIS aplikací s Leaflet frontendem, PostGIS backendem a REST API. Real-time WebSocket streamy, spatial filtering a modern frontend architektura.",
    tags: ["Leaflet", "Webové mapy", "Vizualizace dat", "Dashboard"],
  },
  {
    title: "Python Automation & Data Processing",
    question: "Máte opakující se úkoly s geodaty, která chcete automatizovat?",
    description:
      "Python scripty pro zpracování vektorových/rastrových dat, geopandas pipelines, GDAL operace. Automatizace GIS workflow, batch processing satelitních snímků a ETL pipeline.",
    tags: ["PostGIS", "SQL", "Datové modely", "Správa dat"],
  },
  {
    title: "Computer Vision & GeoAI",
    question:
      "Potřebujete detekci objektů z videa nebo analýzu satelitních snímků s AI?",
    description:
      "YOLOv8 detekce, image classification, segmentace. Zpracování remote sensing dat a propojení CV výstupů s PostGIS pro prostorové analýzy a vizualizace.",
    tags: ["YOLO", "OpenCV", "Python", "AI detekce"],
  },
  {
    title: "Remote Sensing & DEM Processing",
    question: "Chcete pracovat se satelitními snímky nebo DEM daty?",
    description:
      "Zpracování satelitních snímků (SNAP, GDAL), DEM/DSM analýzy. Terénní operace (sklon, aspekt, hydrologie), mosaicing a ortorektifikace s GDAL/QGIS workflow.",
    tags: ["DEM/DSM", "3D modelování", "Terénní analýzy", "Vizualizace"],
  },
  {
    title: "IoT & Real-Time Data Systems",
    question: "Potřebujete sběr a vizualizaci dat z IoT senzorů?",
    description:
      "IoT architektura: ESP32 senzory \u2192 MQTT/HTTP \u2192 Python backend \u2192 PostgreSQL. Real-time dashboardy s WebSocket streamem, time-series data a monitorovací aplikace.",
    tags: ["ESP32", "MQTT", "Python", "PostgreSQL"],
  },
];

export const contact = {
  email: "piter.mikeska@gmail.com",
  phone: "+420 773 426 330",
  linkedin: "https://www.linkedin.com/in/petr-mikeska-b25669262/",
  github: "https://github.com/MetrPikeska",
  website: "https://petrmikeska.cz",
};

export const footer = {
  name: "Petr Mikeska",
  address: "Čeladná 53",
  zip: "739 12 Čeladná",
  ico: "23195126",
  copyright:
    "\u00a9 2026 Petr Mikeska \u2014 Fyzická osoba podnikající dle živnostenského zákona",
};
