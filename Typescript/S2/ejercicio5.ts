// Crea una función llamada obtenerPromedio que tome
// un arreglo de números como parámetro y devuelva el promedio de los elementos.
function obtenerPromedio(numeros: number[]): number {
  const suma = numeros.reduce((total, num) => total + num, 0);
  return suma / numeros.length;
}
