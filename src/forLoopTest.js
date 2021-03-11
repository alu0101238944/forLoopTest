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
const now = require('performance-now');
const START_PROGRAM = now();
const SIZE = 10000000;
const ITERATIONS = 10000;
const array = new Array(SIZE);

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
  
  console.log('En este experimento se han llevado a cabo las comparaciones,');
  console.log('en cuanto a tiempos de ejecución, de los 4 bucles for');
  console.log('en javascript. Se realizaron ' + ITERATIONS + ' iteraciones');
  console.log('considerando el recorrido en un vector de tamaño ' + SIZE);
  console.log('\nResultados del experimento:');
  console.log('==========================\n');
  console.log('[1] Tiempo para el for "clásico": ' + totalTimeC + ' ms\n');
  console.log('[2] Tiempo para el forEach: ' + totalTimeEach + ' ms\n');
  console.log('[3] Tiempo para el for-of: ' + totalTimeOf + ' ms\n');
  console.log('[4] Tiempo para el for-in: ' + totalTimeIn + ' ms\n');
  
  const TOTAL_TIME = now() - START_PROGRAM;
  console.log('Tiempo total de ejecución del programa: ' + TOTAL_TIME + ' ms');
};

forLoopTest();
