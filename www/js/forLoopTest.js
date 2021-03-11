/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author J. Daniel Escánez
 * @date 11 Mar 2020
 * @desc A program that evaluates the different types of 'for loops' in JS
 *
 * @see https://github.com/alu0101238944/forLoopTest
 */

'use strict';
// const now = require("performance-now");
const START_PROGRAM = performance.now();
const SIZE = 10000000;
const ITERATIONS = 100;
const array = new Array(SIZE);

/**
* @desc A classic for loop test
* @return {number} The execution time
*/
const cTest = () => {
  const START_C = performance.now();
  for (let i = 0; i < array.length; i++) {
    const iteration = array[i];
  }
  return performance.now() - START_C;
};

/**
* @desc A forEach loop test
* @return {number} The execution time
*/
const eachTest = () => {
  const START_EACH = performance.now();
  array.forEach((item) => { const iteration = item });
  return performance.now() - START_EACH;
};

/**
* @desc A forOf loop test
* @return {number} The execution time
*/
const ofTest = () => {
  const START_OF = performance.now();
  for (const item of array) {
    const iteration = item;
  }
  return performance.now() - START_OF;
};

/**
* @desc A forIn loop test
* @return {number} The execution time
*/
const inTest = () => {
  const START_IN = performance.now();
  for (const item in array) {
    const iteration = item;
  }
  return performance.now() - START_IN;
};

/**
* @desc A experiment that evaluates the different tests to draw conclusions
*     about the different types of 'for loops' in JS
*/
const forLoopTest = () => {
  let totalTimeC = 0;
  let totalTimeEach = 0;
  let totalTimeOf = 0;
  let totalTimeIn = 0;
  
  console.log('\n[&] Comienza el experimento\n');
  for (let tests = 0; tests < ITERATIONS; tests++) {
    totalTimeC += cTest();
    totalTimeEach += eachTest();
    totalTimeOf += ofTest();
    totalTimeIn += inTest();
  }
  
  totalTimeC /= ITERATIONS;
  totalTimeEach /= ITERATIONS;
  totalTimeOf /= ITERATIONS;
  totalTimeIn /= ITERATIONS;
  console.log('[*] Emperimento realizado\n');
  
  alert(`Resultados (${ITERATIONS} iteraciones, tamaño del vector ${SIZE}):
        [1] Tiempo para el for 'clásico': ${totalTimeC} ms
        [2] Tiempo para el forEach: ${totalTimeEach} ms
        [3] Tiempo para el for-of: ${totalTimeOf} ms
        [4] Tiempo para el for-in: ${totalTimeIn} ms`);
  
  const TOTAL_TIME = performance.now() - START_PROGRAM;
  console.log('Tiempo total de ejecución del programa: ' + TOTAL_TIME + ' ms');
};
