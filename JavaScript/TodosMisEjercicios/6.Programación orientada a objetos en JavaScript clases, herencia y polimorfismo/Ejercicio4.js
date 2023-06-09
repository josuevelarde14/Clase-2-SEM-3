// Crea una clase llamada Coche con una propiedad velocidad y dos métodos acelerar y
// frenar que aumenten y disminuyan la velocidad respectivamente. Luego crea una
// instancia de la clase y llama a los métodos acelerar y frenar varias veces para ver
// cómo cambia la velocidad
class Coche {
  constructor() {
    this.velocidad = 0;
  }

  acelerar() {
    this.velocidad += 10;
    console.log("Velocidad actual: " + this.velocidad);
  }

  frenar() {
    this.velocidad -= 10;
    console.log("Velocidad actual: " + this.velocidad);
  }
}

const coche = new Coche();

coche.acelerar(); // Imprime "Velocidad actual: 10"
coche.acelerar(); // Imprime "Velocidad actual: 20"
coche.frenar(); // Imprime "Velocidad actual: 10"
