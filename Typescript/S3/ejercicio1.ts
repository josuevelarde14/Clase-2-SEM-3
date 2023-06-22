// rea una clase Persona con propiedades como nombre, edad y profesión.
//  Agrega un método para mostrar los detalles de la persona.
class Persona {
  nombre: string;
  edad: number;
  profesion: string;

  constructor(nombre: string, edad: number, profesion: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  mostrarDetalles(): void {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Profesión: ${this.profesion}`);
  }
}
