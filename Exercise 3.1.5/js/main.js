'use strict';

// EJERCICIO 5
// // Los pares pueden entrar
// De ese listado de contraseñas, queremos que solo puedan entrar los que han elegido una contraseña que es un número par para hacer A/B testing. ¿Nos ayudas a encontrar las contraseñas usando filter?
// PISTA: Recuerda que el resto de la división entera (módulo %) de número par es 0.

const pins = [2389, 2384, 2837, 5232, 8998];

const pairPins = pins.filter(pin => pin % 2 === 0);

console.log(pairPins);

