// •	Crea una clase base llamada Figura con un método para calcular el área. Luego, crea subclases como Círculo y Rectángulo que hereden de Figura y sobrescribe el método de cálculo de área según la forma.
// •	Crea instancias de las subclases y muestra el área de cada figura en la consola.

// Clase base Figura
class Figura {
    calcularArea(): number {
      return 0; // Método por defecto, se debe sobrescribir en las subclases
    }
  }
  
  // Subclase Círculo que hereda de Figura
  class Circulo extends Figura {
    constructor(private radio: number) {
      super();
    }
  
    calcularArea(): number {
      return Math.PI * Math.pow(this.radio, 2);
    }
  }
  
  // Subclase Rectángulo que hereda de Figura
  class Rectangulo extends Figura {
    constructor(private base: number, private altura: number) {
      super();
    }
  
    calcularArea(): number {
      return this.base * this.altura;
    }
  }
  
  // Crear instancias y mostrar el área en la consola
  const circulo = new Circulo(5);
  console.log("Área del círculo:", circulo.calcularArea());
  
  const rectangulo = new Rectangulo(4, 6);
  console.log("Área del rectángulo:", rectangulo.calcularArea());
  