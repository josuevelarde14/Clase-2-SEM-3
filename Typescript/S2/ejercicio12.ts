// Crea una función llamada esPrimo que tome un número como
// parámetro y devuelva true si es primo y false si no lo es.
function esPrimo(numero: number): boolean {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}
