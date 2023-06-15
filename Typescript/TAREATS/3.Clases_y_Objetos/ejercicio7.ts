// Crea una clase Perro con una propiedad nombre.
//  Agrega un método para hacer ladrar al perro.
class Perro {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  hacerLadrar(): void {
    console.log(`${this.nombre} está ladrando.`);
  }
}
