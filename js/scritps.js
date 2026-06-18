// ══════════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════════
const DATA = [
  {
    codigo:"IM-SO-23", fecha:"2026-02-04", mina:"Bonanza",
    peso_tolva:33.3, ley_cabeza:2.9004, peso_retenido:13.02,
    peso_ingresa_equipo:20.28, peso_rechazo:16.92,
    peso_rechazo_veta:14.84, ley_rv:3.57,
    peso_rechazo_caja:2.8, ley_rc:0.25,
    peso_selectado:3.36, peso_selectado_veta:2.84, ley_sv:1.77,
    peso_selectado_caja:0.52, ley_sc:0.22,
    peso_veta_total:17.68, peso_caja_total:3.32,
    reduccion_masa_excel:16.568, rel_veta_post:87.707, rel_caja_post:16.548,
    ley_rechazo_calc:3.1725, ley_selectado_calc:1.5301,
    recuperacion_au_rechazo:0.9123, recuperacion_au_selectado:0.0877,
    modelo:"ONE_CLASS", confianza:0.5, num_pasadas:2
  },
  {
    codigo:"IM-SO-24", fecha:"2026-02-10", mina:"Bonanza",
    peso_tolva:62.9, ley_cabeza:2.8922, peso_retenido:5.5,
    peso_ingresa_equipo:57.4, peso_rechazo:29.46,
    peso_rechazo_veta:12.95, ley_rv:11.37,
    peso_rechazo_caja:12.16, ley_rc:0.07,
    peso_selectado:27.94, peso_selectado_veta:3.78, ley_sv:3.59,
    peso_selectado_caja:20.7, ley_sc:0.21,
    peso_veta_total:16.73, peso_caja_total:32.86,
    reduccion_masa_excel:48.676, rel_veta_post:43.958, rel_caja_post:41.276,
    ley_rechazo_calc:5.0269, ley_selectado_calc:0.6413,
    recuperacion_au_rechazo:0.8921, recuperacion_au_selectado:0.1079,
    modelo:"ONE_CLASS", confianza:0.5, num_pasadas:2
  },
  {
    codigo:"IM-SO-25", fecha:"2026-02-12", mina:"Bonanza",
    peso_tolva:96.18, ley_cabeza:2.2078, peso_retenido:18.48,
    peso_ingresa_equipo:77.7, peso_rechazo:48.84,
    peso_rechazo_veta:38.12, ley_rv:4.2,
    peso_rechazo_caja:6.38, ley_rc:0.95,
    peso_selectado:28.86, peso_selectado_veta:6.3, ley_sv:0.62,
    peso_selectado_caja:18.42, ley_sc:0.08,
    peso_veta_total:44.42, peso_caja_total:24.8,
    reduccion_masa_excel:37.143, rel_veta_post:78.051, rel_caja_post:13.063,
    ley_rechazo_calc:3.4022, ley_selectado_calc:0.1864,
    recuperacion_au_rechazo:0.9686, recuperacion_au_selectado:0.0314,
    modelo:"ONE_CLASS", confianza:0.5, num_pasadas:2
  },
  {
    codigo:"IM-SO-27", fecha:"2026-02-26", mina:"Bonanza",
    peso_tolva:101, ley_cabeza:2.7578, peso_retenido:31.78,
    peso_ingresa_equipo:69.22, peso_rechazo:28.7,
    peso_rechazo_veta:19.08, ley_rv:7.52,
    peso_rechazo_caja:9.62, ley_rc:0.45,
    peso_selectado:40.52, peso_selectado_veta:11.12, ley_sv:3.24,
    peso_selectado_caja:29.4, ley_sc:0.24,
    peso_veta_total:30.2, peso_caja_total:39.02,
    reduccion_masa_excel:58.538, rel_veta_post:66.481, rel_caja_post:33.519,
    ley_rechazo_calc:5.1502, ley_selectado_calc:1.0633,
    recuperacion_au_rechazo:0.7747, recuperacion_au_selectado:0.2253,
    modelo:"BZA-V1-CH-0,43%", confianza:0.8, num_pasadas:1
  },
  {
    codigo:"IM-SO-28", fecha:"2026-03-05", mina:"Bonanza",
    peso_tolva:96.18, ley_cabeza:1.1731, peso_retenido:10.32,
    peso_ingresa_equipo:85.86, peso_rechazo:66,
    peso_rechazo_veta:21.92, ley_rv:3.87,
    peso_rechazo_caja:44.08, ley_rc:0.19,
    peso_selectado:19.86, peso_selectado_veta:2.54, ley_sv:0.71,
    peso_selectado_caja:17.32, ley_sc:0.33,
    peso_veta_total:24.46, peso_caja_total:61.4,
    reduccion_masa_excel:23.131, rel_veta_post:33.212, rel_caja_post:66.788,
    ley_rechazo_calc:1.4122, ley_selectado_calc:0.3786,
    recuperacion_au_rechazo:0.9273, recuperacion_au_selectado:0.0727,
    modelo:"BZA-V1-CH-0,43%", confianza:0.9, num_pasadas:2
  },
  {
    codigo:"IM-SO-29", fecha:"2026-03-17", mina:"Bonanza",
    peso_tolva:197.16, ley_cabeza:1.8473, peso_retenido:34.27,
    peso_ingresa_equipo:162.89, peso_rechazo:135.94,
    peso_rechazo_veta:54.96, ley_rv:4.49,
    peso_rechazo_caja:80.976, ley_rc:0.47,
    peso_selectado:26.95, peso_selectado_veta:1.85, ley_sv:2.18,
    peso_selectado_caja:25.08, ley_sc:0.48,
    peso_veta_total:56.81, peso_caja_total:106.056,
    reduccion_masa_excel:16.545, rel_veta_post:40.430, rel_caja_post:59.567,
    ley_rechazo_calc:2.0953, ley_selectado_calc:0.5963,
    recuperacion_au_rechazo:0.9465, recuperacion_au_selectado:0.0535,
    modelo:"BZA-V1-CH-0,43%", confianza:0.9, num_pasadas:2
  },
  {
    codigo:"IM-SO-31", fecha:"2026-05-15", mina:"Tenguel",
    peso_tolva:30, ley_cabeza:1.3956, peso_retenido:2.8,
    peso_ingresa_equipo:27.2, peso_rechazo:15.8,
    peso_rechazo_veta:6.86, ley_rv:3.96,
    peso_rechazo_caja:8.94, ley_rc:0.26,
    peso_selectado:11.4, peso_selectado_veta:2.38, ley_sv:2.99,
    peso_selectado_caja:9.02, ley_sc:0.15,
    peso_veta_total:9.24, peso_caja_total:17.96,
    reduccion_masa_excel:41.912, rel_veta_post:43.418, rel_caja_post:56.582,
    ley_rechazo_calc:1.8665, ley_selectado_calc:0.7429,
    recuperacion_au_rechazo:0.7769, recuperacion_au_selectado:0.2231,
    modelo:"TNGL-V1-GRN35-0,4%-HR-WR", confianza:0.93, num_pasadas:2
  },
  {
    codigo:"IM-SO-32", fecha:"2026-05-21", mina:"Tenguel",
    peso_tolva:83.46, ley_cabeza:0.8661, peso_retenido:14.68,
    peso_ingresa_equipo:68.78, peso_rechazo:51.68,
    peso_rechazo_veta:32.44, ley_rv:1.6,
    peso_rechazo_caja:19.24, ley_rc:0.15,
    peso_selectado:17.1, peso_selectado_veta:6.52, ley_sv:0.59,
    peso_selectado_caja:10.58, ley_sc:0.09,
    peso_veta_total:38.96, peso_caja_total:29.82,
    reduccion_masa_excel:24.862, rel_veta_post:62.771, rel_caja_post:37.229,
    ley_rechazo_calc:1.06, ley_selectado_calc:0.28,
    recuperacion_au_rechazo:0.92, recuperacion_au_selectado:0.08,
    modelo:"TNGL-V1-GRN35-0,4%-HR-WR", confianza:0.93, num_pasadas:2
  }
];

