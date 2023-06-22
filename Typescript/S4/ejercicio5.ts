// Crea una interfaz Animal con un método hacerSonido.
//  Crea una clase Perro que implemente la interfaz y en el método hacerSonido imprima "¡Guau!"
    interface Animal {
        hacerSonido(): void;
      }
      
      class Perro implements Animal {
        hacerSonido(): void {
          console.log("¡Guau!");
        }
      }
      