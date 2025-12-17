export const cases = [
  {
    "id": "toolspace",
    "tag": "SaaS B2B",
    "title": "ToolSpace — Test de mensaje",
    "subtitle": "3 variantes · 8.000 perfiles",
    "badge": "+21,8% conv.",
    "audience": "8.000 perfiles",
    "metrics": [
      { "label": "Clic en CTA", "value": "+36,7%", "note": "Variante C vs A/B" },
      { "label": "Rechazo", "value": "−7 pts", "note": "Menos fricción" },
      { "label": "Tiempo en página", "value": "+25,9%", "note": "Más exploración útil" }
    ],
    "decision": "Variante C prioritaria; optimiza fricción y aumenta intención.",
    "highlights": [
      "Ranking comparativo por intención/rechazo.",
      "Drivers y fricciones explicados por segmento.",
      "Entrega: informe + llamada de decisión."
    ],
    "oneLiner": "Prioriza mensajes antes de gastar en Ads."
  },
  {
    "id": "b2b-ads",
    "tag": "Agencia Ads B2B",
    "title": "Copy testing B2B Ads — 5 audiencias",
    "subtitle": "3 mensajes · 5 audiencias · 8.000 perfiles",
    "badge": "WinShare 57,4%",
    "audience": "8.000 perfiles",
    "metrics": [
      { "label": "Winner", "value": "M2 (proceso)", "note": "gana Expected/WinShare" },
      { "label": "ROI", "value": "66,77", "note": "estimado" },
      { "label": "eCPA", "value": "3,97€", "note": "estimado" }
    ],
    "decision": "M2 es el ganador consistente (Expected 38,44; WinShare 57,41%).",
    "highlights": [
      "Multi-audiencia: mide qué mensaje escala sin romper por segmento.",
      "3 ganadores: Signed (ruidoso) + Expected + WinShare.",
      "Recomendación: iterar M2 con prueba/credenciales para bajar eCPA."
    ],
    "oneLiner": "5 audiencias: qué copy escala y cuál se rompe."
  },
  {
    "id": "landing",
    "tag": "Landing",
    "title": "Landing optimization — calidad vs volumen",
    "subtitle": "8 landings · lead quality + bounce",
    "badge": "Leads buenos 5,23%",
    "audience": "8.000 perfiles",
    "metrics": [
      { "label": "Leads buenos", "value": "5,23%", "note": "Top calidad" },
      { "label": "Leads", "value": "8,41%", "note": "volumen" },
      { "label": "Bounce", "value": "35,07%", "note": "más bajo" }
    ],
    "decision": "S1 (Pruebas claras) gana en calidad y bounce; baseline recomendado.",
    "highlights": [
      "Ranking por calidad (leads buenos) y por volumen (leads).",
      "Empates declarados cuando deltas ≤ epsilon.",
      "Acción: usar S1 y testear sólo 1 variable por iteración."
    ],
    "oneLiner": "Lead quality vs volumen: elige el baseline correcto."
  },
  {
    "id": "skincare",
    "tag": "Skincare e-commerce",
    "title": "Skincare — fricción emocional",
    "subtitle": "3 mensajes · compra + resistencia psicológica",
    "badge": "WinShare 90,0%",
    "audience": "8.000 perfiles",
    "metrics": [
      { "label": "Purchase rate", "value": "0,45%", "note": "winner B" },
      { "label": "CAC", "value": "20,82€", "note": "estimado" },
      { "label": "Rechazo", "value": "33,04%", "note": "↓" }
    ],
    "decision": "Mensaje B maximiza compra y reduce rechazo (WinShare compra 90%).",
    "highlights": [
      "Drivers por segmento para explicar por qué gana B.",
      "Comparativa multi-seed para robustez cuando aplica.",
      "Acción: escalar B y iterar sobre prueba social/ingredientes."
    ],
    "oneLiner": "Compra vs rechazo: el mensaje que reduce fricción."
  },
  {
    "id": "saas-roles",
    "tag": "SaaS",
    "title": "SaaS — 3 roles, 4 audiencias",
    "subtitle": "2 mensajes · leads + eCPA · 8.000 perfiles",
    "badge": "Leads 1.260",
    "audience": "8.000 perfiles",
    "metrics": [
      { "label": "Leads", "value": "1.260", "note": "mensaje A" },
      { "label": "WinShare", "value": "48,22%", "note": "A" },
      { "label": "eCPA", "value": "3,21€", "note": "A" }
    ],
    "decision": "Mensaje A gana en volumen y eficiencia; B sólo conviene en segmentos específicos.",
    "highlights": [
      "Segmentación por rol (CEO/PM/Marketing) y fricciones.",
      "Resultado agregado + lecturas por audiencia.",
      "Acción: usar A como default, B como variante para early adopters."
    ],
    "oneLiner": "3 roles: un ganador global y excepciones por segmento."
  },
  {
    "id": "precio",
    "tag": "Price sensitivity",
    "title": "Sensibilidad al precio — 3 puntos",
    "subtitle": "P19 vs P49 vs P99 · volumen vs revenue",
    "badge": "P19 share 89,18%",
    "audience": "8.000 perfiles",
    "metrics": [
      { "label": "P19 share", "value": "89,18%", "note": "adopción" },
      { "label": "P49 revenue", "value": "18.040€", "note": "máximo" },
      { "label": "P99 share", "value": "0,40%", "note": "residual" }
    ],
    "decision": "Volumen: P19. Revenue: P49 (a costa de conversión).",
    "highlights": [
      "Depende del objetivo (volumen vs margen).",
      "Segmentos con distinta elasticidad.",
      "Acción: P49 + ancla P19 (plan de entrada) para capturar ambos."
    ],
    "oneLiner": "Volumen (P19) vs revenue (P49): elasticidad real."
  },
  {
    "id": "ugc",
    "tag": "UGC / Creatividades",
    "title": "UGC e-commerce — 5 creatividades",
    "subtitle": "C1–C5 · intención de click/compra",
    "badge": "C5 winshare 40,96%",
    "audience": "8.000 perfiles",
    "metrics": [
      { "label": "Click pref", "value": "39,91%", "note": "C5" },
      { "label": "Purchase pref", "value": "40,96%", "note": "C5" },
      { "label": "Purchase intent", "value": "4,12/10", "note": "C5" }
    ],
    "decision": "C5 gana en clic y compra; robusto al seed.",
    "highlights": [
      "Drivers de por qué C5 vence (gancho vs objeción).",
      "Comparativa seed para robustez.",
      "Acción: producir más variaciones tipo C5 y testear 1 objeción por pieza."
    ],
    "oneLiner": "5 creatividades: ganador robusto al seed."
  },
  {
    "id": "elite-pt",
    "tag": "Caso extremo",
    "title": "Elite PT — cliente difícil (poca info)",
    "subtitle": "3 mensajes · 2 segmentos · 2.000 perfiles",
    "badge": "Purchase pref 50,9%",
    "audience": "2.000 perfiles",
    "metrics": [
      { "label": "Click pref", "value": "39,1%", "note": "M1" },
      { "label": "Purchase pref", "value": "50,9%", "note": "M3" },
      { "label": "Segmento A", "value": "M3 55,3%", "note": "purchase" }
    ],
    "decision": "M1 abre (clic); M3 cierra (compra). Secuencia recomendada: M1 → M3.",
    "highlights": [
      "Perfiles desde cero con reglas de coherencia.",
      "Lectura por segmento para evitar promedios engañosos.",
      "Acción: usar M1 para adquisición y M3 para retarget/follow-up."
    ],
    "oneLiner": "Caso extremo: poca info, perfiles desde cero."
  },
  {
    "id": "agencia-ecom",
    "tag": "Agencia marketing",
    "title": "Agencia eCommerce — outbound",
    "subtitle": "3 ángulos · open/CTR/leads",
    "badge": "Lead rate 0,55%",
    "audience": "8.000 perfiles",
    "metrics": [
      { "label": "Lead rate", "value": "0,55%", "note": "M1_ROAS" },
      { "label": "WinShare", "value": "44,54%", "note": "M1_ROAS" },
      { "label": "Open rate", "value": "42,08%", "note": "M3_IA" }
    ],
    "decision": "M1 gana en leads; M3 sirve para apertura/awareness y testing de early adopters.",
    "highlights": [
      "Open ≠ conversión: decide por WinShare/leads.",
      "Segmentos creativos reaccionan a ángulos específicos.",
      "Acción: outbound principal M1 + M3 como alternativa de entrada."
    ],
    "oneLiner": "Open ≠ lead: decisiones por WinShare."
  }
];

export const heroCases = ["toolspace", "b2b-ads", "skincare"]
  .map((id) => cases.find((c) => c.id === id))
  .filter(Boolean);

export const featuredCases = ["b2b-ads", "landing", "skincare"]
  .map((id) => cases.find((c) => c.id === id))
  .filter(Boolean);
