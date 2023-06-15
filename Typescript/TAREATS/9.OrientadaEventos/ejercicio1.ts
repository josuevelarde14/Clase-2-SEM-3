// •	Crea una clase Botón con un método hacerClick() que imprima "Click" en la consola. 
// Luego, crea una instancia de Botón y llama al método hacerClick() 
// en respuesta a un evento de clic simulado.
class Boton {
    hacerClick(): void {
      console.log("Click");
    }
  }
  
  // Crear una instancia de Boton
  const boton = new Boton();
  
  // Simular un evento de clic llamando al método hacerClick()
  boton.hacerClick();
  