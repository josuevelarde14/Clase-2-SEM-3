// Crea una clase Coche con las siguientes propiedades: marca, modelo, color,
// velocidadActual y velocidadMaxima. La clase debe tener métodos para acelerar y
// frenar el coche, y para obtener la velocidad actual y la velocidad máxima.
class Coche {
  constructor(marca, modelo, color, velocidadMaxima) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.velocidadActual = 0;
    this.velocidadMaxima = velocidadMaxima;
  }

  acelerar(velocidad) {
    if (this.velocidadActual + velocidad <= this.velocidadMaxima) {
      this.velocidadActual += velocidad;
      console.log("Velocidad actual: " + this.velocidadActual);
    } else {
      console.log("No se puede acelerar más, se alcanzó la velocidad máxima.");
    }
  }

  frenar(velocidad) {
    if (this.velocidadActual - velocidad >= 0) {
      this.velocidadActual -= velocidad;
      console.log("Velocidad actual: " + this.velocidadActual);
    } else {
      console.log("No se puede frenar más, el coche está detenido.");
    }
  }

  obtenerVelocidadActual() {
    return this.velocidadActual;
  }

  obtenerVelocidadMaxima() {
    return this.velocidadMaxima;
  }
}

const coche = new Coche("Toyota", "Corolla", "Rojo", 200);

coche.acelerar(50); // Imprime "Velocidad actual: 50"
coche.acelerar(100); // Imprime "Velocidad actual: 150"
coche.frenar(80); // Imprime "Velocidad actual: 70"
console.log("Velocidad actual: " + coche.obtenerVelocidadActual()); // Imprime "Velocidad actual: 70"
console.log("Velocidad máxima: " + coche.obtenerVelocidadMaxima()); // Imprime "Velocidad máxima: 200"
