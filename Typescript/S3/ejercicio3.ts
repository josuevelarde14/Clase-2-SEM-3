// Crea una clase Rectangulo que tenga propiedades base y altura.
// Agrega un método para calcular el área del rectángulo.
class Rectangulo {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea(): number {
    return this.base * this.altura;
  }
}
