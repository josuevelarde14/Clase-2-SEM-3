// Crea una clase llamada Rectangulo que tenga dos propiedades: lado1 y lado2, y un
// método area que calcule y devuelva el área del rectángulo (lado1 * lado2). Crea una
// instancia de la clase y llama al método area.
class Rectangulo {
  constructor(lado1, lado2) {
    this.lado1 = lado1;
    this.lado2 = lado2;
  }

  area() {
    return this.lado1 * this.lado2;
  }
}

const rectangulo = new Rectangulo(5, 10);
console.log(rectangulo.area()); // Imprime 50
