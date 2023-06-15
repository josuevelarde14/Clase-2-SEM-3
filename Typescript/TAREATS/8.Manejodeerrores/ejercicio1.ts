// •	Crea una función que intente dividir dos números. 
// Utiliza un bloque try/catch para manejar cualquier excepción que pueda ocurrir
//  durante la división y muestra un mensaje de error en caso de que ocurra una excepción.
function dividir(a: number, b: number): void {
    try {
      const resultado = a / b;
      console.log(`El resultado de la división es: ${resultado}`);
    } catch (error) {
      console.error('Ocurrió un error durante la división:', error);
    }
  }
  
  dividir(10, 2); // Resultado: El resultado de la división es: 5
  dividir(10, 0); // Resultado: Ocurrió un error durante la división: Error: Division by zero
  