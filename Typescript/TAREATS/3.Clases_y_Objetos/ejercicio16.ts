// Crea una clase FiguraGeometrica con un método calcularArea y un método calcularPerimetro.
//  Crea clases hijas para representar diferentes figuras geométricas como cuadrado,
//  triángulo y círculo.
abstract class FiguraGeometrica {
  abstract calcularArea(): number;
  abstract calcularPerimetro(): number;
}

class Cuadrado extends FiguraGeometrica {
  lado: number;

  constructor(lado: number) {
    super();
    this.lado = lado;
  }

  calcularArea(): number {
    return this.lado * this.lado;
  }

  calcularPerimetro(): number {
    return 4 * this.lado;
  }
}

class Triangulo extends FiguraGeometrica {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }

  calcularPerimetro(): number {
    // Suponiendo que es un triángulo rectángulo
    const hipotenusa = Math.sqrt(this.base * this.base + this.altura * this.altura);
    return this.base + this.altura + hipotenusa;
  }
}

class Circulo2 extends FiguraGeometrica {
  radio: number;

  constructor(radio: number) {
    super();
    this.radio = radio;
  }

  calcularArea(): number {
    return Math.PI * this.radio * this.radio;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}
