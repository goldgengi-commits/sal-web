export type CaseKPI = { label: string; value: string; note?: string };

export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  heroBlurb?: string;
  kpis: CaseKPI[];
  winNote?: string;
  accent: { a: string; b: string; c: string; };
  featured?: boolean;
  // Nuevos campos de contenido
  content?: {
    context: string;
    winnerContent: string;
    driverContent: string;
    actionContent: string;
  };
};

export const cases: CaseStudy[] = [
  // === GRUPO 1: HERO ===
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
      a: "rgba(129, 140, 248, 0.25)",
      b: "rgba(99, 102, 241, 0.20)",
      c: "rgba(168, 85, 247, 0.15)",
    },
    featured: true,
    content: {
      context: "ToolSpace intentaba vender su suite con argumentos técnicos complejos (V1) frente a beneficios directos (V2). La duda era si el comprador técnico valoraba más la 'potencia' o la 'facilidad'.",
      winnerContent: "La variante C (Enfoque en Flujo de Trabajo) superó a la técnica por un 12% en intención de clic.",
      driverContent: "Reducción de Carga Cognitiva. El usuario B2B está saturado; prefiere entender 'cómo me ahorras tiempo' antes que 'qué tecnología usas'.",
      actionContent: "Simplificar el Above-the-fold. Mover especificaciones técnicas a la segunda sección de la landing."
    }
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
      a: "rgba(244, 114, 182, 0.25)",
      b: "rgba(236, 72, 153, 0.20)",
      c: "rgba(251, 113, 133, 0.15)",
    },
    featured: true,
    content: {
      context: "La marca apostaba todo a fotos de antes/después (Social Proof). Sin embargo, el CPA era alto. Hipótesis: el freno no es la eficacia, es el precio.",
      winnerContent: "El mensaje centrado en 'Garantía de devolución 60 días' (Variante B) capturó un 86% del WinShare.",
      driverContent: "Aversión a la Pérdida. El miedo a gastar 50€ en algo que no funciona es mayor que el deseo de tener mejor piel.",
      actionContent: "Implementar badge de garantía cerca del CTA principal en todos los anuncios de retargeting."
    }
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
      a: "rgba(56, 189, 248, 0.25)",
      b: "rgba(14, 165, 233, 0.20)",
      c: "rgba(2, 132, 199, 0.15)",
    },
    featured: true,
    content: {
      context: "Probamos tres promesas: 'Escalar tu negocio' (Genérica), 'Más leads cualificados' (Beneficio) y 'Reducir CPA en 90 días' (Específica).",
      winnerContent: "M2 (Reducir CPA) dominó en todas las simulaciones con un score de intención perfecto (10/10).",
      driverContent: "Tangibilidad. En un mercado saturado de promesas vagas, un número concreto y un plazo temporal generan credibilidad inmediata.",
      actionContent: "Reemplazar titulares aspiracionales por promesas numéricas en las campañas de LinkedIn Ads."
    }
  },

  // === GRUPO 2: GRID HOME ===
  {
    slug: "elite-pt-high-ticket",
    tag: "High Ticket",
    title: "Elite PT — Cliente Difícil",
    subtitle: "Nicho sin datos previos: construcción desde cero.",
    heroBlurb: "Separación de mensajes por segmento: Performance para atletas vs. Ahorro de tiempo para entrenadores ocupados.",
    kpis: [
      { label: "Encaje", value: "M1 Time", note: "general" },
      { label: "Revenue", value: "M3 Perf.", note: "nicho" },
      { label: "Lead Rate", value: "0.99%", note: "estimado" },
    ],
    winNote: "Winner Mixto (Segmentado)",
    accent: {
      a: "rgba(16, 185, 129, 0.25)",
      b: "rgba(5, 150, 105, 0.20)",
      c: "rgba(52, 211, 153, 0.15)",
    },
    featured: true,
    content: {
      context: "El cliente vendía formación para entrenadores. No sabíamos si vender 'prestigio' o 'negocio'. Simulamos ambos perfiles.",
      winnerContent: "Empate técnico global, pero victoria clara por segmento. M1 ganó en novatos, M3 en veteranos.",
      driverContent: "Status vs. Utilidad. El novato busca validar su carrera (Status); el veterano busca optimizar su tiempo (Utilidad).",
      actionContent: "Dividir la cuenta publicitaria en dos avatares distintos con creatividades exclusivas para cada uno."
    }
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
      a: "rgba(251, 146, 60, 0.25)",
      b: "rgba(249, 115, 22, 0.20)",
      c: "rgba(253, 186, 116, 0.15)",
    },
    featured: true,
    content: {
      context: "SaaS B2C. ¿Mejor vender barato a muchos o caro a pocos? Simulamos la fricción de pago en tres puntos: 19€, 49€ y 99€.",
      winnerContent: "El precio de 49€ generó menos ventas que el de 19€, pero un 54% más de facturación total.",
      driverContent: "Elasticidad Precio. El valor percibido del producto aguanta hasta los 50€. A partir de ahí (99€), la caída de conversión es vertical.",
      actionContent: "Fijar precio base en 49€ y usar descuentos puntuales para recuperar a los sensibles al precio."
    }
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
      a: "rgba(139, 92, 246, 0.25)",
      b: "rgba(124, 58, 237, 0.20)",
      c: "rgba(167, 139, 250, 0.15)",
    },
    featured: true,
    content: {
      context: "Software de gestión de tickets. El problema: el que compra (CEO) no es el que lo usa (Soporte). ¿A quién le hablamos?",
      winnerContent: "El mensaje de 'Control y Métricas' (Para CEOs) convirtió un 40% más en la fase de decisión de compra.",
      driverContent: "Ansiedad de Control. El comprador decisor tiene miedo al caos. El usuario final solo quiere facilidad.",
      actionContent: "La landing page debe hablarle al CEO (comprador). El onboarding debe hablarle al equipo (usuario)."
    }
  },

  // === GRUPO 3: RESTO ===
  {
    slug: "agencia-ecommerce-mensajes",
    tag: "Agencia B2B",
    title: "Agencia E-com — Mensajes",
    subtitle: "Performance (ROAS) vs. IA vs. Partner.",
    heroBlurb: "M1 (ROAS) domina en conversión pura, pero M3 (IA) tiene mayor tasa de apertura. M2 (Partner) solo funciona en marcas de branding.",
    kpis: [
      { label: "Lead Rate", value: "0.55%", note: "M1 (Winner)" },
      { label: "Open Rate", value: "42.1%", note: "M3 (Winner)" },
      { label: "WinShare", value: "44.5%", note: "M1 Global" },
    ],
    winNote: "Winner M1 (Performance)",
    accent: {
      a: "rgba(6, 182, 212, 0.25)", // Cyan
      b: "rgba(8, 145, 178, 0.20)",
      c: "rgba(34, 211, 238, 0.15)",
    },
    featured: true,
    content: {
      context: "Agencia buscando diferenciarse. Probamos ángulos de 'Somos tus socios', 'Tecnología IA' y 'Puro ROAS'.",
      winnerContent: "M1 (ROAS) ganó en la fase final del funnel. La IA (M3) atrae curiosos, pero el dinero busca retorno.",
      driverContent: "Seguridad Financiera. Los dueños de e-commerces están quemados de agencias 'partner'. Quieren números.",
      actionContent: "Usar ángulo IA para anuncios de tráfico frío (CTR alto) y ángulo ROAS para retargeting y landing (Conversión)."
    }
  },
  {
    slug: "ugc-creatividades-hooks",
    tag: "UGC / Creative",
    title: "UGC — 5 Estilos",
    subtitle: "Emocional vs. Educativo vs. TikTok.",
    heroBlurb: "Los perfiles 'Info-seekers' respondieron al educativo. Los impulsivos al formato TikTok. No hay un 'mejor UGC' universal, depende del segmento.",
    kpis: [
      { label: "Score", value: "99.9", note: "consistencia" },
      { label: "P10", value: "100", note: "max score" },
      { label: "Robustez", value: "Alta", note: "vs seeds" },
    ],
    winNote: "Depende del segmento",
    accent: {
      a: "rgba(217, 70, 239, 0.25)", // Fuchsia
      b: "rgba(192, 38, 211, 0.20)",
      c: "rgba(232, 121, 249, 0.15)",
    },
    featured: true,
    content: {
      context: "Marca de suplementos. Probamos 5 creadores con estilos distintos: desde 'profesor explicativo' hasta 'trends de baile'.",
      winnerContent: "El estilo Educativo ganó en el segmento de >35 años. El estilo TikTok ganó en <25 años.",
      driverContent: "Validación vs. Pertenencia. El público maduro necesita entender el mecanismo. El joven busca validación social rápida.",
      actionContent: "No mezclar creatividades. Segmentar campañas por edad en Meta Ads para servir el contenido correcto."
    }
  },
  {
    slug: "landing-optimization-18-vars",
    tag: "CRO / Web",
    title: "Landing Optimization",
    subtitle: "18 variantes de Hero + Subtítulo.",
    heroBlurb: "Social Proof funciona peor en móvil por distracción. Search Traffic responde mejor a benchmarks. La táctica gana a la creatividad aquí.",
    kpis: [
      { label: "WinShare", value: "31.1%", note: "baja diff" },
      { label: "Conversión", value: "0.47%", note: "media" },
      { label: "Rechazo", value: "35.4%", note: "fricción" },
    ],
    winNote: "Táctico (Móvil vs Desktop)",
    accent: {
      a: "rgba(20, 184, 166, 0.25)", // Teal
      b: "rgba(13, 148, 136, 0.20)",
      c: "rgba(45, 212, 191, 0.15)",
    },
    featured: true,
    content: {
      context: "Optimización masiva de un Hero Section. Probamos cambiar titular, imagen de fondo y posición del CTA.",
      winnerContent: "La variante minimalista (título + botón, sin imagen de fondo compleja) ganó en móvil por goleada.",
      driverContent: "Carga Cognitiva en Móvil. En pantallas pequeñas, el fondo complejo distraía de la acción principal.",
      actionContent: "Diseñar un Hero específico para móvil con fondo sólido y otro para desktop con la imagen de marca."
    }
  },
];