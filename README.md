# rosa_metodo
COmponente proyecto Rosa, para entrega final Poli


# Rosa_Metodo

Este es un proyecto de ejemplo para la configuración de un proyecto frontend usando Astro, React, TypeScript y Tailwind CSS.

## Requisitos

- Node.js (v14 o superior)
- npm o yarn

## Explicacion modelo ROSA

Elementos Evaluados

	1.	Silla de Trabajo (Tabla A):
	•	Altura del Asiento (A1):
    •	Postura neutra: pies apoyados y rodillas a 90° → Puntuación: 1.
    •	Desviaciones: rodillas > 90° (asiento alto) o < 90° (asiento bajo) → Puntuación: 2.
    •	Adicionales: altura no regulable, pies no tocan el suelo → +1 cada uno.
	•	Profundidad del Asiento (A2):
    •	Postura neutra: espacio de 8 cm entre el borde de la silla y la rodilla → Puntuación: 1.
    •	Desviaciones: espacio < 8 cm o > 8 cm → Puntuación: 2.
    •	Adicional: profundidad no regulable → +1.
	•	Reposabrazos (A3):
    •	Postura neutra: codos a 90° y hombros relajados → Puntuación: 1.
    •	Desviaciones: codos altos (hombros encogidos) o bajos → Puntuación: 2.
    •	Adicionales: reposabrazos no regulables, bordes afilados → +1 cada uno.
	•	Respaldo (A4):
    •	Postura neutra: inclinación entre 95° y 110°, con apoyo lumbar → Puntuación: 1.
    •	Desviaciones: inclinación > 110° o < 95°, sin apoyo lumbar → Puntuación: 2.
    •	Adicionales: respaldo no regulable → +1.
Total Silla (Tabla A):
Se calcula sumando las puntuaciones de los 4 aspectos, ajustadas por el tiempo de uso diario:
	•	Más de 4 horas → +1 adicional.
	2.	Teléfono y Pantalla (Tabla B):
	•	Teléfono (B1):
    •	Postura neutra: cuello recto, uso de manos libres → Puntuación: 1.
    •	Desviaciones: teléfono alejado > 30 cm → Puntuación: 2.
    •	Adicionales: sin opción de manos libres → +1.
	•	Pantalla (B2):
    •	Postura neutra: distancia de 40-75 cm, al nivel de los ojos → Puntuación: 1.
    •	Desviaciones: pantalla alta (extensión de cuello), baja (flexión de cuello), o distancia > 75 cm → Puntuación: 2-3.
    •	Adicionales: reflejos, falta de portadocumentos → +1 cada uno.
Total Teléfono y Pantalla (Tabla B):
La puntuación final combina los valores de B1 (columna) y B2 (fila) usando la Tabla B.
	3.	Ratón y Teclado (Tabla C):
	•	Ratón (C1):
    •	Postura neutra: alineado con el hombro → Puntuación: 1.
    •	Desviaciones: ratón desalineado, pequeño → Puntuación: 2.
    •	Adicionales: ratón y teclado en diferentes alturas → +1.
	•	Teclado (C2):
    •	Postura neutra: muñecas rectas, hombros relajados → Puntuación: 1.
    •	Desviaciones: extensión de muñecas > 15°, hombros elevados → Puntuación: 2.
    •	Adicionales: soporte de teclado no ajustable → +1.
Total Ratón y Teclado (Tabla C):
La puntuación final combina los valores de C1 (columna) y C2 (fila) usando la Tabla C.
	4.	Pantalla y Periféricos (Tabla D):
Combina las puntuaciones de la Tabla B (teléfono y pantalla) y Tabla C (ratón y teclado). La puntuación más alta representa el riesgo.
	5.	Puntuación Final (Tabla E):
	•	Combina la puntuación total de la silla (Tabla A) y la de periféricos (Tabla D).
	•	Fórmula:  \text{Puntuación Final} = \max(\text{Tabla A}, \text{Tabla D}) .


Interpretación de los Resultados

	•	<5: Riesgo bajo → Monitoreo.
	•	>=5: Riesgo alto → Cambios inmediatos.


Ejemplo de Evaluación

	1.	Silla (Tabla A):
	•	Altura del asiento: Puntuación 2 (asiento alto) +1 (altura no regulable) = 3.
	•	Profundidad del asiento: Puntuación 1.
	•	Reposabrazos: Puntuación 2 (hombros encogidos) +1 (no regulables) = 3.
	•	Respaldo: Puntuación 2 (sin apoyo lumbar) +1 (no regulable) = 3.
	•	Total silla:  A = 6 + 1  (uso diario > 4 h) = 7.
	2.	Teléfono y Pantalla (Tabla B):
	•	Teléfono: Puntuación 1.
	•	Pantalla: Puntuación 3 (reflejos) +1 (sin portadocumentos) = 4.
	•	Total pantalla y teléfono:  B = 2 .
	3.	Ratón y Teclado (Tabla C):
	•	Ratón: Puntuación 2 (desalineado) +1 (presión) = 3.
	•	Teclado: Puntuación 1.
	•	Total ratón y teclado:  C = 3 .
	4.	Pantalla y Periféricos (Tabla D):
	•	Combina B (teléfono/pantalla) y C (ratón/teclado):  D = 4 .
	5.	Puntuación Final (Tabla E):
	•	Combina A (silla) y D (pantalla/periféricos):  \max(7, 4) = 7 .

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/tu_usuario/Rosa_Metodo.git
cd Rosa_Metodo/frontend

### Como funciona el metodo ROSA

