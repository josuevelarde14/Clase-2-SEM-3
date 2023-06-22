// Crea una clase Vehiculo con propiedades marca, modelo y anio.
// Crea una clase Automovil que herede de Vehiculo y agregue la propiedad numeroPuertas.
class Vehiculo {
  marca: string;
  modelo: string;
  anio: number;

  constructor(marca: string, modelo: string, anio: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }
}

class Automovil extends Vehiculo {
  numeroPuertas: number;

  constructor(marca: string, modelo: string, anio: number, numeroPuertas: number) {
    super(marca, modelo, anio);
    this.numeroPuertas = numeroPuertas;
  }
}
