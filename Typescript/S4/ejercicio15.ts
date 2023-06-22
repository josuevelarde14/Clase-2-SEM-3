// Crea una interfaz Calculadora con un método sumar que reciba un array de números y 
// devuelva la suma. Crea una clase CalculadoraAvanzada que implemente la interfaz y en el 
// método sumar calcule la suma de los números y devuelva el resultado
interface Calculadora {
    sumar(numeros: number[]): number;
  }
  
  class CalculadoraAvanzada implements Calculadora {
    sumar(numeros: number[]): number {
      return numeros.reduce((a, b) => a + b, 0);
    }
  }
  