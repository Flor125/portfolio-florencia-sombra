// Portfolio · Florencia Sombra — Terminal hi-fi
// Bilingual content + interactive logic

const I18N = {
  es: {
    barLeft: "TSO/E SESSION · FLOR125.PORTFOLIO",
    barCenter: "ROW 001 OF 999",
    boot: [
      { t: "Booting z/OS Mainframe Portfolio v2.0...", c: "sys" },
      { t: "OK · IPL complete", c: "ok" },
      { t: "OK · CICS region active", c: "ok" },
      { t: "OK · Db2 subsystem online", c: "ok" },
      { t: "OK · RACF security profile loaded", c: "ok" },
      { t: "INFO · Establishing TSO session for FLOR125", c: "info" },
      { t: "READY", c: "ok" },
    ],
    role: "DESARROLLADORA COBOL JUNIOR",
    sub: ["IBM Mainframe", "Batch & Online", "Python / Flask"],
    h1: "Único despliegue de la cohorte",
    h2: "en infraestructura IBM LinuxONE real",
    h3: "expuesto a tráfico real de internet.",
    location: "San Luis, Argentina · Disponible para roles remotos",
    cta: { dl: "Descargar CV", em: "Email", li: "LinkedIn", gh: "GitHub", file: "./uploads/CV_Florencia_Alicia_Sombra.pdf" },

    s1: "Sobre mí",
    s2: "Stack técnico",
    s3: "Proyecto destacado",
    s4: "Certificaciones",
    s5: "Otros proyectos",
    s6: "Educación",
    s7: "Contacto",

    aboutP1Pre: "Desarrolladora COBOL junior con experiencia práctica desplegando aplicaciones batch en ",
    aboutP1Hl: "infraestructura empresarial IBM LinuxONE real (s390x)",
    aboutP1Suf: ".",
    aboutP2Pre: "Diseñé, codifiqué y documenté un sistema híbrido de grado productivo integrando ",
    aboutP2Hl: "COBOL batch, Db2, JCL y Python Flask",
    aboutP2Suf: " — calificado con 9/10. IBM Z Xplore All Star (Concepts + Advanced + Code-a-Thon).",
    aboutP3: "Con experiencia integrando herramientas de IA (Claude, ChatGPT) en flujos de desarrollo para generación de código, documentación y análisis de sistemas legacy.",

    facts: [
      { v: "9/10", l: "calificación PPS" },
      { v: "8.43", l: "promedio carrera" },
      { v: "30+", l: "insignias IBM Z" },
      { v: "B2", l: "inglés EF SET" },
    ],

    stackGroups: [
      { p: "CORE", t: "Mainframe Core", items: ["COBOL", "JCL", "IBM Db2", "VSAM", "z/OS", "TSO/ISPF"] },
      { p: "EXT", t: "Mainframe Extendido", items: ["CICS", "RACF", "IBM MQ", "IMS", "zOSMF", "Assembler", "PL/I"] },
      { p: "TOOL", t: "Herramientas", items: ["Zowe CLI", "Zowe Desktop", "Ansible", "Docker s390x", "IBM Z OAU", "z/OS UNIX"] },
      { p: "BACK", t: "Backend & Integración", items: ["Python", "Flask", "ibm_db", "REST APIs", "Bash", "Git", "GitHub"] },
    ],

    projTitle: "Sistema de Gestión de Inventario",
    projSub: "Arquitectura Mainframe · COBOL + Db2 + JCL + Flask · LinuxONE s390x",
    projMetrics: [
      { v: "9/10", l: "calificación PPS" },
      { v: "500+", l: "líneas COBOL batch" },
      { v: "8", l: "tablas Db2 normalizadas" },
      { v: "56", l: "páginas de docs" },
    ],
    projBullets: [
      "Procesamiento batch nocturno: control de stock, alertas de vencimiento (FEFO) y actualización masiva de precios en IBM LinuxONE.",
      "Esquema Db2 normalizado (8 tablas) con transacciones ACID e integridad referencial para consistencia operativa crítica.",
      "API REST en Python Flask con RBAC (JEFE/EMPLEADO), hashing pbkdf2:sha256, protección CSRF y registro de auditoría completo.",
      "Logs de auditoría documentaron y bloquearon ataques reales: bots automatizados, intentos de inyección SQL, fuerza bruta y secuestro de sesión.",
      "Documentación completa en informe técnico de 56 páginas con diagramas UML, casos de uso y procesos. Calificado 9/10.",
    ],
    projCta: { case: "Ver case study", repo: "Repositorio" },

    certs: [
      { t: "IBM Mainframe Developer Professional Certificate", o: "IBM / Coursera · 7 módulos: COBOL, JCL, Db2, z/OS, CICS, VSAM, seguridad", y: "2024–2025" },
      { t: "IBM z/OS Mainframe Practitioner Professional Certificate", o: "IBM / Coursera · z/OS, JCL, ISPF, RACF, administración mainframe", y: "2024–2025" },
      { t: "IBM Z Xplore All Star", o: "Concepts + Advanced + All Star + Code-a-Thon · 30+ insignias técnicas", y: "Oct 2024" },
      { t: "Fundamentals for Zowe", o: "Interskill Learning · Zowe CLI, Desktop y Explorer", y: "2025" },
      { t: "EF SET English B2 — Upper Intermediate", o: "Lectura técnica, escritura y comunicación en inglés", y: "2024" },
    ],

    others: [
      { pre: "PROJECT.001", t: "Página de Olimpiadas", s: "PHP · MySQL · WampServer · CRUD en tiempo real para gestión de participantes.", url: "https://github.com/Flor125/OlympicsPage" },
      { pre: "PROJECT.002", t: "Registro de Reparaciones", s: "C · CMake · sistema de registro de reparaciones de dispositivos electrónicos.", url: "https://github.com/Flor125/Registro-RepairDevices" },
      { pre: "PROJECT.003", t: "Sistema de voto electrónico", s: "Java · MySQL · Login en tiempo real,  para gestión de votantes y mesas.", url: "https://github.com/Flor125/padron" },
    ],

    eduSchool: "Universidad Nacional de Villa Mercedes (UNViMe)",
    eduDegree: "Programadora Universitaria de Sistemas",
    eduMeta: "Promedio 8.43/10 · Egresada Marzo 2026 · Práctica Profesional Supervisada calificada 9/10 — único despliegue en infraestructura IBM LinuxONE real de la cohorte.",

    contactPre: "*** END OF DATA · BEGIN COMMUNICATION ***",
    contactH: "Hablemos.",
    contactSub: "Disponible para roles remotos full-time o part-time en desarrollo y modernización mainframe.",
    contactEnd: "*** END OF SESSION ***",

    eggBtn: "TSO/E TERMINAL",
    eggTitle: "TSO/E SHELL · FLOR125 · TYPE 'help'",
  },
  en: {
    barLeft: "TSO/E SESSION · FLOR125.PORTFOLIO",
    barCenter: "ROW 001 OF 999",
    boot: [
      { t: "Booting z/OS Mainframe Portfolio v2.0...", c: "sys" },
      { t: "OK · IPL complete", c: "ok" },
      { t: "OK · CICS region active", c: "ok" },
      { t: "OK · Db2 subsystem online", c: "ok" },
      { t: "OK · RACF security profile loaded", c: "ok" },
      { t: "INFO · Establishing TSO session for FLOR125", c: "info" },
      { t: "READY", c: "ok" },
    ],
    role: "JUNIOR COBOL DEVELOPER",
    sub: ["IBM Mainframe", "Batch & Online", "Python / Flask"],
    h1: "Only deployment in the cohort",
    h2: "on real IBM LinuxONE infrastructure",
    h3: "exposed to live internet traffic.",
    location: "San Luis, Argentina · Available for remote roles",
    cta: { dl: "Download Resume", em: "Email", li: "LinkedIn", gh: "GitHub", file: "./uploads/Resume_Florencia_Alicia_Sombra.pdf" },

    s1: "About",
    s2: "Technical stack",
    s3: "Featured project",
    s4: "Certifications",
    s5: "Other projects",
    s6: "Education",
    s7: "Contact",

    aboutP1Pre: "Junior COBOL developer with hands-on experience deploying batch applications on ",
    aboutP1Hl: "real IBM LinuxONE enterprise infrastructure (s390x)",
    aboutP1Suf: ".",
    aboutP2Pre: "Designed, coded and documented a production-grade hybrid system integrating ",
    aboutP2Hl: "COBOL batch, Db2, JCL and Python Flask",
    aboutP2Suf: " — scored 9/10. IBM Z Xplore All Star (Concepts + Advanced + Code-a-Thon).",
    aboutP3: "Experienced integrating AI tools (Claude, ChatGPT) into development workflows for code generation, documentation and legacy system analysis.",

    facts: [
      { v: "9/10", l: "PPS score" },
      { v: "8.43", l: "GPA" },
      { v: "30+", l: "IBM Z badges" },
      { v: "B2", l: "EF SET English" },
    ],

    stackGroups: [
      { p: "CORE", t: "Mainframe Core", items: ["COBOL", "JCL", "IBM Db2", "VSAM", "z/OS", "TSO/ISPF"] },
      { p: "EXT", t: "Mainframe Extended", items: ["CICS", "RACF", "IBM MQ", "IMS", "zOSMF", "Assembler", "PL/I"] },
      { p: "TOOL", t: "Tooling", items: ["Zowe CLI", "Zowe Desktop", "Ansible", "Docker s390x", "IBM Z OAU", "z/OS UNIX"] },
      { p: "BACK", t: "Backend & Integration", items: ["Python", "Flask", "ibm_db", "REST APIs", "Bash", "Git", "GitHub"] },
    ],

    projTitle: "Inventory Management System",
    projSub: "Mainframe Architecture · COBOL + Db2 + JCL + Flask · LinuxONE s390x",
    projMetrics: [
      { v: "9/10", l: "PPS score" },
      { v: "500+", l: "batch COBOL lines" },
      { v: "8", l: "normalized Db2 tables" },
      { v: "56", l: "pages of docs" },
    ],
    projBullets: [
      "Nightly batch processing: stock control, FEFO expiration alerts and bulk price updates on IBM LinuxONE.",
      "Normalized Db2 schema (8 tables) with ACID transactions and referential integrity for critical operational consistency.",
      "Python Flask REST API with RBAC (MANAGER/EMPLOYEE), pbkdf2:sha256 hashing, CSRF protection and full audit logging.",
      "Audit logs documented and blocked real attacks: automated bots, SQL injection attempts, brute force and session hijacking.",
      "Complete documentation in a 56-page technical report with UML diagrams, use cases and processes. Scored 9/10.",
    ],
    projCta: { case: "View case study", repo: "Repository" },

    certs: [
      { t: "IBM Mainframe Developer Professional Certificate", o: "IBM / Coursera · 7 modules: COBOL, JCL, Db2, z/OS, CICS, VSAM, security", y: "2024–2025" },
      { t: "IBM z/OS Mainframe Practitioner Professional Certificate", o: "IBM / Coursera · z/OS, JCL, ISPF, RACF, mainframe administration", y: "2024–2025" },
      { t: "IBM Z Xplore All Star", o: "Concepts + Advanced + All Star + Code-a-Thon · 30+ technical badges", y: "Oct 2024" },
      { t: "Fundamentals for Zowe", o: "Interskill Learning · Zowe CLI, Desktop and Explorer", y: "2025" },
      { t: "EF SET English B2 — Upper Intermediate", o: "Technical reading, writing and communication in English", y: "2024" },
    ],

    others: [
      { pre: "PROJECT.001", t: "Olympics Page", s: "PHP · MySQL · WampServer · realtime CRUD for participant management.", url: "https://github.com/Flor125/OlympicsPage" },
      { pre: "PROJECT.002", t: "Repair Records System", s: "C · CMake · electronic device repair tracking system.", url: "https://github.com/Flor125/Registro-RepairDevices" },
      { pre: "PROJECT.003", t: "Electronic Voting System", s: "Java · MySQL.", url: "https://github.com/Flor125/padron" },
    ],

    eduSchool: "Universidad Nacional de Villa Mercedes (UNViMe)",
    eduDegree: "University Systems Programmer",
    eduMeta: "GPA 8.43/10 · Graduated March 2026 · Supervised practice scored 9/10 — only deployment on real IBM LinuxONE infrastructure in the cohort.",

    contactPre: "*** END OF DATA · BEGIN COMMUNICATION ***",
    contactH: "Let's talk.",
    contactSub: "Available for remote full-time or part-time roles in mainframe development and modernization.",
    contactEnd: "*** END OF SESSION ***",

    eggBtn: "TSO/E TERMINAL",
    eggTitle: "TSO/E SHELL · FLOR125 · TYPE 'help'",
  },
};

window.I18N = I18N;
