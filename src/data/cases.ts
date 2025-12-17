export type CaseKPI = { label: string; value: string; note?: string };

export type CaseStudy = {
  slug: string;
  tag: string;          // etiqueta corta (SaaS, Skincare, etc.)
  title: string;        // título visible
  subtitle: string;     // 1 línea
  kpis: CaseKPI[];      // 3 KPIs para cards / hero
  winNote?: string;     // mini “winner …”
  accent: {
    a: string; // rgba(...)
    b: string;
    c: string;
  };
  featured?: boolean;   // para rotator hero / marquee
};

export const cases: CaseStudy[] = [
  {
    slug: "toolspace-saas-b2b",
    tag: "SaaS B2B",
    title: "ToolSpace — SaaS B2B",
    subtitle: "Priorizar mensaje antes de comprar tráfico.",
    kpis: [
      { label: "Clic en CTA", value: "+36,7%" },
      { label: "Rechazo", value: "−7 pts" },
      { label: "Tiempo en página", value: "+25,9%" },
    ],
    winNote: "Variante C vs A/B",
    accent: {
      a: "rgba(99,102,241,0.22)",
      b: "rgba(168,85,247,0.18)",
      c: "rgba(236,72,153,0.16)",
    },
    featured: true,
  },

  {
    slug: "skincare-friccion-emocional",
    tag: "Skincare",
    title: "Skincare — fricción emocional",
    subtitle: "3 mensajes · compra + resistencia psicológica.",
    kpis: [
      { label: "Purchase rate", value: "0,45%" },
      { label: "CAC", value: "20,82€", note: "estimado" },
      { label: "Rechazo", value: "33,04%", note: "estimado" },
    ],
    winNote: "WinShare 90,0% (winner B)",
    accent: {
      a: "rgba(79,70,229,0.20)",
      b: "rgba(124,58,237,0.18)",
      c: "rgba(236,72,153,0.14)",
    },
    featured: true,
  },

  {
    slug: "landing-optimization",
    tag: "Landing",
    title: "Landing Optimization",
    subtitle: "Qué frena, qué convierte y por qué.",
    kpis: [
      { label: "WinShare", value: "31,1%" },
      { label: "Conversión", value: "0,47%" },
      { label: "Rechazo", value: "35,4%" },
    ],
    winNote: "Winner B (según informe)",
    accent: {
      a: "rgba(56,189,248,0.16)",
      b: "rgba(99,102,241,0.20)",
      c: "rgba(168,85,247,0.16)",
    },
    featured: true,
  },

  {
    slug: "elite-pt-cliente-dificil",
    tag: "Elite PT",
    title: "Elite PT — cliente difícil",
    subtitle: "Construcción desde cero con info mínima.",
    kpis: [
      { label: "WinShare", value: "33,9%" },
      { label: "Tasa lead", value: "0,99%" },
      { label: "Rechazo", value: "28,6%" },
    ],
    winNote: "Winner M1 (resumen)",
    accent: {
      a: "rgba(99,102,241,0.18)",
      b: "rgba(16,185,129,0.14)",
      c: "rgba(236,72,153,0.12)",
    },
  },

  {
    slug: "b2b-ads-copy-testing",
    tag: "B2B Ads",
    title: "B2B Ads — copy testing",
    subtitle: "5 audiencias · ranking intención/rechazo.",
    kpis: [
      { label: "WinShare", value: "38,4%" },
      { label: "ROI", value: "57,41" },
      { label: "eCPA", value: "66,77" },
    ],
    winNote: "Winner M2 (resumen)",
    accent: {
      a: "rgba(56,189,248,0.14)",
      b: "rgba(99,102,241,0.18)",
      c: "rgba(236,72,153,0.12)",
    },
  },

  {
    slug: "ugc-creatividades",
    tag: "UGC",
    title: "UGC — Creatividades",
    subtitle: "Comparativa de variantes y consistencia.",
    kpis: [
      { label: "WinShare", value: "29,2%" },
      { label: "Purchase", value: "0,84%" },
      { label: "Rechazo", value: "26,3%" },
    ],
    winNote: "Winner C (resumen)",
    accent: {
      a: "rgba(168,85,247,0.16)",
      b: "rgba(99,102,241,0.16)",
      c: "rgba(236,72,153,0.12)",
    },
  },

  {
    slug: "saas-3-roles-4-audiencias",
    tag: "SaaS",
    title: "SaaS — 3 roles / 4 audiencias",
    subtitle: "Diferencias reales por rol en el funnel.",
    kpis: [
      { label: "WinShare", value: "26,3%" },
      { label: "Lead rate", value: "0,64%" },
      { label: "Rechazo", value: "31,0%" },
    ],
    winNote: "Winner A (resumen)",
    accent: {
      a: "rgba(99,102,241,0.18)",
      b: "rgba(14,165,233,0.12)",
      c: "rgba(236,72,153,0.10)",
    },
  },

  {
    slug: "agencia-ecommerce",
    tag: "Agencia",
    title: "Agencia (E-commerce)",
    subtitle: "Propuesta y mensajes: intención + fricción.",
    kpis: [
      { label: "WinShare", value: "38,4%" },
      { label: "Lead rate", value: "0,55%" },
      { label: "Open rate", value: "42,1%" },
    ],
    winNote: "Winner M1 (resumen)",
    accent: {
      a: "rgba(56,189,248,0.12)",
      b: "rgba(99,102,241,0.18)",
      c: "rgba(168,85,247,0.14)",
    },
  },

  {
    slug: "sensibilidad-precio",
    tag: "E-commerce",
    title: "Sensibilidad al precio",
    subtitle: "Segmentos por tolerancia y respuesta a precio.",
    kpis: [
      { label: "WinShare", value: "27,8%" },
      { label: "Purchase", value: "0,58%" },
      { label: "Rechazo", value: "34,2%" },
    ],
    winNote: "Winner B (resumen)",
    accent: {
      a: "rgba(99,102,241,0.16)",
      b: "rgba(16,185,129,0.10)",
      c: "rgba(236,72,153,0.10)",
    },
  },
];