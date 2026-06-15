export type Lang = "en" | "es";

export const translations = {
  en: {
    title: "Chasqui — open-source stack for AI chat agents",
    description:
      "Build custom AI chat agents you actually own: LangGraph orchestrator, memory, FAQ RAG, multimodal, human handoff inbox and a pluggable tool system. Self-hosted, channel-agnostic. WhatsApp and Telegram today, more channels on the roadmap.",
    ogLocale: "en_US",
    nav: {
      features: "Features",
      architecture: "Architecture",
      quickstart: "Quickstart",
      skills: "Skills",
      roadmap: "Roadmap",
      contact: "Contact",
    },
    hero: {
      heading: 'Build AI chat agents<br />you actually <span class="accent">own</span>.',
      sub: "Chasqui is an open-source, self-hosted stack for custom AI chat agents: conversation engine, memory, RAG, human handoff and a pluggable tool system — wired and ready, so your energy goes into your agent's logic. <strong>WhatsApp and Telegram today, more channels on the roadmap.</strong>",
      getStarted: "Get started",
      star: "Star on GitHub",
      note: "Apache-2.0 · beta · one command scaffolds and provisions the whole stack",
      shotAlt:
        "Chasqui operator panel: a human-handoff conversation with image and voice messages",
    },
    features: {
      eyebrow: "Batteries included",
      title: "Everything an agent needs, already wired",
      lead: "The plumbing decisions are made — Postgres + pgvector, one canonical message contract, conventions over configuration. You build what makes your agent different.",
      cards: [
        {
          title: "Conversation engine",
          body: "A LangGraph orchestrator keeps one continuous thread per contact — context, silence handling and delivery errors are already solved.",
        },
        {
          title: "Memory + FAQ RAG",
          body: "Long-term memory and a grounded FAQ knowledge base on Postgres + pgvector. Answers cite your content, not hallucinations.",
        },
        {
          title: "Multimodal, both ways",
          body: "Images, documents and voice notes — understood on the way in, sent on the way out.",
        },
        {
          title: "Human handoff inbox",
          body: "The agent detects when a person is needed; operators take over and reply from the panel, media included.",
        },
        {
          title: "Tool Modules",
          body: "Self-contained packages the core auto-discovers: tools, tables, routes and config forms the panel renders for free.",
        },
        {
          title: "Any LLM, a .env swap",
          body: "Gemini, Claude, GPT, OpenRouter or local Ollama. Change provider and the next message uses it — no redeploy.",
        },
      ],
    },
    architecture: {
      eyebrow: "Channel-agnostic by design",
      title: "The core never knows a channel exists",
      lead: "Channels are thin, stateless gateways that translate their platform to one canonical contract — two endpoints and you've added a channel. Handoff, media, silence and delivery errors are expressed once, inherited by every channel for free.",
      diagramAria:
        "Architecture: channel gateways talk to the core through one canonical contract; the core uses Postgres with pgvector and is operated through the admin panel",
      whatsapp: "PyWa gateway · live",
      telegram: "PTB gateway · live",
      roadmapTag: "roadmap",
      webWidget: "Web widget",
      contract: "one canonical contract",
      coreSmall: "FastAPI + LangGraph<br />agent · memory · RAG · tools · handoff",
      admin: "admin panel",
      adminSmall: "React SPA · REST · JWT",
      foot: 'Every non-obvious decision is written down as an ADR — <a href="https://github.com/chasqui-stack/chasqui/blob/main/docs/ARCHITECTURE.md">read the architecture</a>.',
    },
    panel: {
      eyebrow: "Operator panel",
      title: "Run the agent without touching code",
      checklist: [
        "Edit the system prompt and watch behavior change on the next message",
        "Curate the FAQ knowledge base that grounds RAG answers",
        "Configure tool modules through auto-rendered forms",
        "Watch conversations live, take over when it matters",
        "Capture and review leads",
      ],
      dashboardAlt: "Chasqui admin dashboard in dark mode",
      conversationAlt:
        "A full conversation: AI replies, human handoff, operator takeover",
    },
    quickstart: {
      eyebrow: "Quickstart",
      title: "From zero to a running agent",
      steps: [
        {
          title: "Scaffold",
          body: "The wizard asks: LLM, embeddings, Postgres, ports, WhatsApp credentials (skippable), language, first admin — then provisions deps, database and migrations.",
        },
        {
          title: "Run",
          body: "API, WhatsApp gateway and operator panel — each a one-liner.",
        },
        {
          title: "Connect WhatsApp",
          body: "A free Meta developer app is enough to start. Step-by-step guide included, ngrok webhook auto-registration in dev.",
        },
      ],
      foot: 'Prerequisites: <a href="https://docs.astral.sh/uv/">uv</a>, Node 22, PostgreSQL with pgvector (or the generated docker-compose).',
    },
    skills: {
      eyebrow: "Agent skills",
      title: "Teach your coding agent to extend it",
      lead: "The omakase conventions, packaged as installable Agent Skills. Your coding agent reads them on demand and knows how to scaffold, add a channel or build a module the Chasqui way — pointing to the canonical docs, never guessing.",
      install: "npx skills add chasqui-stack/skills --skill '*'",
      cards: [
        {
          title: "chasqui-primer",
          body: "The router: philosophy, the three services and the canonical contract — then it points your agent to the right skill.",
        },
        {
          title: "chasqui-cli",
          body: "Scaffold and extend with the CLI: chasqui new, the wizard, chasqui generate module.",
        },
        {
          title: "chasqui-create-channel",
          body: "Add a new channel over the canonical contract, with the live Telegram gateway as the worked example.",
        },
      ],
      foot: 'Works with Claude Code, Cursor, Codex, Gemini CLI and more — the open <a href="https://agentskills.io">Agent Skills</a> standard. <a href="https://github.com/chasqui-stack/skills">Browse the skills</a>.',
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "Where this is going",
      items: [
        { title: "Web chat widget", detail: "embeddable channel for any website" },
        { title: "Analytics", detail: "conversation stats module for the panel" },
        { title: "Document RAG", detail: "knowledge base beyond FAQ pairs — PDFs, docs" },
      ],
      foot: 'Issues and ideas welcome — <a href="https://github.com/chasqui-stack/chasqui">join in on GitHub</a>.',
    },
    contact: {
      eyebrow: "Contact",
      title: "Want an agent built for you?",
      lead: "We build custom agents on Chasqui and help teams get theirs running. Bugs and ideas go to GitHub issues — for everything else, talk to us:",
      emailDetail: "Questions, partnerships, consulting.",
      waTitle: "Chat on WhatsApp",
      waDetail: "Yes — the same channel Chasqui speaks.",
      waHref:
        "https://wa.me/51959350453?text=Hi!%20I%20found%20Chasqui%20and%20I%27d%20like%20to%20talk.",
    },
    footer: {
      lore: "Named after the <em>chasqui</em> — the relay messengers of the Inca empire who carried messages across the network.",
      copy: "© 2026 Chasqui contributors",
    },
  },
  es: {
    title: "Chasqui — stack open-source para agentes de chat con IA",
    description:
      "Construye agentes de chat con IA que de verdad son tuyos: orquestador LangGraph, memoria, RAG de FAQs, multimodal, inbox de handoff humano y un sistema de tools enchufable. Self-hosted y agnóstico al canal. WhatsApp y Telegram hoy, más canales en el roadmap.",
    ogLocale: "es_LA",
    nav: {
      features: "Funciones",
      architecture: "Arquitectura",
      quickstart: "Quickstart",
      skills: "Skills",
      roadmap: "Roadmap",
      contact: "Contacto",
    },
    hero: {
      heading:
        'Construye agentes de chat<br />con IA que de verdad son <span class="accent">tuyos</span>.',
      sub: "Chasqui es un stack open-source y self-hosted para agentes de chat con IA a medida: motor de conversación, memoria, RAG, handoff humano y un sistema de tools enchufable — todo cableado y listo, para que tu energía vaya a la lógica de tu agente. <strong>WhatsApp y Telegram hoy, más canales en el roadmap.</strong>",
      getStarted: "Empieza ahora",
      star: "Star en GitHub",
      note: "Apache-2.0 · beta · un comando crea y aprovisiona todo el stack",
      shotAlt:
        "Panel de operación de Chasqui: una conversación con handoff humano, con mensajes de imagen y voz",
    },
    features: {
      eyebrow: "Baterías incluidas",
      title: "Todo lo que un agente necesita, ya cableado",
      lead: "Las decisiones de plomería ya están tomadas — Postgres + pgvector, un contrato de mensajes canónico, convención sobre configuración. Tú construyes lo que hace diferente a tu agente.",
      cards: [
        {
          title: "Motor de conversación",
          body: "Un orquestador LangGraph mantiene un hilo continuo por contacto — contexto, manejo de silencios y errores de entrega ya están resueltos.",
        },
        {
          title: "Memoria + RAG de FAQs",
          body: "Memoria de largo plazo y una base de conocimiento de FAQs sobre Postgres + pgvector. Respuestas ancladas en tu contenido, no alucinaciones.",
        },
        {
          title: "Multimodal, en ambos sentidos",
          body: "Imágenes, documentos y notas de voz — entendidos a la entrada, enviados a la salida.",
        },
        {
          title: "Inbox de handoff humano",
          body: "El agente detecta cuándo hace falta una persona; los operadores toman el control y responden desde el panel, con multimedia incluida.",
        },
        {
          title: "Tool Modules",
          body: "Paquetes autocontenidos que el core descubre solo: tools, tablas, rutas y formularios de configuración que el panel renderiza gratis.",
        },
        {
          title: "Cualquier LLM, un cambio de .env",
          body: "Gemini, Claude, GPT, OpenRouter u Ollama local. Cambia de proveedor y el siguiente mensaje ya lo usa — sin redeploy.",
        },
      ],
    },
    architecture: {
      eyebrow: "Agnóstico al canal por diseño",
      title: "El core nunca sabe que existe un canal",
      lead: "Los canales son gateways delgados y sin estado que traducen su plataforma a un contrato canónico — dos endpoints y ya agregaste un canal. Handoff, multimedia, silencios y errores de entrega se expresan una sola vez y todos los canales los heredan gratis.",
      diagramAria:
        "Arquitectura: los gateways de canal hablan con el core a través de un contrato canónico; el core usa Postgres con pgvector y se opera desde el panel de administración",
      whatsapp: "gateway PyWa · activo",
      telegram: "gateway PTB · activo",
      roadmapTag: "roadmap",
      webWidget: "Widget web",
      contract: "un contrato canónico",
      coreSmall: "FastAPI + LangGraph<br />agente · memoria · RAG · tools · handoff",
      admin: "panel admin",
      adminSmall: "React SPA · REST · JWT",
      foot: 'Cada decisión no obvia queda escrita como un ADR — <a href="https://github.com/chasqui-stack/chasqui/blob/main/docs/ARCHITECTURE.md">lee la arquitectura</a>.',
    },
    panel: {
      eyebrow: "Panel de operación",
      title: "Opera el agente sin tocar código",
      checklist: [
        "Edita el system prompt y mira el comportamiento cambiar en el siguiente mensaje",
        "Cura la base de FAQs que ancla las respuestas del RAG",
        "Configura los tool modules con formularios auto-renderizados",
        "Mira las conversaciones en vivo y toma el control cuando importa",
        "Captura y revisa leads",
      ],
      dashboardAlt: "Dashboard del panel de Chasqui en modo oscuro",
      conversationAlt:
        "Una conversación completa: respuestas de la IA, handoff humano y toma de control del operador",
    },
    quickstart: {
      eyebrow: "Quickstart",
      title: "De cero a un agente corriendo",
      steps: [
        {
          title: "Crea el proyecto",
          body: "El wizard pregunta: LLM, embeddings, Postgres, puertos, credenciales de WhatsApp (opcional), idioma, primer admin — y aprovisiona dependencias, base de datos y migraciones.",
        },
        {
          title: "Levanta los servicios",
          body: "API, gateway de WhatsApp y panel de operación — cada uno con una línea.",
        },
        {
          title: "Conecta WhatsApp",
          body: "Una app gratuita de Meta developers basta para empezar. Guía paso a paso incluida, con registro automático del webhook vía ngrok en dev.",
        },
      ],
      foot: 'Prerequisitos: <a href="https://docs.astral.sh/uv/">uv</a>, Node 22 y PostgreSQL con pgvector (o el docker-compose generado).',
    },
    skills: {
      eyebrow: "Skills para tu agente",
      title: "Enséñale a tu agente a extenderlo",
      lead: "Las convenciones omakase, empaquetadas como Agent Skills instalables. Tu agente de código las lee on-demand y sabe crear el proyecto, agregar un canal o construir un módulo al estilo Chasqui — apuntando a la doc canónica, sin adivinar.",
      install: "npx skills add chasqui-stack/skills --skill '*'",
      cards: [
        {
          title: "chasqui-primer",
          body: "El router: filosofía, los tres servicios y el contrato canónico — y te enruta al skill correcto.",
        },
        {
          title: "chasqui-cli",
          body: "Crea y extiende con el CLI: chasqui new, el wizard, chasqui generate module.",
        },
        {
          title: "chasqui-create-channel",
          body: "Agrega un canal nuevo sobre el contrato canónico, con el gateway de Telegram (activo) como ejemplo.",
        },
      ],
      foot: 'Funciona con Claude Code, Cursor, Codex, Gemini CLI y más — el estándar abierto <a href="https://agentskills.io">Agent Skills</a>. <a href="https://github.com/chasqui-stack/skills">Explora los skills</a>.',
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "Hacia dónde va esto",
      items: [
        { title: "Widget de chat web", detail: "canal embebible para cualquier sitio" },
        { title: "Analytics", detail: "módulo de estadísticas de conversación para el panel" },
        { title: "RAG de documentos", detail: "base de conocimiento más allá de FAQs — PDFs, docs" },
      ],
      foot: 'Issues e ideas bienvenidos — <a href="https://github.com/chasqui-stack/chasqui">súmate en GitHub</a>.',
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Quieres que construyamos tu agente?",
      lead: "Construimos agentes a medida sobre Chasqui y ayudamos a equipos a poner el suyo en marcha. Bugs e ideas van a los issues de GitHub — para todo lo demás, hablemos:",
      emailDetail: "Preguntas, partnerships, consultoría.",
      waTitle: "Escríbenos por WhatsApp",
      waDetail: "Sí — el mismo canal que habla Chasqui.",
      waHref:
        "https://wa.me/51959350453?text=%C2%A1Hola!%20Encontr%C3%A9%20Chasqui%20y%20me%20gustar%C3%ADa%20conversar.",
    },
    footer: {
      lore: "El nombre viene del <em>chasqui</em> — los mensajeros de relevo del imperio inca que llevaban los mensajes a través de la red.",
      copy: "© 2026 Chasqui contributors",
    },
  },
} as const;
