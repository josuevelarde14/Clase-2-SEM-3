// Crea una clase llamada Calculadora con cuatro métodos: sumar, restar, multiplicar y
// dividir que realicen las operaciones matemáticas correspondientes. Luego crea una
// instancia de la clase y llama a los métodos para hacer diferentes operaciones.
class Calculadora {
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Error: división por cero";
    }
  }
}

const calculadora = new Calculadora();

console.log("Suma: " + calculadora.sumar(5, 3)); // Imprime "Suma: 8"
console.log("Resta: " + calculadora.restar(10, 4)); // Imprime "Resta: 6"
console.log("Multiplicación: " + calculadora.multiplicar(2, 5)); // Imprime "Multiplicación: 10"
console.log("División: " + calculadora.dividir(10, 2)); // Imprime "División: 5"
console.log("División: " + calculadora.dividir(10, 0)); // Imprime "Error: división por cero"
