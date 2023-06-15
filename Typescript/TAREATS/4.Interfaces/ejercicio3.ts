// Crea una interfaz Fruta con una propiedad nombre. Crea una función que reciba un array de objetos
//  que cumplan con la interfaz y muestre los nombres de las frutas.
interface Fruta {
    nombre: string;
  }
  
  function mostrarNombresFrutas(frutas: Fruta[]): void {
    frutas.forEach(fruta => console.log(fruta.nombre));
  }
  