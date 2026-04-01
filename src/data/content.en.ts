import type {
  Education,
  Experience,
  Project,
  SkillCategory,
  Certification,
  Service,
} from "./content";

export { hero, contact, footer } from "./content";

export const ui = {
  nav: {
    about: "About",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    portfolio: "Portfolio",
    skills: "Skills",
    certifications: "Certifications",
    services: "Services",
    contact: "Contact",
  },
  hero: {
    more: "More",
    contact: "Contact",
    role: "GIS Analyst",
  },
  sections: {
    about: "About",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    portfolio: "Portfolio",
    skills: "Skills",
    certifications: "Certifications",
    services: "Services",
    contact: "Contact",
  },
  contact: {
    tagline: "If you're interested in working together, feel free to get in touch.",
  },
  footer: {
    icoLabel: "Company ID",
    copyright: "© 2026 Petr Mikeska — Self-employed under Czech Trade Licensing Act",
  },
};

export const about: string[] = [
  "I develop geodata solutions at the intersection of WebGIS, spatial databases, remote sensing, and computer vision. I work with technologies such as PostGIS, PostgreSQL, Python, Leaflet, and FastAPI, focusing on practical applications over spatial and image data.",
  "I actively work in traditional GIS environments as well, primarily QGIS, ArcGIS Pro, and ArcGIS Online. I use them for spatial analyses, raster and vector data processing, cartographic outputs, and publishing map layers and web applications.",
  "I specialize in spatial database design, web mapping application development, geodata processing automation, and Python-based analytical workflows. I also work with satellite and raster data processing and applying computer vision for image and video analysis.",
  "I work on projects ranging from WebGIS applications with real-time IoT data and backends for spatial queries, to AI-based object detection from video. My long-term focus is connecting GIS, development, and data analytics into functional geodata solutions.",
  "Outside of technology, I have a strong connection to the mountains and sports. I'm from the Beskydy region, work as a snowboard instructor in winter, and in my free time I enjoy hiking, boxing, and music.",
];

export const education: Education[] = [
  {
    institution: "Palacký University Olomouc",
    institutionUrl: "https://www.upol.cz/",
    location: "Faculty of Science · Olomouc",
    degree: "MSc – Geoinformatics and Cartography (in progress)",
    type: "Follow-up Master's · full-time · 2 years",
    highlights: [
      "Advanced spatial analysis and modeling",
      "Web GIS, mapping applications and servers",
      "Remote sensing and image processing",
      "Advanced cartography and visualization",
      "Drones, laser scanning, 3D printing, VR",
    ],
  },
  {
    institution: "Palacký University Olomouc",
    institutionUrl: "https://www.upol.cz/",
    location: "Faculty of Science · Olomouc",
    degree: "BSc – Geoinformatics and Cartography",
    type: "Bachelor's · full-time · 3 years",
    highlights: [
      "GIS, RS, GPS, geostatistics, computer cartography",
      "Spatial analysis and land-use planning",
      "Thematic cartography",
      "Bachelor's thesis: GIS toolbox for evaluating park accessibility in cities",
    ],
  },
  {
    institution: "SSINFOTECH",
    institutionUrl: "https://www.ssinfotech.cz/",
    location: "Frýdek-Místek",
    degree: "Maturita – Programming and Application Development – Internet of Things",
    type: "Secondary vocational school · 4 years",
    highlights: [
      "Programming and application development",
      "Web technologies (HTML, CSS, backend)",
      "Computer networks and system administration",
      "Electronics fundamentals and Internet of Things",
      "Databases and application software",
    ],
  },
];

export const experience: Experience[] = [
  {
    company: "Skymaps s.r.o.",
    role: "GIS Analyst",
    period: "February 2025 – Present",
    location: "Czech Republic",
    highlights: [
      "Processing satellite imagery and raster data in a GIS environment",
      "Analyzing image data and subsequent interpretation",
      "Creating thematic soil potential maps using remote sensing",
      "Automating analytical steps with Python",
      "Linking image data with spatial analyses and map outputs",
      "Tools: QGIS, ArcGIS Pro, EO Browser",
    ],
  },
  {
    company: "Palacký University Olomouc",
    role: "Web Administrator",
    period: "May 2023 – Present",
    location: "Czech Republic",
    highlights: [
      "Managing website content updates and changes",
      "Resolving website issues and implementing fixes",
      "Updating content and features to reflect current information",
      "Tools: WordPress, YOOtheme Builder",
    ],
  },
  {
    company: "Skymaps s.r.o.",
    role: "GIS Analyst",
    period: "February 2025 – March 2025",
    location: "Czech Republic",
    highlights: [
      "Processing satellite imagery and raster data in a GIS environment",
      "Analyzing image data and subsequent interpretation",
    ],
  },
];

