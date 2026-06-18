Eres un ingeniero de datos especializado en procesamiento de minerales y balance metalúrgico. Tu tarea es construir un dashboard en un ÚNICO ARCHIVO HTML autónomo, en español, para evaluar el rendimiento de un equipo Ore Sorter que clasifica mineral aurífero.

## CONTEXTO OPERATIVO

El equipo Ore Sorter recibe material mixto (veta + caja) y lo separa en dos fracciones:
- **RECHAZO**: donde debe ir la VETA (mineral con oro). Rechazo = producto valioso.
- **SELECTADO**: donde debe ir la CAJA (estéril). Selectado = descarte.
- Una parte del material queda como **RETENIDO** (no procesable por granulometría u otros factores).

Cada fracción contiene subfracciones de veta y caja, con su peso y ley de oro (gr/ton).
Los datos provienen de dos minas: **Bonanza** y **Tenguel**.
Se han probado distintos modelos de IA del equipo: ONE_CLASS, BZA-V1-CH-0,43%, TNGL-V1-GRN35-0,4%-HR-WR.

## DATOS

Extrae los valores del archivo Excel adjunto. Las hojas son:
- **Hoja1** = Mina Bonanza
- **Hoja3** = Mina Tenguel

Embebe los datos como `const DATA = [...]` en JavaScript. Cada objeto debe contener estos campos:

| Campo | Descripción |
|-------|-------------|
| codigo | Código de prueba (ej: IM-SO-23) |
| fecha | Fecha "YYYY-MM-DD" |
| mina | "Bonanza" o "Tenguel" |
| peso_tolva | Peso que llega a la tolva [Kg] |
| ley_cabeza | Ley cabeza inicial calculada [gr/ton] |
| peso_retenido | Peso retenido [Kg] |
| peso_ingresa_equipo | Peso que ingresa al Ore Sorter [Kg] |
| peso_rechazo | Peso total rechazado [Kg] |
| peso_rechazo_veta | Peso de veta en rechazo [Kg] |
| ley_rv | Ley de veta rechazada [gr/ton] |
| peso_rechazo_caja | Peso de caja en rechazo [Kg] |
| ley_rc | Ley de caja rechazada [gr/ton] |
| peso_selectado | Peso total selectado [Kg] |
| peso_selectado_veta | Peso de veta en selectado [Kg] |
| ley_sv | Ley de veta selectada [gr/ton] |
| peso_selectado_caja | Peso de caja en selectado [Kg] |
| ley_sc | Ley de caja selectada [gr/ton] |
| peso_veta_total | Peso total de veta [Kg] |
| peso_caja_total | Peso total de caja [Kg] |
| reduccion_masa_excel | Reducción de masa del Excel [%] |
| rel_veta_post | Relación % veta post-proceso |
| rel_caja_post | Relación % caja post-proceso |
| ley_rechazo_calc | Ley post-proceso del rechazo [gr/ton] |
| ley_selectado_calc | Ley post-proceso del selectado [gr/ton] |
| recuperacion_au_rechazo | Recuperación Au en rechazo [decimal 0-1] |
| recuperacion_au_selectado | Recuperación Au en selectado [decimal 0-1] |
| modelo | Modelo de IA usado |
| confianza | Nivel de confianza del modelo |
| num_pasadas | Cantidad de pasadas |

## KPIs REQUERIDOS (9 tarjetas)

Mostrar en tarjetas numéricas en la parte superior. Cada tarjeta muestra: nombre, valor promedio filtrado, indicador de tendencia (▲/▼ comparando última vs penúltima prueba), y la fórmula usada en texto pequeño.

1. **Recuperación Au en Rechazo (%)** = `recuperacion_au_rechazo × 100`
   - Meta ≥ 90%. Verde ≥90%, amarillo 75-90%, rojo <75%.

2. **Pérdida Au en Selectado (%)** = `recuperacion_au_selectado × 100`
   - Verde ≤10%, amarillo 10-25%, rojo >25%.

3. **Ratio de Enriquecimiento** = `(ley_rechazo_calc × 100) / ((peso_rechazo / peso_tolva × 100) × ley_cabeza)`
   - CRÍTICO: usar esta fórmula exacta. NO usar ley_rechazo/ley_selectado.
   - Donde: Recuperación en peso % = (peso_rechazo / peso_tolva) × 100

