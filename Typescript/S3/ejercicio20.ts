// Crea una clase Aeropuerto con propiedades nombre y vuelos. Agrega métodos para agregar vuelos,
//  buscar vuelos por destino y mostrar todos los vuelos.
class Aeropuerto {
  nombre: string;
  vuelos: Vuelo[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.vuelos = [];
  }

  agregarVuelo(vuelo: Vuelo): void {
    this.vuelos.push(vuelo);
  }

  buscarVuelosPorDestino(destino: string): Vuelo[] {
    return this.vuelos.filter((vuelo) => vuelo.destino === destino);
  }

  mostrarTodosLosVuelos(): void {
    console.log(`Vuelos en el aeropuerto ${this.nombre}:`);
    this.vuelos.forEach((vuelo) => {
      console.log(`Vuelo ${vuelo.numero}:`);
      console.log(`Origen: ${vuelo.origen}`);
      console.log(`Destino: ${vuelo.destino}`);
      console.log(`Aerolínea: ${vuelo.aerolinea}`);
      console.log("--------------------");
    });
  }
}

class Vuelo {
  numero: string;
  origen: string;
  destino: string;
  aerolinea: string;

  constructor(numero: string, origen: string, destino: string, aerolinea: string) {
    this.numero = numero;
    this.origen = origen;
    this.destino = destino;
    this.aerolinea = aerolinea;
  }
}
