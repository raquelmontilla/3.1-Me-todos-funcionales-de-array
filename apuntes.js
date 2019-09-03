'use strict'
// Clases de ES6

//Ejemplo clase de objeto, con una propiedas que es un método.
class Dog {
  bark() {
    console.log('Woof, woof!');
  }
}

//asigno la nueva clase de objeto la variables
const laika = new Dog();
const hachiko = new Dog();

// Aplico el método de la clase Objeto a las variables
laika.bark(); // Woof, woof!
hachiko.bark(); // Woof, woof!

________

// las instancias comparten los métodos de la clase de la que vienen. Pero las instancias también pueden declarar los suyos propios e individuales.
hachiko.waitForOwner = () => {
  console.log('Hachiko is waiting.');
};

hachiko.waitForOwner(); // Hachiko is waiting.
laika.waitForOwner(); // TypeError: laika.waitForOwner no es una función
________

// Si una instancia declara un método con el mismo nombre que su clase, entonces el método se sobrescribe para esa instancia solo:

hachiko.bark = () => {
  console.log('Wan, wan!'); // Hachiko barks in Japanese
};

laika.bark(); // 'Woof, woof!'
hachiko.bark(); // 'Wan, wan!'

---------

  El metodo constructor()
// es el encargado de inicializar la instancia, es decir, de preparar todo lo necesario para su creación. El constructor recibe los parámetros que se pasan al instanciar la clase con new

class Dog {
  constructor(name) {
    console.log(`(I have a conscience now. My name is ${name})`);
  }
}

const laika = new Dog('Laika'); // (I have a conscience now. My name is Laika)
______
// En el constructor, además, es donde se declaran los atributos de la clase

// Vamos a declarar el parámetro name como un atributo:

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const laika = new Dog('Laika');
const hachiko = new Dog('Hachiko');

// Una vez creada la instancia, para acceder a los atributos lo hacemos directamente como en el ejemplo, laika.name.
console.log(laika.name); // 'Laika'
console.log(hachiko.name); // 'Hachiko'

// La palabra clave this dentro de la declaración de una clase hace referencia a la instancia de la clase que crearemos. Cuando declaramos atributos en el constructor con this.<atributo> como en el ejemplo anterior, estamos efectivamente declarando que "la instancia resultante (this) tendrá la propiedad <atributo>". 

_________

// De igual manera que los declaramos, con this podemos acceder a esos atributos desde los métodos:

class Dog {
  // los declaramos, con this
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log('Woof, woof!');
  }
  //Metodo que ejecuta una respuesta con shout
  reactToCall(shout) {
    // acceder a esos atributos desde los métodos
    if (shout.includes(this.name)) {
      console.log(`${this.name} wags its tail, happily.`);
    } else {
      this.bark();
    }
  }
}

const laika = new Dog('Laika');

laika.reactToCall('Hey, Laika!'); // 'Laika wags its tail, happily.'
laika.reactToCall('Hey, Hachiko!'); // 'Woof, woof!'