// ══════════════════════════════════════════════════
// GLOBALS
// ══════════════════════════════════════════════════
window.charts = {};
const COLORES = {
  azul: '#1E3A5F', dorado: '#D4A843', gris: '#94A3B8',
  rojo: '#DC2626', verde: '#16A34A', amarillo: '#EAB308',
  azulClaro: '#3B82F6', violeta: '#7C3AED', cyan: '#06B6D4'
};
const MODEL_COLORS = {
  'ONE_CLASS': COLORES.azulClaro,
  'BZA-V1-CH-0,43%': COLORES.dorado,
  'TNGL-V1-GRN35-0,4%-HR-WR': COLORES.violeta
};
const MINA_COLORS = { 'Bonanza': COLORES.azul, 'Tenguel': COLORES.dorado };

// ══════════════════════════════════════════════════
// POPULATE MODELO FILTER
// ══════════════════════════════════════════════════
(function() {
  const sel = document.getElementById('filtroModelo');
  const modelos = [...new Set(DATA.map(d => d.modelo))];
  modelos.forEach(m => {
    const o = document.createElement('option');
    o.value = m; o.textContent = m; sel.appendChild(o);
  });
})();

// ══════════════════════════════════════════════════
// FILTERING
// ══════════════════════════════════════════════════
function getFiltered() {
  const mina = document.getElementById('filtroMina').value;
  const modelo = document.getElementById('filtroModelo').value;
  const desde = document.getElementById('filtroDesde').value;
  const hasta = document.getElementById('filtroHasta').value;
  return DATA.filter(d => {
    if (mina !== 'Todas' && d.mina !== mina) return false;
    if (modelo !== 'Todos' && d.modelo !== modelo) return false;
    if (desde && d.fecha < desde) return false;
    if (hasta && d.fecha > hasta) return false;
    return true;
  });
}

