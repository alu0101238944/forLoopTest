# Estudio en la eficiencia de los bucles for en JS
## Universidad de La Laguna - Escuela Superior de Ingeniería y Tecnología
### Grado en Ingeniería Informática - Programación de Aplicaciones Interactivas
#### Jose Daniel Escánez Expósito (alu0101238944)

---

## Tipos de bucles estudiados

1. for clásico (estilo C)
2. forEach
3. for-of
4. for-in

El [código implementado]("./src/forLoopTest.js") para cada uno de ellos sería:

```js
/**
 * @desc A for (C-style) loop test
 * @return {number} The execution time
 */
const cTest = () => {
  const START_C = now();
  for (let i = 0; i < array.length; i++) {
    const iteration = array[i];
  }
  return now() - START_C;
};

/**
 * @desc A forEach loop test
 * @return {number} The execution time
 */
const eachTest = () => {
  const START_EACH = now();
  array.forEach((item) => { const iteration = item });
  return now() - START_EACH;
};

/**
 * @desc A forOf loop test
 * @return {number} The execution time
 */
const ofTest = () => {
  const START_OF = now();
  for (const item of array) {
    const iteration = item;
  }
  return now() - START_OF;
};

/**
 * @desc A forIn loop test
 * @return {number} The execution time
 */
const inTest = () => {
  const START_IN = now();
  for (const item in array) {
    const iteration = item;
  }
  return now() - START_IN;
};
```

Se trata de cuatro funciones que devuelven el tiempo de ejecución que tarda en
recorrerse el `array`.

Además, en el [código realizado]("./src/forLoopTest.js") se utiliza un bucle
que invoca a las funciones un número determinado de veces (`ITERATIONS`).
Cada vez que se llama a una función en concreto, incrementa el valor de un
contador para ese tipo de bucle for. Al realizar todas las iteraciones, se 
divide finalmente por esa constante `ITERATIONS`. Esto se hace para lograr 
mayor rigor en las medidas tomadas. Si se realizara el cómputo una única vez,
podría darnos algún valor fuera de lo normal, y lo tomaríamos como válido. Al
repetir estas observaciones un número suficiente de veces, nos aseguramos de la
fiabilidad del test.

---

## Resultados

Se ha comprobado la ejecución del programa en los entornos de **NodeJS**,
**Google Chrome** y **Microsoft Edge**. Para comprobar el primero:
está a disposición, el [código](./src/forLoopTest.js) utilizado, para
quien desee replicar el experimento. Además, se incluyen 2 [outputs](./outputs)
de ejecuciones del programa. Para comprobar los dos últimos, se puedeacceder
(previa conexión a la VPN de la ULL) a la web (<http://10.6.129.176:8083/>) donde
está funcionando el código y realizar las ejecuciones pertinentes en los navegadores
que correspondan.

|                | for clásico | forEach | for-of | for-in |
|---------------:|-------------|---------|--------|--------|
| NodeJS         | 5.2         | 16.05   | 8.26   | 21.03  |
| Google Chrome  | 2.58        | 15.78   | 7.86   | 10.55  |
| Microsoft Edge | 2.58        | 16.96   | 7.96   | 10.98  |

---

## Conclusiones

Como podemos comprobar, el **for clásico** cuenta con un
**notable rendimiento superior** a los demás, para todos los entornos.
Aún así, en navegadores se duplica la eficiencia, comparado con NodeJS. 
El **for-of** se defiende en **segundo lugar** de manera uniforme, con tiempos
de ejecución muy parecidos. Sin embargo, podemos apreciar una
**mejoría del for-in** en los **navegadores respecto a NodeJS** de más del
**100%**. Eso hace que este se convierta en el peor bucle para NodeJS. En cuanto
al forEach, podemos observar tiempos de ejecución parecidos entre sí, significando
los peores resultados de los navegadores.

Definitivamente, se concluye con rotundidad en el mejor rendimiento del
**for clásico** en los navegadores por encima de cualquier otro bucle
for en cualquier entorno.
