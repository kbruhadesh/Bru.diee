// ============================================================
// EDIT THIS FILE to make the site yours.
// Everything the site displays lives here — no need to touch
// any component code.
// ============================================================

export const profile = {
  name: "Bruhadesh",
  handle: "kbruhadesh",
  role: "SWE Intern @ Diebold Nixdorf | Final-Year CSE (AI)",
  tagline:
    "I build full-stack systems and agentic AI tooling — from procurement platforms to distributed data pipelines.",
  about: [
    "Hey, I'm Bruhadesh — a final-year B.Tech CSE student specializing in AI at Amrita Vishwa Vidyapeetham, Kerala, graduating in 2027.",
    "I'm currently a Software Engineering Intern on the R&D team at Diebold Nixdorf, working on agentic AI. Before that I interned at ItVersity, building ETL pipelines and a QuickBooks-to-Zoho migration tool.",
    "Outside of internships I build things end to end: a full BoM Analyzer for Indian electronics procurement (FastAPI, Celery, Redis, five vendor scrapers), a BoM CSV comparison tool with fuzzy matching and cost rollups, and a Big Data pipeline analyzing Urban Heat Island effects across 11 Indian cities using 24 years of NASA satellite data.",
    "I'm also on the Core Organizing Committee for TEDxAmritaAmritapuri. When I'm not shipping code, I'm usually deep in some new corner of full-stack dev, data engineering, or ML.",
  ],
  location: "Kerala, India",
  email: "kbruhadesh@gmail.com",
  socials: {
    github: "https://github.com/kbruhadesh",
    linkedin: "https://www.linkedin.com/in/kbruhadesh/",
  },
  resume: "/ResumeII.pdf",
  // Shown by the `neofetch` terminal command
  uptime: "shipping full-stack & AI projects since 2024",
};

// Media apps — swap these ids to change what plays
export const media = {
  // open.spotify.com/playlist/<id>
  spotifyPlaylist: "37i9dQZF1DWWQRwui0ExPn", // Lofi Beats
};

export type Project = {
  id: string;
  name: string;
  blurb: string;
  description: string;
  // Theme hex used to tint the banner, icon accents + stat tiles
  accent: string;
  // Headline numbers shown as stat tiles
  metrics?: { value: string; label: string }[];
  // Workflow / engineering highlights shown as bullets
  highlights?: string[];
  // ASCII architecture diagram, rendered in a mono <pre>
  architecture?: string;
  stack: string[];
  link?: string;
  repo?: string;
  year: string;
  status: "shipped" | "in-progress" | "archived";
};

