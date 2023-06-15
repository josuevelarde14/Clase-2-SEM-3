// Crea una clase Persona con propiedades nombre, edad y genero.
//  Crea un método para mostrar el saludo de la persona.
class Persona2 {
  nombre: string;
  edad: number;
  genero: string;

  constructor(nombre: string, edad: number, genero: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }

  mostrarSaludo(): void {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}
