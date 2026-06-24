import fs from 'fs'
import path from 'path'
import type { ReactNode } from 'react'
import { ContactForm } from './components/ContactForm'
import { SkillsSlider } from './components/SkillsSlider'
import { ExperiencePanel } from './components/ExperiencePanel'
import { ResearchPanel } from './components/ResearchPanel'

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
      contact: { email: 'imansha.idr@gmail.com', phone: '+94 76 311 7229', linkedin: 'https://linkedin.com/in/imansha-dilshan', github: 'https://github.com/ima-69', medium: 'https://medium.com/@imansha.idr', location: 'Colombo, Sri Lanka' },
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
  period: 'Jun 2026',
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
    title: 'AI-Powered Customer Churn Prediction',
    subtitle: 'Deep Learning Application · Dec 2025',
    tags: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Streamlit'],
    description: 'End-to-end deep learning application using an Artificial Neural Network to predict customer churn in banking. Includes real-time inference interface and live behavioral analysis with Streamlit.',
    github: 'https://github.com/ima-69',
  },
  {
    num: '02',
    title: 'SalonSync — Microservices Booking Platform',
    subtitle: 'Full Stack Platform · Jun 2025 – Present',
    tags: ['Spring Boot', 'React', 'MySQL', 'RabbitMQ', 'Keycloak', 'Stripe', 'Docker'],
    description: 'Enterprise-grade salon booking platform built on microservices architecture. Features Keycloak/JWT auth, Stripe payment processing, and async event-driven communication via RabbitMQ.',
    github: 'https://github.com/ima-69',
  },
  {
    num: '03',
    title: 'Shopping Squad — MERN eCommerce',
    subtitle: 'Full Stack eCommerce · Feb – Jun 2025',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'PayPal', 'Docker'],
    description: 'Full-stack eCommerce platform with product search, order tracking, JWT authentication, admin dashboard, PayPal payment integration, and Cloudinary media management.',
    github: 'https://github.com/ima-69',
  },
]

const education = {
  degree: 'B.Sc. (Hons.) in Software Engineering',
  university: 'University of Kelaniya',
  period: 'Jul 2023 – Present',
  location: 'Kelaniya, Sri Lanka',
  gpa: '3.92 / 4.00',
  highlights: [
    'Specialization: Net-Centric Applications, Data Science & Engineering',
    'Final Year Research Project: Designing Disaster Early Warning Systems for Users with Cognitive Impairments',
    'Active in IEEE Student Branch and SESA leadership roles',
  ],
}

const certifications = [
  { name: 'Introduction to Generative AI', issuer: 'Google',      category: 'AI & Data' },
  { name: 'Introduction to Cloud 101',     issuer: 'AWS Educate',  category: 'Cloud' },
  { name: 'React Basics',                  issuer: 'Meta',         category: 'Frontend' },
  { name: 'Programming with JavaScript',   issuer: 'Meta',         category: 'Programming' },
  { name: 'HTML and CSS in Depth',         issuer: 'Meta',         category: 'Frontend' },
  { name: 'Version Control',               issuer: 'Meta',         category: 'DevOps' },
]

const leadership = [
  { role: 'President',        org: "Software Engineering Students' Association", inst: 'University of Kelaniya', period: 'Jun 2025 – Present' },
  { role: 'Head of Design',   org: 'IEEE Student Branch Affinity Group',         inst: 'University of Kelaniya', period: 'Aug 2024 – Present' },
  { role: 'PR Lead, IT Unit', org: 'Leo Club',                                   inst: 'University of Kelaniya', period: 'Aug 2024 – May 2025' },
]

