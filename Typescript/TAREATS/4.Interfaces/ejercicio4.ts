// Crea una interfaz Calculadora con un método sumar que reciba dos números y devuelva la suma. 
// Crea una función que reciba un objeto que cumpla con la interfaz y muestre el resultado de una suma.
interface Calculadora {
    sumar(num1: number, num2: number): number;
  }
  
  function mostrarResultadoSuma(calculadora: Calculadora, num1: number, num2: number): void {
    const resultado = calculadora.sumar(num1, num2);
    console.log(`Resultado de la suma: ${resultado}`);
  }
  