export const universityProjects: Experience[] = [
  {
    company: "Palacký University Olomouc",
    role: "3D Modeling Specialist",
    period: "December 2025 – February 2026",
    location: "Czech Republic",
    project:
      "Modeling, processing, and production of large-scale 3D models of two grottos including lighting and water installation",
    highlights: [
      "3D modeling of objects for physical installation and 3D printing",
      "Adjusting and optimizing model geometry for manufacturing",
      "Tools: Blender, 3D Builder",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "VečerkaPlus",
    description:
      "Late-night alcohol, drinks, and snacks delivery in Frýdek-Místek and surroundings, with emphasis on speed, simple ordering, and a modern web application.",
    features: [
      "Web ordering application development (React + Vite)",
      "Supabase integration (order and product database)",
      "Google Maps API integration (distance and delivery calculation)",
      "Notification automation (email + Telegram)",
      "UX design for fast late-night ordering",
    ],
    tags: ["React", "Vite", "Supabase", "PostgreSQL", "Google Maps API", "JavaScript"],
    link: "https://vecerkaplus.cz/",
    linkLabel: "vecerkaplus.cz",
  },
  {
    title: "AI Map Generation Evaluation",
    description:
      "Master's thesis: evaluating the quality of AI-generated maps using object-based metrics and cartographic analysis.",
    features: [
      "Analysis of AI-generated maps compared to traditional cartographic outputs",
      "Comparison with traditional outputs using GIS metrics",
      "Python pipeline for batch processing and statistical analysis",
    ],
    tags: ["Python", "GIS", "AI/ML"],
    link: "https://github.com/MetrPikeska/ai-generated-map-evaluation",
    linkLabel: "GitHub",
  },
  {
    title: "Park Accessibility Toolbox",
    description:
      "ArcGIS toolbox for analyzing park and green space accessibility in cities. Bachelor's thesis.",
    features: [
      "Network and spatial analysis for evaluating green space accessibility",
      "Pedestrian accessibility assessment of public green areas in urban environments",
    ],
    tags: ["ArcGIS Pro", "Python", "Network Analyst"],
    link: "https://github.com/MetrPikeska/park-accessibility-toolbox",
    linkLabel: "GitHub",
  },
  {
    title: "GEOTE Klima",
    description:
      "Web GIS platform for climate and environmental data with a PostGIS backend and interactive map.",
    features: [
      "PostGIS database with REST API for spatial queries on climate indicators",
      "Interactive Leaflet map with data visualization and filtering",
      "Full-stack: Python/Flask backend, PostgreSQL with spatial indexes",
    ],
    tags: ["PostGIS", "REST API", "JavaScript", "Python"],
    link: "https://github.com/MetrPikeska/geote-klima-ui",
    linkLabel: "GitHub",
  },
  {
    title: "VYGEO Opálená",
    description:
      "Real-time Web GIS application connecting IoT sensors with map visualization and PostGIS backend.",
    features: [
      "Real-time data stream from IoT sensors to PostGIS with WebSocket broadcast",
      "Leaflet map with dynamic layers and spatial queries",
      "REST API backend for managing meteorological data and ski runs",
    ],
    tags: ["Leaflet", "PostGIS", "REST API", "Python", "IoT"],
    link: "https://github.com/MetrPikeska/VYGEO",
    linkLabel: "GitHub",
  },
  {
    title: "Vehicle Detection – Roundabout",
    description:
      "YOLOv8 computer vision: vehicle detection and tracking from video with line-crossing logic.",
    features: [
      "YOLOv8 object detection + geometric tracking (Shapely polygons)",
      "GPU acceleration (CUDA) for real-time video sequence processing",
      "Aggregation of results into CSV and vehicle movement statistics",
    ],
    tags: ["Python", "YOLOv8", "OpenCV", "Shapely", "CUDA"],
    link: "https://github.com/MetrPikeska/01_Detekce_vyjezdu",
    linkLabel: "GitHub",
  },
  {
    title: "IoT Environmental Monitoring",
    description:
      "Complete IoT solution: sensors → backend → PostgreSQL with Grafana dashboard.",
    features: [
      "ESP32 sensor network (temperature, humidity, air quality) → MQTT/HTTP stream",
      "Python/FastAPI server with real-time ingestion to PostgreSQL with indexes",
      "Grafana dashboard for monitoring and historical analysis",
    ],
    tags: ["ESP32", "Python", "PostgreSQL", "REST API", "MQTT"],
    link: "https://github.com/MetrPikeska",
    linkLabel: "GitHub",
  },
  {
    title: "Air Pollution in MSK Region",
    description:
      "Cartographic study analyzing and visualizing air pollution in the Moravia-Silesia Region using analytical and synthetic maps.",
    features: [
      "Raster data, interpolation, pollutant analysis",
      "Cartographic visualization with analytical maps and synthetic typology",
      "GIS workflow for evaluating environmental burden in the Czech Republic",
    ],
    tags: ["Cartography", "GIS", "Analytical maps"],
    link: "https://petrmikeska.cz/sykar2026_kapitola_Mikeska.pdf",
    linkLabel: "PDF",
  },
  {
    title: "Ski Cam Analytics",
    description:
      "Computer vision application: real-time person detection and video analysis from HLS stream with AI.",
    features: [
      "YOLO ONNX detection + Kalman filter tracking with line-crossing and occupancy counters",
      "FastAPI + WebSocket for live metrics, SQLite persistence",
      "Chart.js dashboard – real-time visualization of metrics and trends",
    ],
    tags: ["Python", "FastAPI", "YOLO ONNX", "FFmpeg", "SQLite", "WebSocket"],
    link: "https://github.com/MetrPikeska/ski-cam-analytics",
    linkLabel: "GitHub",
  },
  {
    title: "Geo Places Quiz",
    description:
      "Web GIS application for practicing knowledge of Czech municipalities with extended jurisdiction (206 ORP) via interactive map.",
    features: [
      "Leaflet map with PostGIS backend – ČÚZK data, S-JTSK → WGS84",
      "Filtering by region and district, statistics in localStorage",
      "Node.js/Express API with caching and GZIP compression",
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
    name: "AI Tools",
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
    date: "May 2023",
    description:
      "Course covering Python programming fundamentals with a focus on GIS task automation and geospatial data processing.",
  },
  {
    name: "Introduction to IoT",
    issuer: "Cisco Networking Academy",
    date: "April 2020",
    description:
      "Course covering IoT and digital transformation, the importance of software and data, automation, artificial intelligence, and network security fundamentals.",
  },
  {
    name: "Online UAV Pilot Training",
    issuer: "Civil Aviation Authority CR / EASA",
    date: "October 2024",
    description:
      "Certificate / Authorization for unmanned aircraft pilots issued by the Civil Aviation Authority of the Czech Republic in compliance with EASA regulations.",
  },
  {
    name: "Snowboard Instructor APUL/D",
    issuer: "APUL",
    date: "December 2021 – January 2027",
    description:
      "Snowboard instruction license – Association of Professional Ski and Snowboard Instructors.",
  },
];

export const services: Service[] = [
  {
    title: "Spatial Databases & API",
    question: "Do you need a PostGIS database with REST API for spatial queries?",
    description:
      "Design and implementation of spatial databases in PostgreSQL + PostGIS. Creating efficient indexes, SQL spatial queries, and REST API backends for web applications.",
    tags: ["GIS", "Vector data", "Raster data", "Automation"],
  },
  {
    title: "Web GIS Applications",
    question: "Do you need an interactive map or dashboard with real-time data?",
    description:
      "Development of Web GIS applications with Leaflet frontend, PostGIS backend, and REST API. Real-time WebSocket streams, spatial filtering, and modern frontend architecture.",
    tags: ["Leaflet", "Web maps", "Data visualization", "Dashboard"],
  },
  {
    title: "Python Automation & Data Processing",
    question: "Do you have repetitive geodata tasks you'd like to automate?",
    description:
      "Python scripts for vector/raster data processing, geopandas pipelines, GDAL operations. GIS workflow automation, batch processing of satellite imagery, and ETL pipelines.",
    tags: ["PostGIS", "SQL", "Data models", "Data management"],
  },
  {
    title: "Computer Vision & GeoAI",
    question: "Do you need object detection from video or satellite image analysis with AI?",
    description:
      "YOLOv8 detection, image classification, segmentation. Remote sensing data processing and linking CV outputs with PostGIS for spatial analysis and visualization.",
    tags: ["YOLO", "OpenCV", "Python", "AI detection"],
  },
  {
    title: "Remote Sensing & DEM Processing",
    question: "Do you want to work with satellite imagery or DEM data?",
    description:
      "Processing satellite imagery (SNAP, GDAL), DEM/DSM analysis. Terrain operations (slope, aspect, hydrology), mosaicing, and orthorectification with GDAL/QGIS workflow.",
    tags: ["DEM/DSM", "3D modeling", "Terrain analysis", "Visualization"],
  },
  {
    title: "IoT & Real-Time Data Systems",
    question: "Do you need data collection and visualization from IoT sensors?",
    description:
      "IoT architecture: ESP32 sensors → MQTT/HTTP → Python backend → PostgreSQL. Real-time dashboards with WebSocket streams, time-series data, and monitoring applications.",
    tags: ["ESP32", "MQTT", "Python", "PostgreSQL"],
  },
];