4. **Eficiencia Captura Veta (%)** = `peso_rechazo_veta / (peso_rechazo_veta + peso_selectado_veta) × 100`

5. **Eficiencia Descarte Caja (%)** = `peso_selectado_caja / (peso_rechazo_caja + peso_selectado_caja) × 100`

6. **Reducción de Masa (%)** = usar `reduccion_masa_excel` directamente del Excel

7. **Material Retenido (%)** = `peso_retenido / peso_tolva × 100`

8. **Índice Contaminación Rechazo (%)** = `peso_rechazo_caja / peso_rechazo × 100`

9. **Índice Dilución Selectado (%)** = `peso_selectado_veta / peso_selectado × 100`

## GRÁFICOS REQUERIDOS (8 gráficos con Chart.js)

Grid de 2 columnas en desktop, 1 en mobile. Todos respetan filtros y se destruyen/recrean al cambiar filtros.

1. **Recuperación Au vs Tiempo** (Line): eje X = código prueba, Y = recuperación %. Línea meta roja punteada en 90%. Puntos coloreados por mina.

2. **Ley Rechazo vs Ley Selectado vs Ley Cabeza** (Bar agrupado): tres barras por prueba. Incluir ley_cabeza como referencia.

3. **% Material Retenido vs Tiempo** (Bar): semáforo verde <15%, amarillo 15-25%, rojo >25%.

4. **Recuperación por Modelo** (Bar horizontal): promedio por modelo.

5. **Recuperación Au vs Reducción de Masa** (Scatter): X = reducción masa %, Y = recuperación %. Color por modelo. Líneas de referencia en 90% (Y) y 30% (X).

6. **Composición Rechazo y Selectado** (Stacked Bar): dos barras por prueba (R y S), proporción veta vs caja.

7. **Balance de Masas Waterfall** (última prueba): Peso Tolva → Retenido → Rechazo Veta → Rechazo Caja → Selectado Veta → Selectado Caja.

8. **Ratio de Enriquecimiento por Prueba** (Bar): usando la fórmula corregida. Tooltip debe mostrar los componentes (Ley Conc, Ley Cab, Recup. Peso).

## FILTROS

Barra fija con:
- Mina: "Todas", "Bonanza", "Tenguel"
- Modelo: "Todos" + cada modelo único
- Desde / Hasta: inputs date
- Botón "Limpiar Filtros"

Cada cambio recalcula KPIs y redibuja gráficos inmediatamente.

## ESTILO VISUAL

- Tema claro corporativo. Fondo: #F1F5F9. Cards: #FFFFFF, border-radius: 12px, box-shadow sutil.
- Fuentes Google: "DM Sans" (cuerpo) y "Plus Jakarta Sans" (títulos).
- Header con degradado azul marino.
- Paleta: Azul marino #1E3A5F (veta/rechazo), Dorado #D4A843 (caja/selectado), Gris #94A3B8 (retenido), Rojo #DC2626 (alertas), Verde #16A34A (positivos), Amarillo #EAB308 (intermedios).
- KPIs: grid 3 columnas desktop, 2 tablet, 1 mobile. Borde izquierdo de 4px con color semáforo.
- Responsive con CSS Grid + media queries. Sin frameworks CSS.
- Al imprimir: ocultar filtros, todo en 1 columna.
- Idioma: TODO en español.

## REQUISITOS TÉCNICOS

1. **UN SOLO ARCHIVO .html**. CSS en `<style>`, JS en `<script>`.
2. CDN: Chart.js 4.4.7 + chartjs-plugin-annotation 3.1.0 + Google Fonts.
3. NO usar React, npm, localStorage, frameworks CSS.
4. Gestión Canvas: `window.charts = {}`, destruir con `.destroy()` antes de recrear.
5. Datos embebidos como `const DATA = [...]`.
6. Protección contra división por cero (mostrar "N/A").
7. `<meta charset="UTF-8">`.
8. Guardar en `/mnt/user-data/outputs/dashboard_ore_sorter.html` y presentar con `present_files`.
