import fs from 'fs'
import path from 'path'
import type { ReactNode } from 'react'
import { ContactForm } from './components/ContactForm'
import { SkillsSlider } from './components/SkillsSlider'
import { ExperiencePanel } from './components/ExperiencePanel'
import { ResearchPanel } from './components/ResearchPanel'
import { InstitutionLogo } from './components/InstitutionLogo'
import { ProjectsSlider } from './components/ProjectsSlider'

export const dynamic = 'force-dynamic'

interface PortfolioContent {
  hero: { greeting: string; name: string; title: string; tagline: string; availability: string }
  about: { summary: string; highlights: string[] }
  contact: { email: string; phone: string; linkedin: string; github: string; medium: string; location: string }
}

function getContent(): PortfolioContent {
  try {
    const file = fs.readFileSync(path.join(process.cwd(), 'data', 'content.json'), 'utf-8')
    return JSON.parse(file)
  } catch {
    return {
      hero: { greeting: "Hello, I'm", name: 'Imansha Dilshan', title: 'AI Engineer | Full-Stack Developer', tagline: 'Building production-grade Generative AI systems, LLM-powered RAG pipelines, and scalable full-stack applications.', availability: 'Available' },
      about: { summary: 'Final-year Software Engineering undergraduate and AI Engineer with hands-on experience building production Generative AI systems.', highlights: ['IEEE Research — IRAI 2026 Melbourne', 'WSO2 Industry Experience', 'CGPA: 3.92 / 4.00'] },
      contact: { email: 'imansha.idr@gmail.com', phone: '+94 76 311 7229', linkedin: 'https://www.linkedin.com/in/imanshadilshan', github: 'https://github.com/imanshadilshan', medium: 'https://medium.com/@imansha.idr', location: 'Colombo, Sri Lanka' },
    }
  }
}

/* ─── Static CV data ─── */

const allSkills = [
  { category: 'Gen AI & ML',    items: ['LLMs', 'Prompt Engineering', 'RAG Pipelines', 'Multi-Agent Systems', 'LangGraph', 'Vector Databases', 'pgvector', 'Embedding Pipelines', 'Multimodal AI', 'AI Evaluation', 'Computer Vision', 'YOLOv8', 'TensorFlow', 'Keras', 'Scikit-learn'] },
  { category: 'AI Frameworks',  items: ['LangChain', 'LangGraph', 'FastAPI', 'Streamlit', 'Gemini AI', 'OpenAI API'] },
  { category: 'Backend',        items: ['Python', 'Java', 'Spring Boot', 'Node.js', 'Express.js', 'Ballerina', 'PHP'] },
  { category: 'Frontend',       items: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { category: 'Databases',      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'pgvector'] },
  { category: 'Cloud & DevOps', items: ['GCP', 'Azure', 'WSO2 Choreo', 'Docker', 'Asgardeo (IAM)', 'RabbitMQ', 'Git', 'Figma'] },
]

const experience = {
  logo: '/Experiences/wso2.png',
  company: 'WSO2 Lanka (Private) Limited',
  role: 'Software Engineering Intern',
  team: 'Solution Architect Team',
  location: 'Colombo, Sri Lanka (On-site)',
  period: 'Sep 2025 – Feb 2026',
  milestones: [
    {
      label: 'Shared Google Drive Support',
      subtitle: 'Open-Source Ballerina Connector Enhancement',
      metric: { value: 'v3.4.1', label: 'Ballerina Central Release' },
      description: 'Identified that the existing Ballerina Google Drive connector lacked shared drive support, blocking access to documents stored in the enterprise "Customers" shared drive. Enhanced the connector to enable shared Google Drive access for document ingestion into vectorization workflows. The feature was officially released as ballerinax/googleapis.drive v3.4.1 on Ballerina Central.',
      focuses: [
        'Extended the open-source Ballerina Google Drive connector with shared drive API support',
        'Enabled enterprise document ingestion for downstream vectorization workflows',
        'Contributed to and published ballerinax/googleapis.drive v3.4.1 on Ballerina Central',
      ],
      tech: ['Ballerina', 'Google Drive API', 'Ballerina Central', 'WSO2'],
    },
    {
      label: 'Geronimo Phase 2',
      subtitle: 'GenAI-Powered Lead Intelligence System',
      metric: { value: 'Hybrid', label: 'Lexical + Semantic Search' },
      description: 'Engineered a GenAI-powered automation system for WSO2 sales teams that processes internal solution documents and historical lead interactions. When a lead is submitted through the Contact Us form, the system applies lexical and semantic search combined with LLM validation to identify relevant past engagements and solution documents, then shares consolidated insights with Solution Architects and Account Managers.',
      focuses: [
        'Designed and built hybrid lexical + semantic retrieval pipeline over internal knowledge base',
        'Integrated LLM-based validation to filter and rank relevant historical engagements',
        'Automated insight delivery to Solution Architects and Account Managers via email',
      ],
      tech: ['Python', 'RAG', 'pgvector', 'GPT-4o', 'LangChain', 'FastAPI', 'GCP'],
    },
    {
      label: 'Vectorization Service Enhancement',
      subtitle: 'Multi-Level Document Summarization Pipeline',
      metric: { value: '250K+', label: 'Token Handling Capacity' },
      description: 'The original service supported only chunk-level embeddings, limiting document-level understanding. Enhanced it by introducing full-document summarization and customer-focused keyword generation using GPT-4o. Implemented three multi-level strategies — Direct Summarization (<8K tokens), Hierarchical Summarization (8K–250K tokens), and Mega Document Processing (>250K tokens) — preventing the "lost-in-the-middle" issue in long-context LLM processing.',
      focuses: [
        'Introduced full-document summarization and keyword generation via GPT-4o',
        'Built three-tier summarization strategy handling documents from 1K to 250K+ tokens',
        'Significantly strengthened semantic retrieval quality and contextual understanding',
      ],
      tech: ['GPT-4o', 'Python', 'OpenAI API', 'Vector Embeddings', 'pgvector', 'GCP'],
    },
    {
      label: 'Geronimo Response Service Enhancement',
      subtitle: 'Document-Level LLM-Validated Precision Pipeline',
      metric: { value: 'GPT-4o', label: 'Validation Engine' },
      description: 'Upgraded the Response Service from chunk-level similarity retrieval to a document-level, LLM-validated precision pipeline. The system now validates document summaries for relevance, coverage, and contextual alignment using GPT-4o, and reranks results based on LLM-derived scoring. Past interaction retrieval was also improved through keyword extraction and LLM-based validation against lead identifiers, reducing false positives.',
      focuses: [
        'Shifted from vector similarity to GPT-4o-based document relevance and coverage scoring',
        'Implemented keyword extraction + LLM validation for past interaction retrieval',
        'Reduced false positives and improved recommendation reliability for sales teams',
      ],
      tech: ['GPT-4o', 'Python', 'pgvector', 'Semantic Search', 'LangChain', 'GCP'],
    },
    {
      label: 'Geronimo Phase 1 — V2 Production',
      subtitle: 'Real-Time Lead Enrichment Report Service',
      metric: { value: 'Live', label: 'Production Deployed' },
      description: 'Completed the enhancement and production deployment of Geronimo Phase 1 v2, a FastAPI-based real-time Lead Report Service. Uses a hybrid grounded search approach combining Gemini reasoning with live Google Search to generate verified insights about a lead\'s professional background, social presence, company profile, competitors, and recent news. Reports are sent via email and stored in BigQuery.',
      focuses: [
        'Built FastAPI Lead Report Service with Gemini + live Google Search grounding',
        'Generated structured HTML reports delivered via email to Solution Engineers',
        'Enriched lead data stored in BigQuery; deployed to production on WSO2 Choreo',
      ],
      tech: ['FastAPI', 'Gemini AI', 'Google Search API', 'BigQuery', 'WSO2 Choreo', 'Python'],
    },
  ],
}

