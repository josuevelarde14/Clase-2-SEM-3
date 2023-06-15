// Crea una clase Estudiante con propiedades nombre, edad y carrera.
// Crea un método para mostrar la información del estudiante.
class Estudiante {
  nombre: string;
  edad: number;
  carrera: string;

  constructor(nombre: string, edad: number, carrera: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
  }

  mostrarInformacion(): void {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Carrera: ${this.carrera}`);
  }
}