function limpiarFiltros() {
  document.getElementById('filtroMina').value = 'Todas';
  document.getElementById('filtroModelo').value = 'Todos';
  document.getElementById('filtroDesde').value = '';
  document.getElementById('filtroHasta').value = '';
  actualizar();
}

// ══════════════════════════════════════════════════
// HELPER FUNCTIONS
// ══════════════════════════════════════════════════
function safe(n, d) { return d === 0 || !isFinite(d) ? null : n / d; }
function fmt(v, dec=1) { return v === null || v === undefined || !isFinite(v) ? 'N/A' : v.toFixed(dec); }
function avg(arr) { const valid = arr.filter(v => v !== null && isFinite(v)); return valid.length ? valid.reduce((a,b)=>a+b,0)/valid.length : null; }

function semaforo(v, verde, amarillo, tipo) {
  if (v === null) return '';
  if (tipo === 'gte') return v >= verde ? 'verde' : v >= amarillo ? 'amarillo' : 'rojo';
  if (tipo === 'lte') return v <= verde ? 'verde' : v <= amarillo ? 'amarillo' : 'rojo';
  return '';
}

function destroyChart(id) {
  if (window.charts[id]) { window.charts[id].destroy(); delete window.charts[id]; }
}

function calcRatioEnriq(d) {
  const recupPeso = safe(d.peso_rechazo, d.peso_tolva);
  if (recupPeso === null || d.ley_cabeza === 0) return null;
  return safe(d.ley_rechazo_calc * 100, recupPeso * 100 * d.ley_cabeza);
}