const research = {
  title: 'An Agentic Generative AI Framework for Industrial Predictive Maintenance: Physics-Aware Anomaly Detection with Multimodal Retrieval-Augmented Generation',
  badge: 'IEEE IES Generative AI Challenge 2026',
  venue: 'IRAI 2026 · Melbourne, Australia',
  period: 'Mar 2026 – Jul 2026',
  contributions: [
    {
      label: 'Multimodal RAG Engine',
      subtitle: 'Vision-Language Alignment via GPT-4o Captioning',
      metric: { value: '1536d', label: 'Unified Embedding Space' },
      description: 'A multimodal RAG engine employing GPT-4o Vision captioning to convert engineering diagrams and schematics into domain prose, stored within a unified 1536-dimensional pgvector embedding space. Enables cross-modal retrieval of text, tables, and image captions without auxiliary visual indices. Iteratively evolved through V1→V4 stages driven by observed production retrieval failures.',
      focuses: [
        'YOLOv8-DocLayNet layout detection on 150-DPI document renders for precise region extraction',
        'GPT-4o Vision captioning of engineering schematics into semantically rich domain prose',
        'Unified pgvector index for text, table, and image caption co-storage at 1536 dimensions',
        'V4 pipeline: GPT-4o + Voronoi tessellation + Mobile SAM for composite figure decomposition',
      ],
      tech: ['YOLOv8', 'GPT-4o Vision', 'pgvector', 'PostgreSQL 16', 'text-embedding-3-small', 'Mobile SAM'],
    },
    {
      label: 'Six-Node LangGraph Pipeline',
      subtitle: 'Safety-Critical Multi-Agent Diagnostic DAG',
      metric: { value: '6.8s', label: '300× Faster Than Manual' },
      description: 'A six-node LangGraph Directed Acyclic Graph (DAG) decomposing fault diagnostics into specialised, auditable roles: Sensor Analyst, AI Validation Engineer, Diagnostic Classifier, Knowledge Retriever, Execution Strategist, and Safety Critic. End-to-end fault-to-procedure latency of 6.8 seconds — a 300× reduction over the manual 35-minute baseline across four LLM invocations.',
      focuses: [
        'Safety Critic enforces LOTO/PPE compliance with bounded two-retry refinement and deterministic fail-safe',
        'Shared immutable pipeline state enables complete audit traceability across all six nodes',
        '6.8s total latency across Sensor Analyst (0.8s), Validation (1.5s), RAG (1.2s), Strategist (2.0s)',
        'Four-stage neuro-symbolic validation: physics constraints, temporal patterns, hybrid confidence, GPT-4o classification',
      ],
      tech: ['LangGraph', 'GPT-4o', 'Python', 'FastAPI', 'Multi-Agent Systems', 'LangChain'],
    },
    {
      label: 'Physics-Aware Hybrid Confidence Layer',
      subtitle: 'Dual-Architecture Autoencoder Anomaly Detection',
      metric: { value: '90.15%', label: 'Detection Precision @ 3.35% FPR' },
      description: 'Dual-architecture autoencoder models — a Dense Autoencoder (5→32→16→32→5) for point anomalies and an LSTM Autoencoder (64-unit, 10×5 windows) for temporal drift — fused with manufacturer-specified physics constraints. The hybrid confidence score C_hybrid integrates ML reconstruction error, physics violation severity, temporal trend reinforcement, and EMI spike suppression. Achieves 90.15% precision at 3.35% FPR vs. 12–15% FPR for rule-based SCADA baselines.',
      focuses: [
        '183× MSE separation ratio (µ_normal = 0.0685 vs µ_fault = 12.57) with near-zero class overlap',
        'C_hybrid formula suppresses SENSOR_GLITCH readings, eliminating redundant LLM inference',
        'Cross-machine F1 > 0.71 across Tea Pourer, Lathe, Centrifugal Pump, and Industrial Turbine',
        'Consecutive-count gate (3 readings) suppresses transient noise before agentic pipeline escalation',
      ],
      tech: ['TensorFlow', 'Keras', 'Scikit-learn', 'Python', 'NumPy', 'pgvector'],
    },
    {
      label: 'Institutional Intelligence Subsystem',
      subtitle: 'Five-Gate Quality Pipeline for Organizational Memory',
      metric: { value: '100%', label: 'Top-2 Retrieval Accuracy' },
      description: 'Resolved incidents traverse a five-gate quality pipeline — Safety Critic approval, per-step AI verification, operator resolution confirmation, GPT-4o summarization, and vectorization into pgvector interaction memory — before archival. Enables Human-in-the-Loop continuous learning without model retraining. Validated via impeller clearance experiment: operator-corrected 0.5mm specification autonomously surfaced on fault recurrence. 6/6 top-2 retrieval accuracy across all asset types.',
      focuses: [
        'Five-gate pipeline: Safety Critic → AI Verification → Operator Confirmation → GPT-4o Summary → pgvector Archival',
        'Bidirectional learning: AI guidance informs operators; operator field expertise augments future retrieval',
        'Impeller clearance experiment validated autonomous recall of operator-validated specifications on recurrence',
        '100% top-2 retrieval accuracy across 6 operator-resolved incidents spanning 4 asset types',
      ],
      tech: ['GPT-4o', 'pgvector', 'LangGraph', 'Python', 'PostgreSQL 16', 'HITL'],
    },
  ],
}

