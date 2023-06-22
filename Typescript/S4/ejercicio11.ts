// Crea una interfaz Animal con un método moverse y una propiedad ubicacion.
//  Crea una clase Ave que implemente la interfaz y en el método moverse imprima "Volando".
interface Animal {
    moverse(): void;
    ubicacion: string;
  }
  
  class Ave implements Animal {
    ubicacion: string;
  
    constructor(ubicacion: string) {
      this.ubicacion = ubicacion;
    }
  
    moverse(): void {
      console.log("Volando");
    }
  }
  