// ══════════════════════════════════════════════════
// KPI DEFINITIONS
// ══════════════════════════════════════════════════
const KPI_DEFS = [
  {
    nombre: 'Recuperación Au en Rechazo',
    unidad: '%',
    calc: d => d.recuperacion_au_rechazo * 100,
    color: (v) => semaforo(v, 90, 75, 'gte'),
    formula: 'recuperacion_au_rechazo × 100'
  },
  {
    nombre: 'Pérdida Au en Selectado',
    unidad: '%',
    calc: d => d.recuperacion_au_selectado * 100,
    color: (v) => semaforo(v, 10, 25, 'lte'),
    formula: 'recuperacion_au_selectado × 100'
  },
  {
    nombre: 'Ratio de Enriquecimiento',
    unidad: 'x',
    calc: calcRatioEnriq,
    color: (v) => v === null ? '' : v >= 2 ? 'verde' : v >= 1.2 ? 'amarillo' : 'rojo',
    formula: 'Ley Rechazo / (Recup. Peso% × Ley Cabeza)'
  },
  {
    nombre: 'Eficiencia Captura Veta',
    unidad: '%',
    calc: d => { const den = d.peso_rechazo_veta + d.peso_selectado_veta; return safe(d.peso_rechazo_veta * 100, den); },
    color: (v) => semaforo(v, 85, 70, 'gte'),
    formula: 'Peso RV / (Peso RV + Peso SV) × 100'
  },
  {
    nombre: 'Eficiencia Descarte Caja',
    unidad: '%',
    calc: d => { const den = d.peso_rechazo_caja + d.peso_selectado_caja; return safe(d.peso_selectado_caja * 100, den); },
    color: (v) => semaforo(v, 70, 50, 'gte'),
    formula: 'Peso SC / (Peso RC + Peso SC) × 100'
  },
  {
    nombre: 'Reducción de Masa',
    unidad: '%',
    calc: d => d.reduccion_masa_excel,
    color: (v) => v === null ? '' : v >= 25 ? 'verde' : v >= 15 ? 'amarillo' : 'rojo',
    formula: 'Dato directo del Excel'
  },
  {
    nombre: 'Material Retenido',
    unidad: '%',
    calc: d => safe(d.peso_retenido * 100, d.peso_tolva),
    color: (v) => semaforo(v, 15, 25, 'lte'),
    formula: 'Peso Retenido / Peso Tolva × 100'
  },
  {
    nombre: 'Contaminación Rechazo',
    unidad: '%',
    calc: d => safe(d.peso_rechazo_caja * 100, d.peso_rechazo),
    color: (v) => semaforo(v, 20, 40, 'lte'),
    formula: 'Peso RC / Peso Rechazo × 100'
  },
  {
    nombre: 'Dilución Selectado',
    unidad: '%',
    calc: d => safe(d.peso_selectado_veta * 100, d.peso_selectado),
    color: (v) => semaforo(v, 10, 25, 'lte'),
    formula: 'Peso SV / Peso Selectado × 100'
  }
];

// ══════════════════════════════════════════════════
// RENDER KPIs
// ══════════════════════════════════════════════════
function renderKPIs(data) {
  const grid = document.getElementById('kpiGrid');
  grid.innerHTML = '';
  KPI_DEFS.forEach(kpi => {
    const vals = data.map(d => kpi.calc(d));
    const promedio = avg(vals);
    const colorClass = kpi.color(promedio);

    let trendHtml = '';
    if (data.length >= 2) {
      const last = vals[vals.length - 1];
      const prev = vals[vals.length - 2];
      if (last !== null && prev !== null) {
        const diff = last - prev;
        const arrow = diff >= 0 ? '▲' : '▼';
        const cls = diff >= 0 ? 'up' : 'down';
        trendHtml = `<span class="kpi-trend ${cls}">${arrow} ${Math.abs(diff).toFixed(1)}</span>`;
      }
    }

    const card = document.createElement('div');
    card.className = `kpi-card ${colorClass}`;
    card.innerHTML = `
      <div class="kpi-nombre">${kpi.nombre}</div>
      <div class="kpi-valor-row">
        <span class="kpi-valor">${fmt(promedio, 2)}${promedio !== null && isFinite(promedio) ? (kpi.unidad === 'x' ? 'x' : '%') : ''}</span>
        ${trendHtml}
      </div>
      <div class="kpi-formula">${kpi.formula}</div>
    `;
    grid.appendChild(card);
  });
}

// ══════════════════════════════════════════════════
// CHARTS
// ══════════════════════════════════════════════════
const CHART_DEFAULTS = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: { labels: { font: { family: 'DM Sans', size: 11 }, padding: 12, usePointStyle: true, pointStyleWidth: 10 } },
    tooltip: { titleFont: { family: 'DM Sans' }, bodyFont: { family: 'DM Sans' }, cornerRadius: 8, padding: 10 }
  },
  scales: {
    x: { ticks: { font: { family: 'DM Sans', size: 10 } }, grid: { color: '#F1F5F9' } },
    y: { ticks: { font: { family: 'DM Sans', size: 10 } }, grid: { color: '#F1F5F9' } }
  }
};

