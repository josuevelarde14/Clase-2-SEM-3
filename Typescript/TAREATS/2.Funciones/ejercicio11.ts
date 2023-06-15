// Crea una función llamada calcularFactorial que tome un número como parámetro y devuelva
//  su factorial.
function calcularFactorial(numero: number): number {
  let factorial = 1;
  for (let i = 2; i <= numero; i++) {
    factorial *= i;
  }
  return factorial;
}
