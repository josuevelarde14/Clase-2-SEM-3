// Crea una clase llamada Persona con dos propiedades: nombre y edad. Crea un método
// presentarse que imprima en la consola una frase presentando a la persona. Luego crea
// dos instancias de la clase y llama al método presentarse en cada una.
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    console.log(
      "Hola, soy " + this.nombre + " y tengo " + this.edad + " años."
    );
  }
}

const persona1 = new Persona("Josue", 25);
const persona2 = new Persona("María", 30);

persona1.presentarse(); // Imprime "Hola, soy Juan y tengo 25 años."
persona2.presentarse(); // Imprime "Hola, soy María y tengo 30 años."