const fyp = {
  title: 'Designing Disaster Early Warning Systems for Users with Cognitive Impairments',
  badge: 'SENG 43216 · Final Year Research Project',
  venue: 'University of Kelaniya · Faculty of Science',
  period: 'Mar 2026 – Present',
  statusLabel: 'In Progress',
  contributions: [
    {
      label: 'Requirements Elicitation',
      subtitle: 'Systematic Review & Participatory Co-Design',
      metric: { value: '10', label: 'Evidence-Based Guidelines' },
      description: 'Conducted systematic extraction of cognitive accessibility design guidelines from IEEE Xplore, ACM Digital Library, Scopus, and WCAG 2.2 — each coded by impairment type and design principle. Participatory workshops with users living with dementia, autism, MCI, and ADHD combine structured interviews, A/B low-fidelity mockup comparisons, and guided observation. Expert interviews with accessibility specialists and disaster management professionals validate and prioritize findings. Responds directly to the research gap identified by Madugalla et al. (2025) on disaster EWS for cognitively impaired populations.',
      focuses: [
        'Identified four failure categories: Navigation, Cognitive Load, Memory/Orientation, and Language Failures in mobile EWS',
        'Mapped 10 evidence-based guidelines to EWS features — explicit labels, multimodal alerts, linear navigation, large controls',
        'Addresses the 4× higher disaster mortality rate among disabled populations through inclusive, human-centered EWS design',
      ],
      tech: ['Systematic Literature Review', 'WCAG 2.2', 'IEEE Xplore', 'Participatory Research', 'A/B Testing'],
    },
    {
      label: 'Requirements Specification',
      subtitle: 'MoSCoW-Prioritized Catalogue & Evidence-Based Personas',
      metric: { value: '5', label: 'Design Dimensions' },
      description: 'Translating elicited guidelines into functional and non-functional requirements across five dimensions: cognitive load reduction, error tolerance, multimodal feedback, simplified navigation, and stress-responsive design. MoSCoW prioritization with measurable acceptance criteria — minimum 16pt font, 44×44px touch targets, maximum 3 navigation levels. Developing 4–6 evidence-based personas covering dementia, autism, MCI, ADHD, and schizophrenia for downstream prototype validation.',
      focuses: [
        'Five-dimensional requirements framework covering all cognitive impairment profiles from dementia to schizophrenia',
        'Measurable acceptance criteria ensuring all requirements are actionable and testable, not aspirational',
        'Evidence-based personas designed for persona-led cognitive walkthroughs during validation phase',
      ],
      tech: ['MoSCoW Prioritization', 'Requirements Engineering', 'UX Research', 'Persona Design', 'Human-Centered Design'],
    },
    {
      label: 'Prototype Development',
      subtitle: 'Figma Hi-Fi Prototype & Functional Mobile MVP',
      metric: { value: '2', label: 'Parallel Dev Streams' },
      description: 'Developing a high-fidelity Figma prototype and a functional mobile MVP in parallel — both implementing simplified linear navigation, multimodal alerts (visual, audio, haptic), error-tolerant interactions, and offline functionality. Iterative impairment-specific refinement: base accessibility version first, then progressively adding and validating adaptive features for each cognitive impairment profile one at a time.',
      focuses: [
        'Simplified linear navigation and large spaced controls (44×44px min) to reduce cognitive load in emergency conditions',
        'Multimodal alert system: flashing screen + audible siren + haptic feedback + bold high-contrast large text',
        'Offline-first architecture ensuring system usability when network connectivity fails during actual disasters',
      ],
      tech: ['Figma', 'React Native', 'Mobile Development', 'Accessibility Standards', 'Iterative Design'],
    },
    {
      label: 'Validation & Synthesis',
      subtitle: 'Empirical Usability Testing & Design Guidelines Framework',
      metric: { value: 'N=20', label: 'Usability Testing' },
      description: 'Planned empirical evaluation with 15–20 participants across three core EWS scenarios: locating an evacuation route, acknowledging an alert, and contacting emergency services. System Usability Scale (SUS) quantification alongside expert persona-led cognitive walkthroughs simulating emergency stress conditions ethically without live stress induction. Final synthesis produces a generalizable design guidelines framework and academic paper for safety-critical systems.',
      focuses: [
        'Task success and error rate measurement across evacuation, alert acknowledgment, and emergency contact scenarios',
        'Persona-led cognitive walkthroughs as ethical alternative to live stress induction in participants',
        'Generalizable design guidelines framework extending beyond low-stakes contexts to high-stress emergency conditions',
      ],
      tech: ['SUS Assessment', 'Usability Testing', 'Cognitive Walkthroughs', 'Mixed Methods', 'Thematic Analysis'],
    },
  ],
}

const ipurse = {
  title: 'A Multi-Agent AI Framework for Real-Time Flood Disaster Response Using Satellite Imagery and Geospatial Analysis',
  badge: 'iPURSE 2026 · Abstract ID: 569',
  venue: 'Peradeniya University International Research Symposium',
  period: 'Apr 2026 - Present',
  statusLabel: 'Under Revision',
  contributions: [
    {
      label: 'Multi-Agent Response Architecture',
      subtitle: 'CrewAI Orchestration with Llama 3.2 Backbone',
      metric: { value: '<60s', label: 'End-to-End Flood Report' },
      description: 'An autonomous multi-agent AI platform delivering comprehensive end-to-end flood emergency response through a single user interaction — accessible to non-GIS-expert first responders. Four specialized agents orchestrated via the CrewAI framework with a Llama 3.2 reasoning backbone collectively perform 14 integrated response functions, transforming hours of fragmented expert GIS workflows into a unified, minutes-long autonomous operation.',
      focuses: [
        'Four specialized agents — Hazard Detection, Infrastructure Analysis, Evacuation Routing, Community Coordination',
        'Complete flood situational reports generated in under 60 seconds end-to-end',
        'Designed for non-GIS-expert first responders with single-interaction access to full situational awareness',
      ],
      tech: ['CrewAI', 'Llama 3.2', 'Multi-Agent Systems', 'FastAPI', 'Streamlit', 'Python'],
    },
    {
      label: 'Vision-Language Damage Classification',
      subtitle: 'LoRA Fine-Tuned Qwen2-VL-7B on AMD MI300X GPU',
      metric: { value: '<5s', label: 'Damage GeoJSON per Image' },
      description: 'A Qwen2-VL-7B vision–language model fine-tuned via Low-Rank Adaptation (LoRA) on an AMD Instinct MI300X GPU performs satellite image damage classification and generates damage-zone GeoJSON polygons. Returns structured geospatial damage assessments in under five seconds per image, enabling rapid multi-image batch processing across disaster-affected zones.',
      focuses: [
        'Low-Rank Adaptation (LoRA) fine-tuning on satellite flood imagery for domain-specific damage classification',
        'Outputs damage-zone GeoJSON polygons for direct integration with geospatial routing pipeline',
        'Sub-5-second inference enabling real-time multi-image triage across flood-impacted regions',
      ],
      tech: ['Qwen2-VL-7B', 'LoRA Fine-Tuning', 'AMD MI300X', 'GeoJSON', 'Computer Vision', 'PyTorch'],
    },
    {
      label: 'Geospatial Flood & Evacuation Engine',
      subtitle: 'Live Precipitation → Road Intersection → Optimal Routing',
      metric: { value: '14', label: 'Integrated Response Functions' },
      description: 'A live-data agent retrieves hourly precipitation from the Open-Meteo API to generate dynamic flood polygons, which are spatially intersected with OpenStreetMap road networks via GeoPandas to identify blocked road segments. A routing agent then computes optimal hazard-avoidant evacuation paths using NetworkX shortest-path algorithms. Supplementary modules add 7-day predictive flood forecasting and emergency shelter/supply-point localization via Overpass API.',
      focuses: [
        'Open-Meteo hourly precipitation → flood polygon generation with dynamic spatial extent',
        'GeoPandas spatial intersection against OpenStreetMap road networks for real-time blocked segment detection',
        'NetworkX hazard-avoidant shortest-path routing around dynamically computed flood zones',
      ],
      tech: ['GeoPandas', 'NetworkX', 'Open-Meteo API', 'OpenStreetMap', 'Overpass API', 'Folium'],
    },
    {
      label: 'Community & Offline Resilience Modules',
      subtitle: 'Crowd-Sourced Reporting & Connectivity-Degraded Mapping',
      metric: { value: 'Offline', label: 'Resilient Cached Maps' },
      description: 'Beyond core analytics, supplementary modules provide crowd-sourced geotagged incident reporting, missing-person tracking, and emergency SOS dispatching for community coordination. An offline-resilient mapping capability caches road graphs and exports self-contained HTML maps for connectivity-degraded environments — ensuring critical evacuation intelligence remains accessible when network infrastructure fails during disasters.',
      focuses: [
        'Crowd-sourced geotagged incident reporting and missing-person tracking for community situational awareness',
        'Emergency SOS dispatching integrated directly into the multi-agent response pipeline',
        'Offline-resilient cached road graphs + self-contained HTML map exports for zero-connectivity disaster zones',
      ],
      tech: ['Folium', 'Overpass API', 'Streamlit', 'HTML Export', 'FastAPI', 'Python'],
    },
  ],
}