const NAV_LINKS = ['education', 'skills', 'experience', 'research', 'projects', 'contact']

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

          <span className="hidden lg:block text-[11px] font-black tracking-[0.15em] text-[#444] uppercase select-none">
            Imansha Dilshan
          </span>
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
              <HeroStat value="5+" label="Projects" />
              <HeroStat value="6 mo" label="WSO2" />
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
                href="/Imansha_Dilshan_AI_Engineer_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-[#1a1a1a] text-[#444] text-[13px] font-semibold hover:border-[#333] hover:text-[#888] transition-all"
              >
                <DownloadIcon /> CV
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
          <SectionHeading number="02" title="Education" />

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Degree card */}
            <div className="border border-[#1a1a1a] rounded-2xl overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 border-b border-[#111] bg-[#050505]">
                <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] border border-[#1e1e1e] flex items-center justify-center flex-shrink-0">
                  <GraduationIcon />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-[#888]">{education.period}</p>
                  <p className="text-[11px] font-mono text-[#555]">{education.location}</p>
                </div>
              </div>
              <div className="px-6 py-5 bg-[#030303] space-y-3">
                <div>
                  <h3 className="text-[15px] font-semibold text-white">{education.degree}</h3>
                  <p className="text-[13px] text-[#888] mt-0.5">{education.university}</p>
                </div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-mono text-[#aaa] border border-[#222] rounded-lg bg-[#0a0a0a]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  CGPA: {education.gpa}
                </span>
                <ul className="space-y-2 pt-1">
                  {education.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2.5 text-[12px] text-[#999] leading-snug">
                      <span className="text-[#555] flex-shrink-0 mt-0.5">›</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Leadership card */}
            <div className="border border-[#1a1a1a] rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-[#111] bg-[#050505]">
                <p className="text-[10px] font-mono text-[#555] uppercase tracking-widest">Leadership & Activities</p>
              </div>
              <div className="divide-y divide-[#080808] bg-[#030303]">
                {leadership.map((l) => (
                  <div key={l.role} className="px-6 py-4 hover:bg-[#050505] transition-colors">
                    <p className="text-[13px] font-semibold text-white">{l.role}</p>
                    <p className="text-[12px] text-[#888] mt-0.5">{l.org} — {l.inst}</p>
                    <p className="text-[10px] font-mono text-[#555] mt-1">{l.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <p className="text-[10px] font-mono text-[#555] uppercase tracking-widest">Verified Credentials</p>
              <span className="text-[10px] font-mono text-[#444]">— {certifications.length} Certificates</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-start gap-3 px-4 py-3.5 border border-[#111] rounded-xl bg-[#040404] hover:border-[#1a1a1a] hover:bg-[#060606] transition-colors"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] flex items-center justify-center mt-0.5">
                    <span className="text-[8px] font-black text-[#333]">{cert.category.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12px] text-[#aaa] font-medium leading-snug truncate">{cert.name}</p>
                    <p className="text-[10px] font-mono text-[#555] mt-0.5">{cert.issuer} · {cert.category}</p>
                  </div>
                </div>
              ))}
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
          <SectionHeading number="05" title="Projects" />
          <div className="space-y-3">
            {projects.map((p) => (
              <div
                key={p.num}
                className="group border border-[#141414] rounded-2xl overflow-hidden hover:border-[#222] transition-all"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Number sidebar */}
                  <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-1 px-5 py-4 md:py-6 md:w-20 border-b md:border-b-0 md:border-r border-[#0e0e0e] bg-[#040404] group-hover:bg-[#060606] transition-colors flex-shrink-0">
                    <span className="text-[2rem] md:text-[2.5rem] font-black text-[#181818] group-hover:text-[#242424] transition-colors leading-none">{p.num}</span>
                    <span className="text-[9px] font-mono text-[#222]">/ {projects.length.toString().padStart(2, '0')}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 px-6 py-5 bg-[#030303] group-hover:bg-[#050505] transition-colors">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-[15px] font-semibold text-[#ddd] group-hover:text-white transition-colors">{p.title}</h3>
                        <p className="text-[11px] font-mono text-[#3a3a3a] mt-0.5">{p.subtitle}</p>
                      </div>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-[#2a2a2a] hover:text-[#888] transition-colors flex-shrink-0 mt-0.5">
                        <GitHubIcon />
                      </a>
                    </div>
                    <p className="text-[13px] text-[#555] leading-[1.75] mb-4 max-w-2xl">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-[10px] font-mono bg-[#080808] border border-[#141414] rounded-lg text-[#444]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 border-t border-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="06" title="Contact" />

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left */}
            <div className="space-y-6">
              <p className="text-[#777] text-[15px] leading-[1.85] max-w-md">
                Open to new opportunities, research collaborations, and interesting conversations about AI and technology. Let&apos;s build something great together.
              </p>
              <div className="space-y-2">
                {[
                  { href: `mailto:${contact.email}`,                    icon: <MailIcon />,    label: contact.email },
                  { href: `tel:${contact.phone.replace(/\s/g, '')}`,    icon: <PhoneIcon />,   label: contact.phone },
                  { href: contact.github,                               icon: <GitHubIcon />,  label: 'github.com/ima-69' },
                  { href: contact.linkedin,                             icon: <LinkedInIcon />,label: 'linkedin.com/in/imansha-dilshan' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 border border-[#111] rounded-xl bg-[#040404] hover:border-[#1e1e1e] hover:bg-[#070707] transition-all group"
                  >
                    <span className="text-[#333] group-hover:text-[#777] transition-colors flex-shrink-0">{item.icon}</span>
                    <span className="text-[#666] text-[12px] font-mono group-hover:text-[#ccc] transition-colors">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#0e0e0e] py-8 px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#222] text-[11px] font-mono">© 2026 Imansha Dilshan — Built with Next.js &amp; Tailwind</p>
          <a href="/dashboard" className="text-[#1a1a1a] hover:text-[#444] text-[11px] font-mono transition-colors">/dashboard</a>
        </div>
      </footer>

    </div>
  )
}

/* ─── Sub-components ─── */

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-[10px] font-mono text-[#2a2a2a] mb-3 tracking-widest uppercase">{number} / 06</p>
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

function GraduationIcon() {
  return (
    <svg className="w-4 h-4 text-[#444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  )
}
