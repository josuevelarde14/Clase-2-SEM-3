// Crea una función llamada esPalindromo que tome una cadena de texto como parámetro
// y devuelva true si es un palíndromo y false si no lo es.
function esPalindromo(cadena: string): boolean {
  const cadenaReversa = cadena.split("").reverse().join("");
  return cadena === cadenaReversa;
}