const projects = [
  {
    num: '01',
    title: 'Industrial Copilot',
    subtitle: 'Generative AI Multi-Agent System · 2026',
    tags: ['FastAPI', 'Next.js 14', 'TypeScript', 'LangGraph', 'PostgreSQL', 'pgvector', 'TensorFlow', 'Keras', 'InfluxDB', 'GPT-4o'],
    description: 'An enterprise-grade agentic Generative AI framework for industrial predictive maintenance. Converts raw sensor streams and manuals into safety-critical diagnostic and repair procedures.',
    features: [
      'LangGraph Orchestration: 6-agent workflow for safety-critical diagnostics.',
      '4-Stage AI Validation: Integrates physics constraints, temporal trends, and GPT-4o checks.',
      'Autoencoder ML Engine: Dense/LSTM models trained per machine for anomaly detection.'
    ],
    image: '/projects/p1.png',
    live: 'https://genaicopilot.zynaptrix.com/',
    warning: 'The live demo may be temporarily unavailable if the OpenAI API key budget is exhausted.'
  },
  {
    num: '02',
    title: 'GeoRescue',
    subtitle: 'Multi-Agent GIS Disaster Response · 2026',
    tags: ['CrewAI', 'Ollama', 'Qwen2-VL', 'Python', 'Streamlit', 'GeoPandas', 'OSMnx', 'NetworkX', 'AMD MI300X', 'ROCm'],
    description: 'An AI-powered real-time disaster response platform built for the AMD Developer Hackathon. Utilizes fine-tuned satellite vision and multi-agent reasoning to automate flood intelligence and rescue routing.',
    features: [
      'Satellite Vision Analyst: Fine-tuned Qwen2-VL-7B using LoRA on AMD Instinct MI300X to detect flood zones in seconds.',
      'Live GIS Routing Engine: Spatially intersects Open-Meteo precipitation with OSMnx graph networks to compute safe evacuation routes.',
      'Multi-Agent CrewAI Flow: Orchestrates 4 agents (Ollama Llama 3.2 backbone) to compile real-time incident reports.'
    ],
    image: '/projects/p2.png',
    github: 'https://github.com/imanshadilshan/geo-rescue-omni-GIS-agent',
    warning: 'Active Development: This project is currently in progress. Local hardware dependencies (Ollama and ROCm) are required for full offline execution.'
  },
  {
    num: '03',
    title: 'Customer Churn Prediction',
    subtitle: 'Deep Learning Classification · 2025',
    tags: ['TensorFlow', 'Keras', 'Streamlit', 'Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    description: 'An AI-powered web application that predicts bank customer churn probability using Deep Learning (Artificial Neural Networks), deployed with a modern Streamlit interface.',
    features: [
      'ANN Classification: Trained deep neural network predicting churn probability based on customer profiles.',
      'Streamlit Dashboard: Color-coded risk indicators and real-time predictions via custom Streamlit interfaces.',
      'Data Preprocessing: Pre-fitted Scikit-learn scalers and encoders processing demographics and behavior.'
    ],
    image: '/projects/p3.png',
    github: 'https://github.com/imanshadilshan/Churn_Modelling-ANN_Classification',
    live: 'https://churnmodelling-annclassification.streamlit.app/'
  },
  {
    num: '04',
    title: 'ExamBuddy',
    subtitle: 'Online Examination Platform · 2026',
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Celery', 'Cloudinary', 'PayHere'],
    description: 'A comprehensive full-stack educational platform for managing online exams, courses, and student assessments.',
    features: [
      'Exam Engine: Timed exams, multiple choice questions, and automatic grading.',
      'Admin Dashboard: Unified interface for managing students, courses, exams, and payment analytics.',
      'Serverless Stack: Neon PostgreSQL for database storage and Upstash serverless Redis caching.'
    ],
    image: '/projects/p4.png',
    live: 'https://www.exambudy.com/',
    warning: 'Real-World Project: Access to the source code is restricted due to proprietary client confidentiality. Live web app is active.'
  },
  {
    num: '05',
    title: 'Shopping Squad',
    subtitle: 'MERN eCommerce Platform · 2025',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'JWT', 'Cloudinary', 'PayPal', 'Docker'],
    description: 'A full-stack MERN eCommerce application featuring dynamic product management and secure online payments.',
    features: [
      'MERN Core: Full-stack architecture with product search, filtering, and order tracking.',
      'Secure Integrations: Admin dashboard, JWT-based authentication, and Cloudinary image hosting.',
      'Payment & Containerization: Integrated PayPal payment gateway and fully containerized via Docker.'
    ],
    image: '/projects/p5.png',
    github: 'https://github.com/imanshadilshan/Shopping-Squad-MERN'
  },
  {
    num: '06',
    title: 'Microfinance ERP',
    subtitle: 'Enterprise Loan Management ERP · 2026',
    tags: ['FastAPI', 'Next.js 15', 'React Native', 'PostgreSQL', 'Redux', 'Bluetooth POS'],
    description: 'A real-world enterprise resource planning (ERP) system designed for microfinance institutions to manage loans, schedules, and field collections.',
    features: [
      'Loan Scheduler: Computes non-EMI daily collection schedules excluding holidays and weekends.',
      'Field Collector App: React Native mobile client integrated with Bluetooth ESC/POS receipt printers.',
      'Compliance Penalty Engine: Custom non-compounding penalty calculation applied exclusively to missed days.'
    ],
    image: '/projects/p6.png',
    warning: 'Real-World Project: Access is restricted. The source code and live endpoints are closed under proprietary customer confidentiality.'
  },
  {
    num: '07',
    title: 'INARI Clothing',
    subtitle: 'eCommerce Brand Platform · 2026',
    tags: ['Next.js 16', 'FastAPI', 'SQLModel', 'Tailwind CSS', 'Redux Toolkit', 'JWT'],
    description: 'A premium, minimalist eCommerce official website for the INARI Clothing brand, designed with custom storefront layouts and admin product catalogs.',
    features: [
      'Brand Storefront: Minimalist Next.js UI using Tailwind CSS and Framer Motion for responsive product browsing.',
      'FastAPI Backend: Lightweight API layer using SQLModel and SQLite with secure JWT login handling.',
      'Client Workflows: Integrated shopping cart, product search, checkout workflows, and user order tracking.'
    ],
    image: '/projects/p7.png',
    warning: 'Real-World Project: Access is restricted. The source code and live endpoints are closed under proprietary customer confidentiality.'
  },
  {
    num: '08',
    title: 'House of Cambridge',
    subtitle: 'eCommerce Lifestyle Retailer · 2026',
    tags: ['React 19', 'Express 5', 'MongoDB', 'Vite', 'Redux Toolkit', 'Tailwind CSS v4', 'Cloudinary', 'JWT'],
    description: 'A premium MERN stack eCommerce platform for a lifestyle and fashion retailer. Implements dynamic cart management, coupons, loyalty points, and super admin operations.',
    features: [
      'Storefront UI: Vite SPA built with React 19, Tailwind CSS v4, and Framer Motion matching a 37-screen design.',
      'Loyalty & Checkout Systems: Custom guest checkout workflows, fix/percentage coupon codes, and dynamic loyalty points calculations.',
      'Super Admin Workflows: Full product CRUD with Cloudinary uploads, order/category analytics, returns, and notification broadcasting.'
    ],
    image: '/projects/p8.png',
    warning: 'Real-World Project: Access is restricted. The source code and live endpoints are closed under proprietary customer confidentiality.'
  },
  {
    num: '09',
    title: 'Prasanna Printers & Communication POS',
    subtitle: 'Retail Point-of-Sale System · 2026',
    tags: ['React 19', 'Express 5', 'MongoDB', 'Vite', 'Redux Toolkit', 'Tailwind CSS v4', 'react-to-print'],
    description: 'A real-world point-of-sale (POS) and inventory management system designed for a retail printing and communication business to manage sales, invoices, and suppliers.',
    features: [
      'Billing & Receipt Printing: Dynamic cart billing, invoice generation, and thermal POS receipt printing using react-to-print.',
      'Inventory & Supplier Trackers: Comprehensive tracking of stock items, classifications, and supplier supply logs.',
      'Role-based POS Terminal: Cashier interfaces, checkout calculations, transaction counters, and admin audit reporting.'
    ],
    image: '/projects/p9.png',
    warning: 'Real-World Project: Access is restricted. The source code and live endpoints are closed under proprietary customer confidentiality.'
  },
  {
    num: '10',
    title: 'FuelQ',
    subtitle: 'Software Architecture Group Project · 2025',
    tags: ['Spring Boot', 'React', 'React Native', 'JWT', 'Twilio', 'Mailgun'],
    description: 'A comprehensive fuel quota management system designed to handle distribution logistics during energy crises.',
    features: [
      'Multi-Role Portals: Dedicated dashboards for vehicle owners, fuel station operators, and system administrators.',
      'QR Allocation Scanner: Fast verification system utilizing QR code scans for secure fuel quota allocation.',
      'Mobile Companion: React Native mobile client for on-the-go account management and active quota checkout.'
    ],
    image: '/projects/p10.png',
    github: 'https://github.com/software-architecture-project-kln/fuel-project'
  }
]

