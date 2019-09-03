'use strict';

// EJERCICIO 2
// Vamos a mejorar nuestra calculadora geométrica sencilla.En el programa definiremos la clase Square, que tendrá al menos:
// Un atributo para la longitud del lado(side) del cuadrado
// [x] Un método para calcular el perímetro(perimeter()) del cuadrado(multiplica la longitud del lado por el número de lados - 4)
// [x] Un método para calcular el área(area()) del cuadrado(elevar al cuadrado el lado)
// [x] Los métodos no recibirán parámetros, sino que cogerán los datos necesarios de los atributos de la instancia.
// [x] Crearemos tres instancias: una con 1 de lado, otra con 3 y otra con 7. Llamaremos a los dos métodos en todas las instancias.

class Square {
  constructor(lengthSides) {
    // Un atributo para la longitud del lado(side) del cuadrado
    this.lengthSides = lengthSides;
  }

  // Un método para calcular el perímetro(perimeter()) del cuadrado(multiplica la longitud del lado por el número de lados - 4)
  perimeter() {
    // Los métodos no recibirán parámetros, sino que cogerán los datos necesarios de los atributos de la instancia.
    const perimeter = this.lengthSides * 4;
    return perimeter;

  }

  // Un método para calcular el área(area()) del cuadrado(elevar al cuadrado el lado)
  area() {
    const area = this.lengthSides * this.lengthSides
    return area;

  }
}

// Crearemos tres instancias: una con 1 de lado, otra con 3 y otra con 7. Llamaremos a los dos métodos en todas las instancias.

const lengthSides1 = new Square(1);
const lengthSides2 = new Square(3);
const lengthSides3 = new Square(7);

const polygon = new Square();
// polygon.perimeter(2);
// polygon.area(9);

console.log(lengthSides1.perimeter())
console.log(lengthSides2.perimeter())
console.log(lengthSides3.perimeter())

console.log(polygon)