export const projects: Project[] = [
  {
    id: "bom-analyzer",
    name: "BoM Analyzer",
    blurb: "Electronics procurement, done right — scraped, priced, and optimized in INR.",
    description:
      "A full-featured Bill-of-Materials analyzer built for Indian electronics procurement. It scrapes live pricing from five vendors, runs a weighted cost optimizer across them, and exports a clean report — all wrapped in a React/Vite frontend with a PCB-dark theme.",
    highlights: [
      "Five vendor scrapers (DigiKey, Mouser, LCSC, Arrow, Robu.in, Evelta) running as async Celery workers behind FastAPI.",
      "Weighted cost optimizer picks the best vendor mix per BoM line, INR-denominated throughout.",
      "Excel exporter turns the optimized BoM into a shareable procurement report.",
      "React/Vite frontend with a custom polling state machine to track long-running scrape jobs.",
    ],
    architecture: `BoM upload ──▶ FastAPI ──▶ Celery task queue
                            │
        ┌───────────┬───────┴───────┬───────────┐
        ▼           ▼               ▼           ▼
     DigiKey      Mouser      LCSC/Arrow      Robu/Evelta
        └───────────┴───────┬───────┴───────────┘
                             ▼
                    cost optimizer (weighted)
                             │
                             ▼
                  Excel export ──▶ React/Vite UI`,
    accent: "#02656A",
    metrics: [
      { value: "5", label: "vendors scraped" },
      { value: "INR", label: "native pricing" },
      { value: "Docker", label: "full stack" },
    ],
    stack: ["FastAPI", "Celery", "Redis", "Docker Compose", "React"],
    repo: "https://github.com/kbruhadesh",
    year: "2026",
    status: "shipped",
  },
  {
    id: "bom-csv-compare",
    name: "BoM CSV Comparison Tool",
    blurb: "Diff two BoM revisions and actually trust the answer.",
    description:
      "A tool for comparing BoM revisions that goes beyond a naive row diff: dynamic primary-key selection, fuzzy matching for renamed parts, automatic cost rollups, and a side-by-side view with Chart.js visualizations.",
    highlights: [
      "Dynamic primary-key selection so the comparison adapts to whatever columns a given BoM export uses.",
      "Fuzzy matching catches renamed or reformatted part numbers instead of flagging false diffs.",
      "Cost rollup and rename detection surface the changes that actually matter to procurement.",
      "Full React frontend rewrite with a dedicated Side-by-Side tab and Chart.js visualizations.",
    ],
    architecture: `BoM v1 CSV ──▶ parser ──┐
                              ├──▶ fuzzy match + PK resolve
BoM v2 CSV ──▶ parser ──┘             │
                                       ▼
                        diff engine: cost rollup · renames
                                       │
                                       ▼
                     React UI: side-by-side · Chart.js`,
    accent: "#E8A33D",
    stack: ["React", "Vite", "Chart.js", "Fuzzy Matching"],
    repo: "https://github.com/kbruhadesh",
    year: "2026",
    status: "shipped",
  },
  {
    id: "urban-heat-island",
    name: "Urban Heat Island Analysis",
    blurb: "24 years of satellite data, 11 Indian cities, one Spark pipeline.",
    description:
      "A Big Data Analytics project studying Urban Heat Island effects across 11 Indian cities using 24 years of NASA MODIS satellite data. An Apache Spark pipeline feeds a Spark MLlib RandomForestRegressor that forecasts trends out to 2030, all surfaced through a Streamlit + Plotly + Folium dashboard.",
    highlights: [
      "Apache Spark pipeline processes 24 years of NASA MODIS satellite data across 11 Indian cities.",
      "Spark MLlib RandomForestRegressor forecasts urban heat trends out to 2030.",
      "Streamlit + Plotly + Folium dashboard for interactive exploration of city-level heat trends.",
    ],
    architecture: `NASA MODIS (24yr) ──▶ Spark ETL pipeline
                                │
                     Spark MLlib RandomForest
                       (forecast to 2030)
                                │
                                ▼
          Streamlit + Plotly + Folium dashboard`,
    accent: "#9DBFA9",
    metrics: [
      { value: "11", label: "cities analyzed" },
      { value: "24yr", label: "of MODIS data" },
      { value: "2030", label: "forecast horizon" },
    ],
    stack: ["Apache Spark", "MLlib", "Streamlit", "Plotly"],
    year: "2025",
    status: "shipped",
  },
  {
    id: "isl-translator",
    name: "Indian Sign Language Translator",
    blurb: "Turning hand gestures into text, frame by frame.",
    description:
      "A computer vision system that recognizes Indian Sign Language gestures in real time and translates them into text, built on hand-landmark tracking and a trained classifier pipeline.",
    highlights: [
      "Real-time hand-landmark tracking feeds a trained gesture classifier.",
      "Pipeline built to handle the variability of real-world camera input, not just clean lab footage.",
    ],
    architecture: `camera feed ──▶ hand landmark detection
                       │
                       ▼
              gesture classifier
                       │
                       ▼
                translated text`,
    accent: "#E5928E",
    stack: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    year: "2024",
    status: "shipped",
  },
  {
    id: "parkinsons-ml",
    name: "Parkinson's Severity: Glass-Box vs Black-Box ML",
    blurb: "Comparing interpretable models against black-box ones on the same clinical problem.",
    description:
      "A machine learning interpretability study comparing glass-box (inherently interpretable) models against black-box models for predicting Parkinson's disease severity, examining the accuracy-vs-explainability tradeoff.",
    highlights: [
      "Side-by-side evaluation of interpretable models against black-box ML on the same severity-prediction task.",
      "Focus on what's lost and gained in explainability when swapping model families.",
    ],
    accent: "#02656A",
    stack: ["Python", "scikit-learn", "ML Interpretability"],
    year: "2024",
    status: "shipped",
  },
  {
    id: "auto-aim-turret",
    name: "Auto-Aim Turret",
    blurb: "A ROS2 turret that tracks and aims — built on a Raspberry Pi.",
    description:
      "A computer-vision-driven auto-aim turret built with ROS2 and a Raspberry Pi, combining real-time object tracking with motor control to follow and aim at a target.",
    highlights: [
      "ROS2 nodes handle vision tracking and motor control as separate, communicating processes.",
      "Runs entirely on Raspberry Pi hardware, tuned for low-latency tracking.",
    ],
    accent: "#E8A33D",
    stack: ["ROS2", "Python", "Raspberry Pi", "Computer Vision"],
    year: "2024",
    status: "shipped",
  },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  points: string[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    id: "diebold-nixdorf",
    company: "Diebold Nixdorf",
    role: "Software Engineering Intern",
    period: "Jun 2026 — Present",
    points: [
      "Working within the R&D team on agentic AI systems, contributing to research-driven feature development.",
      "Collaborating cross-functionally to design and prototype AI-driven tooling for internal workflows.",
    ],
    stack: ["Agentic AI", "Python"],
  },
  {
    id: "itversity",
    company: "ItVersity",
    role: "Software Engineer Intern",
    period: "Jun 2024 — Sep 2024",
    points: [
      "Built and maintained ETL pipelines for internal data processing workflows.",
      "Developed a QuickBooks-to-Zoho migration tool to automate cross-platform financial data transfer.",
    ],
    stack: ["Python", "ETL"],
  },
  {
    id: "tedx",
    company: "TEDxAmritaAmritapuri",
    role: "Core Organizing Committee",
    period: "Ongoing",
    points: [
      "Part of the core team organizing and running the TEDx event at Amrita's Amritapuri campus.",
    ],
  },
];

