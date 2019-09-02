'use strict';

// EJERCICIO 7
// La media de la carrera
// Hemos organizado una carrera de escobas para que podáis exprimir a fondo vuestra flamante Nimbus 2000. Tenemos los tiempos en este array y nos gustaría conocer la media: ¿nos ayudas a calcularla usando reduce?

const times = [56, 9, 45, 28, 35];

const media = times.reduce((acc, number) => acc + number) / times.length;

console.log(media);

// const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

// const result = scores.reduce((acc, number) => acc + number, 0);

// console.log(result);