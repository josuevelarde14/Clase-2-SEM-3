// Crea una interfaz FiguraGeometrica con un método calcularArea que devuelva el área de la figura.Crea una clase 
// Circulo que implemente la interfaz y en el método calcularArea calcule el área de un círculo.
interface FiguraGeometrica {
    calcularArea(): number;
  }
  
  class Circulo implements FiguraGeometrica {
    private radio: number;
  
    constructor(radio: number) {
      this.radio = radio;
    }
  
    calcularArea(): number {
      return Math.PI * this.radio ** 2;
    }
  }
  