function renderCharts(data) {
  if (!data.length) {
    ['chart1','chart2','chart3','chart4','chart5','chart6','chart7','chart8'].forEach(id => {
      destroyChart(id);
      const ctx = document.getElementById(id).getContext('2d');
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    });
    return;
  }

  // 1 — Recuperación Au vs Tiempo
  destroyChart('chart1');
  window.charts.chart1 = new Chart(document.getElementById('chart1'), {
    type: 'line',
    data: {
      labels: data.map(d => d.codigo),
      datasets: [{
        label: 'Recuperación Au (%)',
        data: data.map(d => d.recuperacion_au_rechazo * 100),
        borderColor: COLORES.azul,
        backgroundColor: data.map(d => MINA_COLORS[d.mina] || COLORES.gris),
        pointBackgroundColor: data.map(d => MINA_COLORS[d.mina] || COLORES.gris),
        pointRadius: 7,
        pointHoverRadius: 9,
        borderWidth: 2.5,
        tension: 0.3,
        fill: false
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: {
        ...CHART_DEFAULTS.plugins,
        annotation: {
          annotations: {
            meta90: {
              type: 'line', yMin: 90, yMax: 90,
              borderColor: COLORES.rojo, borderWidth: 2, borderDash: [8, 4],
              label: { content: 'Meta 90%', display: true, position: 'start', font: { family: 'DM Sans', size: 10 }, color: COLORES.rojo, backgroundColor: 'rgba(255,255,255,0.85)', padding: 4 }
            }
          }
        }
      },
      scales: {
        ...CHART_DEFAULTS.scales,
        y: { ...CHART_DEFAULTS.scales.y, title: { display: true, text: 'Recuperación (%)', font: { family: 'DM Sans', size: 11 } }, suggestedMin: 60, suggestedMax: 100 }
      }
    }
  });

  // 2 — Ley Rechazo vs Selectado vs Cabeza
  destroyChart('chart2');
  window.charts.chart2 = new Chart(document.getElementById('chart2'), {
    type: 'bar',
    data: {
      labels: data.map(d => d.codigo),
      datasets: [
        { label: 'Ley Cabeza', data: data.map(d => d.ley_cabeza), backgroundColor: COLORES.gris, borderRadius: 4 },
        { label: 'Ley Rechazo', data: data.map(d => d.ley_rechazo_calc), backgroundColor: COLORES.azul, borderRadius: 4 },
        { label: 'Ley Selectado', data: data.map(d => d.ley_selectado_calc), backgroundColor: COLORES.dorado, borderRadius: 4 }
      ]
    },
    options: {
      ...CHART_DEFAULTS,
      scales: {
        ...CHART_DEFAULTS.scales,
        y: { ...CHART_DEFAULTS.scales.y, title: { display: true, text: 'Ley (gr/ton)', font: { family: 'DM Sans', size: 11 } } }
      }
    }
  });

  // 3 — % Material Retenido
  destroyChart('chart3');
  const retenidoPct = data.map(d => safe(d.peso_retenido * 100, d.peso_tolva));
  const retenidoColors = retenidoPct.map(v => v === null ? COLORES.gris : v < 15 ? COLORES.verde : v <= 25 ? COLORES.amarillo : COLORES.rojo);
  window.charts.chart3 = new Chart(document.getElementById('chart3'), {
    type: 'bar',
    data: {
      labels: data.map(d => d.codigo),
      datasets: [{
        label: '% Retenido',
        data: retenidoPct,
        backgroundColor: retenidoColors,
        borderRadius: 6
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: {
        ...CHART_DEFAULTS.plugins,
        annotation: {
          annotations: {
            l15: { type: 'line', yMin: 15, yMax: 15, borderColor: COLORES.verde, borderWidth: 1.5, borderDash: [6, 3] },
            l25: { type: 'line', yMin: 25, yMax: 25, borderColor: COLORES.rojo, borderWidth: 1.5, borderDash: [6, 3] }
          }
        }
      },
      scales: {
        ...CHART_DEFAULTS.scales,
        y: { ...CHART_DEFAULTS.scales.y, title: { display: true, text: 'Retenido (%)', font: { family: 'DM Sans', size: 11 } } }
      }
    }
  });

  // 4 — Recuperación por Modelo (horizontal bar)
  destroyChart('chart4');
  const modelMap = {};
  data.forEach(d => {
    if (!modelMap[d.modelo]) modelMap[d.modelo] = [];
    modelMap[d.modelo].push(d.recuperacion_au_rechazo * 100);
  });
  const modelos = Object.keys(modelMap);
  const modelAvgs = modelos.map(m => avg(modelMap[m]));
  window.charts.chart4 = new Chart(document.getElementById('chart4'), {
    type: 'bar',
    data: {
      labels: modelos,
      datasets: [{
        label: 'Recuperación Au Promedio (%)',
        data: modelAvgs,
        backgroundColor: modelos.map(m => MODEL_COLORS[m] || COLORES.gris),
        borderRadius: 6
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      indexAxis: 'y',
      scales: {
        x: { ...CHART_DEFAULTS.scales.x, title: { display: true, text: '%', font: { family: 'DM Sans', size: 11 } }, suggestedMax: 100 },
        y: { ...CHART_DEFAULTS.scales.y, ticks: { font: { family: 'DM Sans', size: 9 } } }
      }
    }
  });

  // 5 — Scatter: Recuperación vs Reducción de Masa
  destroyChart('chart5');
  const scatterDS = {};
  data.forEach(d => {
    if (!scatterDS[d.modelo]) scatterDS[d.modelo] = [];
    scatterDS[d.modelo].push({ x: d.reduccion_masa_excel, y: d.recuperacion_au_rechazo * 100 });
  });
  window.charts.chart5 = new Chart(document.getElementById('chart5'), {
    type: 'scatter',
    data: {
      datasets: Object.keys(scatterDS).map(m => ({
        label: m,
        data: scatterDS[m],
        backgroundColor: MODEL_COLORS[m] || COLORES.gris,
        pointRadius: 8,
        pointHoverRadius: 11
      }))
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: {
        ...CHART_DEFAULTS.plugins,
        annotation: {
          annotations: {
            yLine: { type: 'line', yMin: 90, yMax: 90, borderColor: COLORES.rojo, borderWidth: 1.5, borderDash: [6, 3],
              label: { content: '90% Recup.', display: true, position: 'end', font: { family: 'DM Sans', size: 9 }, backgroundColor: 'rgba(255,255,255,0.85)', color: COLORES.rojo, padding: 3 }
            },
            xLine: { type: 'line', xMin: 30, xMax: 30, borderColor: COLORES.azul, borderWidth: 1.5, borderDash: [6, 3],
              label: { content: '30% Reduc.', display: true, position: 'start', font: { family: 'DM Sans', size: 9 }, backgroundColor: 'rgba(255,255,255,0.85)', color: COLORES.azul, padding: 3 }
            }
          }
        }
      },
      scales: {
        x: { ...CHART_DEFAULTS.scales.x, title: { display: true, text: 'Reducción de Masa (%)', font: { family: 'DM Sans', size: 11 } } },
        y: { ...CHART_DEFAULTS.scales.y, title: { display: true, text: 'Recuperación Au (%)', font: { family: 'DM Sans', size: 11 } }, suggestedMin: 60, suggestedMax: 100 }
      }
    }
  });

  // 6 — Composición Rechazo y Selectado (Stacked Bar)
  destroyChart('chart6');
  const labels6 = [];
  const vetaR = [], cajaR = [], vetaS = [], cajaS = [];
  data.forEach(d => {
    labels6.push(d.codigo + ' (R)', d.codigo + ' (S)');
    const rTotal = d.peso_rechazo || 1;
    const sTotal = d.peso_selectado || 1;
    vetaR.push(d.peso_rechazo_veta / rTotal * 100);
    cajaR.push(d.peso_rechazo_caja / rTotal * 100);
    vetaS.push(d.peso_selectado_veta / sTotal * 100);
    cajaS.push(d.peso_selectado_caja / sTotal * 100);
  });
  const composData = [];
  const composVeta = [], composCaja = [];
  data.forEach((d, i) => {
    composVeta.push(vetaR[i], vetaS[i]);
    composCaja.push(cajaR[i], cajaS[i]);
  });
  window.charts.chart6 = new Chart(document.getElementById('chart6'), {
    type: 'bar',
    data: {
      labels: labels6,
      datasets: [
        { label: 'Veta (%)', data: composVeta, backgroundColor: COLORES.azul, borderRadius: 2 },
        { label: 'Caja (%)', data: composCaja, backgroundColor: COLORES.dorado, borderRadius: 2 }
      ]
    },
    options: {
      ...CHART_DEFAULTS,
      scales: {
        x: { ...CHART_DEFAULTS.scales.x, stacked: true, ticks: { font: { family: 'DM Sans', size: 8 }, maxRotation: 45 } },
        y: { ...CHART_DEFAULTS.scales.y, stacked: true, max: 100, title: { display: true, text: 'Proporción (%)', font: { family: 'DM Sans', size: 11 } } }
      }
    }
  });

  // 7 — Waterfall Balance de Masas (última prueba)
  destroyChart('chart7');
  const last = data[data.length - 1];
  const wLabels = ['Peso Tolva', 'Retenido', 'Rechazo Veta', 'Rechazo Caja', 'Selectado Veta', 'Selectado Caja'];
  const wVals = [last.peso_tolva, last.peso_retenido, last.peso_rechazo_veta, last.peso_rechazo_caja, last.peso_selectado_veta, last.peso_selectado_caja];
  const wColors = ['#334155', COLORES.gris, COLORES.azul, COLORES.dorado, '#60A5FA', '#FBBF24'];
  // Waterfall: first bar full, rest are segments
  const wBase = [0, 0, 0, 0, 0, 0]; // all start from 0 for simplicity — show absolute values
  window.charts.chart7 = new Chart(document.getElementById('chart7'), {
    type: 'bar',
    data: {
      labels: wLabels,
      datasets: [{
        label: 'Peso (Kg)',
        data: wVals,
        backgroundColor: wColors,
        borderRadius: 6
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: {
        ...CHART_DEFAULTS.plugins,
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            afterLabel: function(ctx) {
              return 'Prueba: ' + last.codigo + ' (' + last.mina + ')';
            }
          }
        }
      },
      scales: {
        ...CHART_DEFAULTS.scales,
        y: { ...CHART_DEFAULTS.scales.y, title: { display: true, text: 'Peso (Kg)', font: { family: 'DM Sans', size: 11 } } }
      }
    }
  });

  // 8 — Ratio de Enriquecimiento por Prueba
  destroyChart('chart8');
  const ratios = data.map(d => calcRatioEnriq(d));
  window.charts.chart8 = new Chart(document.getElementById('chart8'), {
    type: 'bar',
    data: {
      labels: data.map(d => d.codigo),
      datasets: [{
        label: 'Ratio de Enriquecimiento',
        data: ratios,
        backgroundColor: ratios.map(v => v === null ? COLORES.gris : v >= 2 ? COLORES.verde : v >= 1.2 ? COLORES.amarillo : COLORES.rojo),
        borderRadius: 6
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: {
        ...CHART_DEFAULTS.plugins,
        tooltip: {
          ...CHART_DEFAULTS.plugins.tooltip,
          callbacks: {
            afterLabel: function(ctx) {
              const d = data[ctx.dataIndex];
              const rp = safe(d.peso_rechazo, d.peso_tolva);
              return [
                'Ley Rechazo: ' + fmt(d.ley_rechazo_calc, 3) + ' gr/ton',
                'Ley Cabeza: ' + fmt(d.ley_cabeza, 3) + ' gr/ton',
                'Recup. Peso: ' + fmt(rp !== null ? rp * 100 : null, 1) + '%'
              ];
            }
          }
        },
        annotation: {
          annotations: {
            ref1: { type: 'line', yMin: 1, yMax: 1, borderColor: COLORES.gris, borderWidth: 1, borderDash: [4, 4],
              label: { content: 'Sin enriquecimiento', display: true, position: 'start', font: { family: 'DM Sans', size: 9 }, backgroundColor: 'rgba(255,255,255,0.85)', color: COLORES.gris, padding: 3 }
            }
          }
        }
      },
      scales: {
        ...CHART_DEFAULTS.scales,
        y: { ...CHART_DEFAULTS.scales.y, title: { display: true, text: 'Ratio (x)', font: { family: 'DM Sans', size: 11 } }, suggestedMin: 0 }
      }
    }
  });
}

// ══════════════════════════════════════════════════
// MASTER UPDATE
// ══════════════════════════════════════════════════
function actualizar() {
  const data = getFiltered();
  renderKPIs(data);
  renderCharts(data);
}

// Event listeners
['filtroMina', 'filtroModelo', 'filtroDesde', 'filtroHasta'].forEach(id => {
  document.getElementById(id).addEventListener('change', actualizar);
});

// Initial render
actualizar();