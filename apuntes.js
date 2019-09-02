'use strict'
// Métodos funcionales de array

------convertir a mayusculas
const capitalName = names[i].toUpperCase();

------El método map
// nos permite aplicar una función a todos los elementos de un array y devuelve otro array de la misma longitud con los resultados de aplicar esa función sobre cada elemento.
NOTA: es importante recordar que el array resultante de aplicar map va a ser siempre de la misma longitud que el array original.

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const capitalNames = names.map(name => name.toUpperCase());

console.log(capitalNames);
___
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const getUperCaseName = name => name.toUpperCase()
const capitalNames = names.map(getUperCaseName);

console.log(capitalNames);
___

------El método filter
// nos ayuda a filtrar un array y elegir algunos de sus elementos dado un criterio.

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longNames = names.filter(name => name.length > 5);

console.log(longNames);

------- El método reduce
// es un método funcional complejo que nos permite realizar cálculos o acciones que requieran utilizar varios elementos de un array. A diferencia de map o filter el resultado de reduce no es un array sino un valor del tipo que queramos. Se basa en aplicar una función a todos los elementos de un array (como las anteriores) y se va trabajando con resultados parciales hasta que se llega al resultado final. Se usa cuando queremos obtener un resultado que depende de varios de los elementos del array, por ejemplo, calcular la media de un listado de números.

// ----con un bucle
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];
let result = 0;

for (let i = 0; i < scores.length; i++) {
  result += scores[i];
}

console.log(result);

// ----con el método de array .reduce


const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

// En este caso ejecutamos el método reduce sobre el array scores y le pasamos como parámetros 1) una función y 2) un valor inicial, en este caso 0, es el valor inicial del acumulador.
const result = scores.reduce((acc, number) => acc + number, 0);

console.log(result);

// La función se ejecuta por cada elemento del array y toma como parámetros: 
// a) un acumulador acc, que acumula el resultado de un elemento al siguiente; 
// y b) el elemento del array, por ejemplo, en la primera vuelta será el de índice 0 cuyo valor es 4.


// La función lo que hace es sumar al acumulador el valor del número actual y devuelve el resultado y ese mismo resultado se convierte en el acumulador del siguiente paso. 


------Estos métodos pueden encadenarse

// En este caso queremos filtrar los nombres largos pero además obtenerlos en mayúscula.Para eso vamos a, primero filtrar con filter por longitud del nombre y luego convertirlos en mayúscula usando map.

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longNames = names
  .filter(name => name.length > 5)
  .map(name => name.toUpperCase());

console.log(longNames);


------El método find
// nos permite buscar un elemento en un array dada una condición. A diferencia de filter, no devuelve un array con los resultados, sino un único elemento: el primero que cumpla la condición que establecemos. 

// / En la función comparamos la longitud(length) del nombre con 5, y devolvemos el resultado de esa comparación.El primer elemento cuyo resultado de la comparación de como resultado true será devuelto por la función y lo recogemos en la variable longName.

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const longName = names.find(name => name.length > 5);

console.log(longName);


------El método findIndex
// hace lo mismo pero en vez de devolver el elemento, nos devuelve su índice (posición en el array) que es muy útil si queremos, por ejemplo, borrarlo usando splice.

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const index = names.findIndex(name => name.length > 5);

console.log(index);
// En este caso el resultado es 2 porque es el índice del array del primer nombre con más de 5 letras (Susana).



const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const index = names.findIndex(name => name.length > 5);

console.log(index);

------El método sort
// Para ordenar valores que son cadenas, nos permite ordenar los elementos de un array.

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

names.sort();
console.log(names);
//Se veria asi: ["Inmaculada", "Lucía", "María", "Rocío", "Susana"]

------Si queremos indicar otro tipo de orden.
//  tendremos que pasar al método sort una función que sepa qué hacer para ordenar 2 elementos. Esta función toma 2 parámetros (a y b) que son 2 elementos cualquiera del array y tenemos que devolver:
// un número negativo si queremos que a se posicione antes que b en el array
// un número positivo si queremos que b se posicione antes que a en el array
// cero si queremos se comporten como valores iguales y en la ordenación aparezcan juntos

const times = [56, 9, 45, 28, 35];

times.sort((a, b) => a - b);
console.log(times);
//Se veria asi: Array(5)
// 0: 9
// 1: 28
// 2: 35
// 3: 45
// 4: 56

// De esta forma, si un número a es mayor que otro b el resultado es positivo y b se posiciona antes en el resultado. Lo contrario ocurre cuando a es menor que b. Si son iguales, el resultado es 0 y se quedan como están.


------propiedades de un objeto Object.keys
//acceder al listado de propiedades de un objeto.

const book = {
  title: 'Harry Potter and the Deathly Hallows',
  ds_title: 'Harry Potter 7',
  author: 'J. K. Rowling',
  ds_author: 'Rowling',
  ...
};

const keys = Object.keys(book);
console.log(keys); //['title', 'ds_title', 'author', 'ds_author', ...]