const educationList = [
  {
    logo: '/education/UOK_Logo-01.png',
    period: 'Jul 2023 – Present',
    institution: 'University of Kelaniya',
    degree: 'B.Sc. (Hons.) in Software Engineering',
    location: 'Kelaniya, Sri Lanka',
    gpa: '3.92 / 4.00',
    deansListBadge: '2× Dean\'s List',
    isCurrent: true,
    highlights: [
      "Awarded Dean's List recognition for academic excellence in Year 2 (GPA: 3.94)",
      "Awarded Dean's List recognition for academic excellence in Year 1 (GPA: 3.84)",
      "Specialization: Data Science & Engineering & Health Informatics",
    ]
  },
  {
    logo: '/education/BMMV-Logo-1.png',
    period: '2019 – 2022',
    institution: 'Bandarawela Central College',
    degree: 'GCE Advanced Level',
    location: 'Bandarawela, Sri Lanka',
    isCurrent: false,
    highlights: [
      "Bandarawela Central College, Bandarawela - Physical Science Stream",
      "Z - Score: 1.6086"
    ]
  }
]

const certifications = [
  { name: 'Introduction to Generative AI', issuer: 'Google',      category: 'AI & Data' },
  { name: 'Introduction to Cloud 101',     issuer: 'AWS Educate',  category: 'Cloud' },
  { name: 'React Basics',                  issuer: 'Meta',         category: 'Frontend' },
  { name: 'Programming with JavaScript',   issuer: 'Meta',         category: 'Programming' },
  { name: 'HTML and CSS in Depth',         issuer: 'Meta',         category: 'Frontend' },
  { name: 'Version Control',               issuer: 'Meta',         category: 'DevOps' },
]

const leadership = [
  { role: 'President',        org: "Software Engineering Students' Association", inst: 'University of Kelaniya', period: 'Jun 2025 – Jun 2026' },
  { role: 'Head of Design',   org: 'IEEE Student Branch Affinity Group',         inst: 'University of Kelaniya', period: 'Aug 2024 – Aug 2025' },
  { role: 'PR Lead, IT Unit', org: 'Leo Club',                                   inst: 'University of Kelaniya', period: 'Aug 2024 – May 2025' },
]

const articles = [
  {
    isFeatured: true,
    title: "The Echo Chamber in Your Prompt: Why AI Struggles with True Originality",
    excerpt: "Why does AI stubbornly cling to your comfort zone even when explicitly asked for a surprise? Exploring the hidden tug-of-war between originality, long-term memory profiles, and the machine learning 'helpfulness' trap.",
    date: "May 12, 2026",
    readTime: "3 min read",
    tags: ["Generative AI", "AI Memory", "Prompt Engineering"],
    image: "/articles/01.webp",
    link: "https://medium.com/@imansha.idr/the-echo-chamber-in-your-prompt-why-ai-struggles-with-true-originality-aa167d097c76"
  },
  {
    title: "Why Does AI Still \"Lie\" Even When It Searches the Web?",
    excerpt: "Exploring the mechanics of AI grounding, search queries, and the four key reasons why language models still hallucinate fake links and details despite live web access.",
    date: "Mar 11, 2026",
    readTime: "3 min read",
    tags: ["AI Grounding", "Hallucinations", "Search Reasoning"],
    link: "https://medium.com/@imansha.idr/why-does-ai-still-lie-even-when-it-searches-the-web-c51c0102bbcc"
  },
  {
    title: "The AI Memory Gap: Why LLMs Forget the Middle of Your Story",
    excerpt: "Why do language models struggle with long contexts? Exploring the 'Lost in the Middle' phenomenon, attention taxes, and optimization strategies like re-ranking and position engineering.",
    date: "Jan 30, 2026",
    readTime: "3 min read",
    tags: ["AI Memory", "LLM Context", "Lost in the Middle"],
    link: "https://medium.com/@imansha.idr/the-ai-memory-gap-why-llms-forget-the-middle-of-your-story-edefa75b2a01"
  },
  {
    title: "Human Brain vs Artificial Neural Networks",
    excerpt: "How does a computer program learn? Translating biological neurons, dendrites, and synaptic strength into mathematical inputs, weights, sum functions, and activation gates.",
    date: "Dec 15, 2025",
    readTime: "3 min read",
    tags: ["Neural Networks", "AI vs Brain", "Deep Learning"],
    link: "https://medium.com/@imansha.idr/human-brain-vs-artificial-neural-networks-61b3a6577786"
  }
]

