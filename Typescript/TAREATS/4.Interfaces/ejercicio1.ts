// Crea una interfaz Rectangulo con propiedades base y altura.
// Crea una función que reciba un objeto que cumpla con la interfaz y calcule el área del rectángulo.
interface Rectangulo {
  base: number;
  altura: number;
}

function calcularAreaRectangulo(rectangulo: Rectangulo): number {
  return rectangulo.base * rectangulo.altura;
}
