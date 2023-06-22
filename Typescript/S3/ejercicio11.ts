// Crea una clase Fraccion con propiedades numerador y denominador.
// Agrega un método para calcular la suma de dos fracciones.
class Fraccion {
  numerador: number;
  denominador: number;

  constructor(numerador: number, denominador: number) {
    this.numerador = numerador;
    this.denominador = denominador;
  }

  calcularSuma(otraFraccion: Fraccion): Fraccion {
    const nuevoNumerador = this.numerador * otraFraccion.denominador + otraFraccion.numerador * this.denominador;
    const nuevoDenominador = this.denominador * otraFraccion.denominador;
    return new Fraccion(nuevoNumerador, nuevoDenominador);
  }
}