const NAV_LINKS = ['education', 'skills', 'experience', 'research', 'projects', 'writing', 'contact']

/* ─── Page ─── */

export default function Home() {
  const { hero, about, contact } = getContent()

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">

      {/* Subtle grid */}
      <div
        className="fixed inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* ─── NAV ─── */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#141414]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
          <a href="#" className="text-[15px] font-black tracking-tight text-white">ID.</a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] font-mono text-[#555] uppercase tracking-widest">
            {NAV_LINKS.map((s) => (
              <a key={s} href={`#${s}`} className="hover:text-white transition-colors">
                {s}
              </a>
            ))}
          </nav>

          <a
            href="/CV/Imansha_Dilshan_AI_Engineer_CV.pdf"
            download="Imansha_Dilshan_AI_Engineer_CV.pdf"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 border border-[#222] bg-[#0c0c0c] hover:bg-white hover:text-black hover:border-white text-[10px] font-mono font-bold tracking-wider text-white uppercase rounded-lg transition-all cursor-pointer shadow-md"
          >
            <DownloadIcon /> Download Resume
          </a>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-black"
        style={{ minHeight: '100vh', paddingTop: '3.5rem' }}
      >
        {/* Photo — absolutely positioned right half, no grid line */}
        <div
          className="hidden lg:block absolute right-0 bottom-0 z-0"
          style={{ width: '44%', top: '3.5rem' }}
        >
          {/* Ghost year behind photo */}
          <span
            className="absolute top-8 right-4 font-black text-[#0f0f0f] select-none pointer-events-none leading-none tracking-tighter z-20"
            style={{ fontSize: 'clamp(5rem, 8vw, 8.5rem)' }}
          >
            2026
          </span>
          <img
            src="/hero.jpeg"
            alt="Imansha Dilshan"
            className="absolute inset-0 w-full h-full object-cover object-top z-10"
          />
        </div>

        {/* Left text — full width on mobile, 56% on lg+ */}
        <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-3.5rem)] px-6 sm:px-10 lg:px-16 py-10 w-full lg:w-[56%]">
          <div className="w-full animate-fade-up">

            {/* Portfolio label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-[2px] bg-white flex-shrink-0" />
              <p className="text-[11px] font-mono text-[#555] tracking-[0.25em] uppercase">Portfolio — 2026</p>
            </div>

            {/* Rule above name */}
            <div className="h-px bg-[#1e1e1e] mb-4" />

            {/* Name */}
            <h1
              className="font-black tracking-[-0.04em] leading-[0.85] uppercase text-white mb-4"
              style={{ fontSize: 'clamp(3.5rem, 7.5vw, 8.5rem)' }}
            >
              {hero.name.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>

            {/* Rule below name */}
            <div className="h-px bg-[#1e1e1e] mb-5" />

            {/* Subtitle + tagline */}
            <p
              className="font-medium text-[#ccc] mb-2"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}
            >
              {hero.title}
            </p>
            <p className="text-[#555] text-[13px] sm:text-[14px] leading-relaxed mb-1">{hero.tagline}</p>
            <p className="text-[#2a2a2a] text-[12px] font-mono">BSc Software Engineering · University of Kelaniya</p>

            {/* Stats */}
            <div className="flex items-end gap-8 sm:gap-12 mt-6 mb-6">
              <HeroStat value="3.92" label="GPA" />
              <HeroStat value="2×" label="Dean's List" />
              <HeroStat value="10+" label="Projects" />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-5">
              <a href="#projects" className="px-6 py-2.5 bg-white text-black text-[13px] font-semibold hover:bg-[#e8e8e8] transition-colors">
                View My Work
              </a>
              <a href="#contact" className="px-6 py-2.5 border border-[#2a2a2a] text-[#bbb] text-[13px] font-semibold hover:border-[#444] hover:text-white transition-all">
                Get In Touch
              </a>
              <a
                href="/CV/Imansha_Dilshan_AI_Engineer_CV.pdf"
                download="Imansha_Dilshan_AI_Engineer_CV.pdf"
                className="flex items-center gap-2 px-5 py-2.5 border border-[#2a2a2a] text-[#bbb] text-[13px] font-semibold hover:border-[#444] hover:text-white transition-all cursor-pointer"
              >
                <DownloadIcon /> Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <SocialLink href={contact.github}             label="GitHub">  <GitHubIcon />  </SocialLink>
              <SocialLink href={contact.linkedin}           label="LinkedIn"><LinkedInIcon /></SocialLink>
              <SocialLink href={contact.medium}             label="Medium">  <MediumIcon />  </SocialLink>
              <SocialLink href={`mailto:${contact.email}`} label="Email">   <MailIcon />    </SocialLink>
              <div className="w-px h-4 bg-[#1a1a1a]" />
              <span className="text-[#2a2a2a] text-[11px] font-mono hidden sm:block">{contact.location}</span>
            </div>

          </div>
        </div>

        {/* Mobile photo (below text on small screens) */}
        <div className="lg:hidden w-full h-64 relative overflow-hidden">
          <img
            src="/hero.jpeg"
            alt="Imansha Dilshan"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section id="education" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 border-t border-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-[2px] bg-[#333] flex-shrink-0" />
              <p className="text-[10px] font-mono text-[#333] uppercase tracking-[0.25em]">Academic Background</p>
            </div>
            <h2 className="text-[2rem] sm:text-[2.8rem] font-black tracking-[-0.02em] text-white uppercase">Education</h2>
          </div>

          {/* Timeline - Full Width */}
          <div className="relative border-l border-[#141414] ml-4 sm:ml-6 pl-8 sm:pl-10 space-y-6 mb-12">
            {educationList.map((edu, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline circle node */}
                <div className="absolute left-[-32px] sm:left-[-40px] top-6 -translate-x-1/2 z-10">
                  <InstitutionLogo src={edu.logo} name={edu.institution} isCurrent={edu.isCurrent} />
                </div>

                {/* Card */}
                <div className={`relative border border-[#141414] rounded-2xl overflow-hidden bg-[#050505]/60 backdrop-blur-sm p-5 transition-all duration-300 hover:border-[#222] hover:bg-[#080808] ${
                  edu.isCurrent
                    ? 'border-l-[3px] border-l-white'
                    : 'border-l-[3px] border-l-[#222] hover:border-l-white/60'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-[10px] font-mono text-[#aaa] tracking-wider font-semibold">{edu.period}</span>
                          {edu.gpa && (
                            <span className="px-1.5 py-0.5 text-[9px] font-bold font-mono rounded-full bg-[#111] border border-[#222] text-[#ccc]">
                              GPA {edu.gpa}
                            </span>
                          )}
                          {edu.deansListBadge && (
                            <span className="px-1.5 py-0.5 text-[9px] font-semibold font-mono rounded-full border border-white/20 bg-white/5 text-white flex items-center gap-0.5">
                              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                              {edu.deansListBadge}
                            </span>
                          )}
                        </div>
                        <h3 className="text-[13px] font-bold text-white mt-0.5">{edu.institution}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-[#888] sm:ml-auto">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {edu.location}
                    </div>
                  </div>

                  <div className="h-px bg-[#111] my-3.5" />

                  <div>
                    <h4 className="text-[14.5px] font-bold text-white tracking-tight leading-snug">{edu.degree}</h4>
                    <ul className="space-y-2 mt-3.5">
                      {edu.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-2.5 text-[12.5px] text-[#aaa] leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-[#888] mt-2 flex-shrink-0 group-hover:bg-white transition-colors duration-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership & Activities and Certifications Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            
            {/* Leadership & Activities */}
            <div className="md:col-span-1 border border-[#1a1a1a] rounded-2xl overflow-hidden bg-[#050505]/40 flex flex-col h-full">
              <div className="px-6 py-4 border-b border-[#111] bg-[#050505]">
                <p className="text-[10px] font-mono text-[#aaa] uppercase tracking-widest">Leadership & Activities</p>
              </div>
              <div className="divide-y divide-[#080808] bg-[#030303] flex-1">
                {leadership.map((l) => (
                  <div key={l.role} className="px-6 py-4 hover:bg-[#050505] transition-colors">
                    <p className="text-[13px] font-semibold text-white">{l.role}</p>
                    <p className="text-[12px] text-[#ccc] mt-0.5">{l.org} — {l.inst}</p>
                    <p className="text-[10px] font-mono text-[#888] mt-1">{l.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="md:col-span-2 border border-[#1a1a1a] rounded-2xl overflow-hidden bg-[#050505]/40 flex flex-col h-full">
              <div className="px-6 py-4 border-b border-[#111] bg-[#050505] flex items-center justify-between">
                <p className="text-[10px] font-mono text-[#aaa] uppercase tracking-widest">Verified Credentials</p>
                <span className="text-[10px] font-mono text-[#888]">— {certifications.length} Certificates</span>
              </div>
              <div className="p-6 bg-[#030303] flex-1">
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-start gap-3 px-4 py-3.5 border border-[#111] rounded-xl bg-[#040404] hover:border-[#1a1a1a] hover:bg-[#060606] transition-colors"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] flex items-center justify-center mt-0.5">
                        <span className="text-[8px] font-black text-[#aaa]">{cert.category.slice(0, 2).toUpperCase()}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[12px] text-[#eee] font-medium leading-snug truncate">{cert.name}</p>
                        <p className="text-[10px] font-mono text-[#888] mt-0.5">{cert.issuer} · {cert.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 border-t border-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <SkillsSlider />
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 border-t border-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-[2px] bg-[#333] flex-shrink-0" />
              <p className="text-[10px] font-mono text-[#333] uppercase tracking-[0.25em]">Work History</p>
            </div>
            <h2 className="text-[2rem] sm:text-[2.8rem] font-black tracking-[-0.02em] text-white uppercase">Experience</h2>
          </div>
          <ExperiencePanel
            logo={experience.logo}
            company={experience.company}
            role={experience.role}
            team={experience.team}
            location={experience.location}
            period={experience.period}
            milestones={experience.milestones}
            defaultOpen
          />
        </div>
      </section>

      {/* ─── RESEARCH ─── */}
      <section id="research" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 border-t border-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-[2px] bg-[#333] flex-shrink-0" />
              <p className="text-[10px] font-mono text-[#333] uppercase tracking-[0.25em]">Research & Publications</p>
            </div>
            <h2 className="text-[2rem] sm:text-[2.8rem] font-black tracking-[-0.02em] text-white uppercase">Research</h2>
          </div>
          <ResearchPanel
            title={research.title}
            badge={research.badge}
            venue={research.venue}
            period={research.period}
            contributions={research.contributions}
            defaultOpen
          />
          <ResearchPanel
            title={ipurse.title}
            badge={ipurse.badge}
            venue={ipurse.venue}
            period={ipurse.period}
            contributions={ipurse.contributions}
            statusLabel={ipurse.statusLabel}
          />
          <ResearchPanel
            title={fyp.title}
            badge={fyp.badge}
            venue={fyp.venue}
            period={fyp.period}
            contributions={fyp.contributions}
            statusLabel={fyp.statusLabel}
          />
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 border-t border-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-[2px] bg-[#333] flex-shrink-0" />
              <p className="text-[10px] font-mono text-[#333] uppercase tracking-[0.25em]">Featured Work</p>
            </div>
            <h2 className="text-[2rem] sm:text-[2.8rem] font-black tracking-[-0.02em] text-white uppercase">Selected Projects</h2>
          </div>

          <ProjectsSlider projects={projects} />

          {/* Buttons to GitHub & Resume */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 border border-[#222] bg-[#0c0c0c] hover:bg-white hover:text-black hover:border-white text-[12px] font-bold tracking-wider rounded-xl uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <GitHubIcon />
              More Projects on GitHub
            </a>
            <a
              href="/CV/Imansha_Dilshan_AI_Engineer_CV.pdf"
              download="Imansha_Dilshan_AI_Engineer_CV.pdf"
              className="w-full sm:w-auto px-6 py-3 border border-[#222] bg-[#0c0c0c] hover:bg-white hover:text-black hover:border-white text-[12px] font-bold tracking-wider rounded-xl uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* ─── WRITING ─── */}
      <section id="writing" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 border-t border-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-[2px] bg-[#333] flex-shrink-0" />
              <p className="text-[10px] font-mono text-[#888] uppercase tracking-[0.25em]">Thoughts &amp; Articles</p>
            </div>
            <h2 className="text-[2rem] sm:text-[2.8rem] font-black tracking-[-0.02em] text-white uppercase">Writing</h2>
          </div>

          {/* Intro & Stats */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12">
            <p className="text-[#888] text-[13.5px] sm:text-[14.5px] leading-relaxed max-w-xl">
              Sharing insights on backend development, database optimization, and security fundamentals through hands-on experience.
            </p>
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              <div className="flex flex-col">
                <span className="text-[1.8rem] sm:text-[2.2rem] font-black text-white leading-none tracking-tight">10+</span>
                <span className="text-[9px] font-mono text-[#444] uppercase tracking-wider mt-1.5 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#333]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  Articles Published
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[1.8rem] sm:text-[2.2rem] font-black text-white leading-none tracking-tight">50+</span>
                <span className="text-[9px] font-mono text-[#444] uppercase tracking-wider mt-1.5 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#333]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  Total Reads
                </span>
              </div>
            </div>
          </div>

          {/* Featured Article Card */}
          <div className="mb-6 border border-[#141414] rounded-2xl overflow-hidden bg-[#050505]/60 backdrop-blur-sm transition-all duration-300 hover:border-[#222] hover:bg-[#080808]">
            <a href={articles[0].link} target="_blank" rel="noopener noreferrer" className="grid md:grid-cols-2 gap-0 group">
              <div className="relative aspect-[16/10] md:aspect-auto min-h-[280px] overflow-hidden">
                <span className="absolute top-4 left-4 bg-white text-black font-mono text-[9px] px-2.5 py-1 font-bold rounded tracking-widest uppercase z-20 shadow-md">
                  Featured
                </span>
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {articles[0].tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[8.5px] font-mono rounded border border-[#222] bg-[#0c0c0c] text-[#888] font-semibold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-[1.35rem] sm:text-[1.8rem] font-bold text-white tracking-tight leading-snug group-hover:text-gray-200 transition-colors">
                    {articles[0].title}
                  </h3>
                  <p className="text-[13px] text-[#aaa] leading-relaxed mt-3.5 font-sans">
                    {articles[0].excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between border-t border-[#111] pt-5 mt-6">
                  <div className="flex items-center gap-3 text-[10.5px] font-mono text-[#555]">
                    <span>{articles[0].date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#333]" />
                    <span>{articles[0].readTime}</span>
                  </div>
                  <div className="w-9 h-9 border border-[#222] bg-[#0c0c0c] flex items-center justify-center rounded-full group-hover:border-white group-hover:text-white transition-all text-[#888]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Grid of 3 other articles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {articles.slice(1).map((art, idx) => (
              <a
                key={idx}
                href={art.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-[#141414] rounded-2xl p-5 bg-[#050505]/40 backdrop-blur-sm transition-all duration-300 hover:border-[#222] hover:bg-[#080808] flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-[#555] mb-3">
                    <span>{art.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#333]" />
                    <span>{art.readTime}</span>
                  </div>
                  <h4 className="text-[14.5px] font-bold text-white tracking-tight leading-snug group-hover:text-gray-200 transition-colors">
                    {art.title}
                  </h4>
                  <p className="text-[12px] text-[#888] leading-relaxed mt-2.5 line-clamp-3 font-sans">
                    {art.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-[#111] pt-3.5 mt-5">
                  <div className="flex flex-wrap gap-1">
                    {art.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-1.5 py-0.5 text-[8px] font-mono rounded bg-[#111] text-[#666] uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#555] group-hover:text-white transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Button to Medium */}
          <div className="flex justify-center mt-4">
            <a
              href="https://medium.com/@imansha.idr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#222] bg-[#0c0c0c] hover:bg-white hover:text-black hover:border-white text-[12px] font-bold tracking-wider rounded-xl uppercase flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <MediumIcon />
              More Articles on Medium
            </a>
          </div>

        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 border-t border-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-[2px] bg-[#333] flex-shrink-0" />
              <p className="text-[10px] font-mono text-[#888] uppercase tracking-[0.25em]">Let&apos;s Collaborate</p>
            </div>
            <h2 className="text-[2rem] sm:text-[2.8rem] font-black tracking-[-0.02em] text-white uppercase">Get In Touch</h2>
          </div>

          <ContactForm email={contact.email} github={contact.github} linkedin={contact.linkedin} />
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#0e0e0e] bg-[#020202] pt-16 pb-12 px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Top section: Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1.2fr] gap-10 md:gap-8">
            
            {/* Branding Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-base font-black text-white tracking-widest">IMANSHA DILSHAN</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </div>
              <p className="text-[#666] text-[13px] leading-relaxed max-w-sm font-sans">
                AI Engineer &amp; Full-Stack Developer specializing in building production-grade Generative AI systems, multi-agent frameworks, and scalable high-performance applications.
              </p>
            </div>

            {/* Sitemap Column */}
            <div className="space-y-3.5">
              <h4 className="text-[9.5px] font-mono text-[#333] uppercase tracking-widest font-bold">Sitemap</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-[#555] hover:text-[#bbb] text-[12px] transition-colors font-mono">01. About</a></li>
                <li><a href="#education" className="text-[#555] hover:text-[#bbb] text-[12px] transition-colors font-mono">02. Education</a></li>
                <li><a href="#skills" className="text-[#555] hover:text-[#bbb] text-[12px] transition-colors font-mono">03. Skills</a></li>
                <li><a href="#experience" className="text-[#555] hover:text-[#bbb] text-[12px] transition-colors font-mono">04. Experience</a></li>
                <li><a href="#research" className="text-[#555] hover:text-[#bbb] text-[12px] transition-colors font-mono">05. Research</a></li>
                <li><a href="#projects" className="text-[#555] hover:text-[#bbb] text-[12px] transition-colors font-mono">06. Projects</a></li>
                <li><a href="#writing" className="text-[#555] hover:text-[#bbb] text-[12px] transition-colors font-mono">07. Writing</a></li>
              </ul>
            </div>

            {/* Channels Column */}
            <div className="space-y-3.5">
              <h4 className="text-[9.5px] font-mono text-[#333] uppercase tracking-widest font-bold">Direct Channels</h4>
              <ul className="space-y-2">
                <li>
                  <a href={`mailto:${contact.email}`} className="text-[#555] hover:text-[#bbb] text-[12.5px] transition-colors font-mono truncate block max-w-xs">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#555] hover:text-[#bbb] text-[12px] transition-colors font-sans">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-[#555] hover:text-[#bbb] text-[12px] transition-colors font-sans">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={contact.medium} target="_blank" rel="noopener noreferrer" className="text-[#555] hover:text-[#bbb] text-[12px] transition-colors font-sans">
                    Medium Publication
                  </a>
                </li>
              </ul>
            </div>

            {/* Availability/Location Column */}
            <div className="space-y-3.5">
              <h4 className="text-[9.5px] font-mono text-[#333] uppercase tracking-widest font-bold">Current Status</h4>
              <p className="text-[#666] text-[13px] leading-relaxed max-w-xs font-sans">
                Open to innovative full-time engineering roles, AI consulting, and research collaborations. Located in {contact.location}.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-mono text-white tracking-widest uppercase font-bold">Available for Work</span>
              </div>
            </div>

          </div>

          {/* Bottom section: Copyright */}
          <div className="border-t border-[#0e0e0e] pt-8 text-center">
            <p className="text-[#666] text-[11.5px] font-mono tracking-wider">
              © {new Date().getFullYear()} Imansha Dilshan. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}

/* ─── Sub-components ─── */

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-[10px] font-mono text-[#2a2a2a] mb-3 tracking-widest uppercase">{number} / 07</p>
      <h2 className="text-[2rem] sm:text-[2.8rem] font-black tracking-[-0.02em] text-white">{title}</h2>
    </div>
  )
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[2.2rem] sm:text-[2.8rem] font-black text-white leading-none tracking-tight">{value}</span>
      <span className="text-[10px] font-mono text-[#444] uppercase tracking-widest">{label}</span>
    </div>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      title={label}
      className="text-[#333] hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

/* ─── Icons ─── */

function GitHubIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MediumIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

function GraduationIcon({ className = 'text-[#444]' }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  )
}