export type Education = {
  id: string;
  school: string;
  degree: string;
  period: string;
  detail: string;
};

export const education: Education[] = [
  {
    id: "amrita",
    school: "Amrita Vishwa Vidyapeetham",
    degree: "B.Tech in Computer Science & Engineering (AI specialization)",
    period: "2023 — 2027",
    detail:
      "Final-year student in Kerala, India, specializing in AI while shipping full-stack and data projects on the side.",
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["Python", "TypeScript", "SQL"],
  Backend: ["FastAPI", "Node.js", "Celery", "REST APIs"],
  Frontend: ["React", "Vite", "Tailwind CSS"],
  "Data & Cloud": ["Apache Spark", "Docker", "Redis", "PostgreSQL"],
  "AI Infra": ["Agentic AI", "RAG / NLP", "Computer Vision", "ML Interpretability"],
  Tools: ["Git", "ROS2"],
};

// Fun facts revealed by easter eggs / terminal
export const funFacts = [
  "I built a BoM Analyzer that scrapes five different electronics vendors just to save myself (and hopefully you) some money.",
  "I'm on the Core Organizing Committee for TEDxAmritaAmritapuri.",
  "I ran a Spark pipeline over 24 years of NASA satellite data to study Urban Heat Islands across 11 Indian cities.",
  "I built a computer-vision turret with ROS2 on a Raspberry Pi, just to see if I could.",
  "I once built a QuickBooks-to-Zoho migration tool so nobody had to move that data by hand.",
];

export type Blog = {
  id: string;
  title: string;
  date: string; // e.g. "Oct 2026"
  summary: string;
  tags?: string[];
  link?: string; // Medium / dev.to / Hashnode / your own URL
};

// Add your posts here — newest first. Example:
// {
//   id: "my-first-post",
//   title: "Post title",
//   date: "Oct 2026",
//   summary: "One or two lines about what the post covers.",
//   tags: ["AI", "FastAPI"],
//   link: "https://medium.com/@you/my-first-post",
// },
export const blogs: Blog[] = [];
