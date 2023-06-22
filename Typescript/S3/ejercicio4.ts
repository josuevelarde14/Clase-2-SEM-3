// Crea una clase Circulo con una propiedad radio.
// Agrega un método para calcular el perímetro del círculo.
class Circulo {
  radio: number;

  constructor(radio: number) {
    this.radio = radio;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}