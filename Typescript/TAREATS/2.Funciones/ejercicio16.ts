// Crea una función llamada generarFibonacci que tome un número como parámetro
//  y devuelva un arreglo con la secuencia de Fibonacci hasta ese número.
function generarFibonacci(numero: number): number[] {
  const fibonacci: number[] = [0, 1];
  for (let i = 2; i <= numero; i++) {
    const siguienteFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(siguienteFibonacci);
  }
  return fibonacci;
}
