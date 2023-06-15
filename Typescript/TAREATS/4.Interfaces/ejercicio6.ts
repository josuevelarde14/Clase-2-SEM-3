// Crea una interfaz Estudiante con propiedades nombre, edad y carrera. 
// Crea una función que reciba un objeto que
//  cumpla con la interfaz y muestre la información del estudiante.
interface Estudiante {
    nombre: string;
    edad: number;
    carrera: string;
  }
  
  function mostrarInformacionEstudiante(estudiante: Estudiante): void {
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Edad: ${estudiante.edad}`);
    console.log(`Carrera: ${estudiante.carrera}`);
  }  