export type CaseKPI = { label: string; value: string; note?: string };

export type CaseStudy = {
  slug: string;
  tag: string;          // Etiqueta pequeña (ej: SaaS, E-commerce)
  title: string;        // Título principal
  subtitle: string;     // Subtítulo corto
  heroBlurb?: string;   // EL TEXTO PARA LA TARJETA DEL HERO (Nuevo)
  kpis: CaseKPI[];      // 3 métricas clave
  winNote?: string;     // La "pill" verde o nota de ganador
  accent: {             // Colores del glow
    a: string; 
    b: string;
    c: string;
  };
  featured?: boolean;   // Control interno
};

export const cases: CaseStudy[] = [
  // === HERO CASES (Los 3 que salen en el rotador arriba) ===
  
  {
    slug: "toolspace-saas-b2b",
    tag: "SaaS B2B",
    title: "ToolSpace — Validación",
    subtitle: "CTR vs. Frustración cognitiva.",
    heroBlurb: "La versión C redujo la fricción en el Top 25% de usuarios y mejoró el CTR relativo. La audiencia priorizó claridad sobre datos duros.",
    kpis: [
      { label: "CTR Medio", value: "4.1%", note: "vs 3.9% (B)" },
      { label: "Frustración", value: "-3.5 pts", note: "baja fricción" },
      { label: "Intención", value: "Alta", note: "Top 25%" },
    ],
    winNote: "Winner C (Menor fricción)",
    accent: {
      a: "rgba(129, 140, 248, 0.25)", // Indigo
      b: "rgba(99, 102, 241, 0.20)",
      c: "rgba(168, 85, 247, 0.15)", // Purple
    },
    featured: true,
  },

  {
    slug: "skincare-friccion-emocional",
    tag: "E-commerce",
    title: "Skincare — Fricción",
    subtitle: "Miedo a perder dinero vs. Transformación.",
    heroBlurb: "El ángulo de 'Riesgo Cero' superó a la prueba social. En este nicho, el cliente temía perder dinero más de lo que deseaba el cambio estético.",
    kpis: [
      { label: "WinShare", value: "86.1%", note: "click intent" },
      { label: "Purchase Rate", value: "0.50%", note: "simulado" },
      { label: "Driver", value: "Seguridad", note: "vs Social" },
    ],
    winNote: "Winner B (Garantía)",
    accent: {
      a: "rgba(244, 114, 182, 0.25)", // Pink
      b: "rgba(236, 72, 153, 0.20)",
      c: "rgba(251, 113, 133, 0.15)", // Rose
    },
    featured: true,
  },

  {
    slug: "b2b-ads-copy-testing",
    tag: "B2B Service",
    title: "Agencia Ads — Copy",
    subtitle: "Especificidad vs. Promesa genérica.",
    heroBlurb: "El mensaje M2 (Reducir CPA) ganó en 5 de 5 audiencias. La especificidad temporal (90 días) batió a la promesa genérica de crecimiento de MRR.",
    kpis: [
      { label: "WinShare", value: "100%", note: "5/5 seeds" },
      { label: "ROI", value: "Estable", note: "outreach" },
      { label: "CPA", value: "Optimizado", note: "modelo" },
    ],
    winNote: "Winner M2 (Especificidad)",
    accent: {
      a: "rgba(56, 189, 248, 0.25)", // Sky blue
      b: "rgba(14, 165, 233, 0.20)",
      c: "rgba(2, 132, 199, 0.15)", // Blue
    },
    featured: true,
  },

  // === GRID CASES (Los 3 que salen abajo, distintos) ===

  {
    slug: "elite-pt-high-ticket",
    tag: "High Ticket",
    title: "Elite PT — Cliente Difícil",
    subtitle: "Nicho sin datos previos: construcción desde cero.",
    // En la grid no se usa heroBlurb, se usa subtitle, pero lo dejamos por si acaso
    heroBlurb: "Separación de mensajes por segmento: Performance para atletas vs. Ahorro de tiempo para entrenadores ocupados.",
    kpis: [
      { label: "Encaje", value: "M1 Time", note: "general" },
      { label: "Revenue", value: "M3 Perf.", note: "nicho" },
      { label: "Lead Rate", value: "0.99%", note: "estimado" },
    ],
    winNote: "Winner Mixto (Segmentado)",
    accent: {
      a: "rgba(16, 185, 129, 0.25)", // Emerald
      b: "rgba(5, 150, 105, 0.20)",
      c: "rgba(52, 211, 153, 0.15)",
    },
    featured: true,
  },

  {
    slug: "sensibilidad-precio-saas",
    tag: "Estrategia",
    title: "Sensibilidad al Precio",
    subtitle: "Volumen (19€) vs. Revenue (49€).",
    heroBlurb: "Subir precio filtra clientes pero aumenta revenue total. P99 fue rechazado por falta de percepción de valor premium.",
    kpis: [
      { label: "RPV 19€", value: "1.46€", note: "por visita" },
      { label: "RPV 49€", value: "2.26€", note: "winner $" },
      { label: "Volumen", value: "P19", note: "winner users" },
    ],
    winNote: "Winner P49 (Revenue)",
    accent: {
      a: "rgba(251, 146, 60, 0.25)", // Orange
      b: "rgba(249, 115, 22, 0.20)",
      c: "rgba(253, 186, 116, 0.15)",
    },
    featured: true,
  },

  {
    slug: "saas-roles-productividad",
    tag: "SaaS / Roles",
    title: "SaaS — 3 Roles",
    subtitle: "Founder vs. PM vs. Support Lead.",
    heroBlurb: "Validación de sesgos: El Founder quiere control (A), el PM quiere orden (B). El mensaje ganador cambia según quién lee la landing.",
    kpis: [
      { label: "Leads", value: "Msg A", note: "acumulado" },
      { label: "Var.", value: "Alta", note: "por seed" },
      { label: "WinShare", value: "Dinámico", note: "por rol" },
    ],
    winNote: "Winner A (Global)",
    accent: {
      a: "rgba(139, 92, 246, 0.25)", // Violet
      b: "rgba(124, 58, 237, 0.20)",
      c: "rgba(167, 139, 250, 0.15)",
    },
    featured: true,
  },
];