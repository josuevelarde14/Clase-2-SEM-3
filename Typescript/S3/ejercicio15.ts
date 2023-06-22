// Crea una clase Playlist con propiedades nombre y canciones.
// Agrega un método para agregar una canción a la playlist y otro método para reproducir la playlist.
class Playlist {
  nombre: string;
  canciones: string[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.canciones = [];
  }

  agregarCancion(cancion: string): void {
    this.canciones.push(cancion);
  }

  reproducirPlaylist(): void {
    console.log(`Reproduciendo la playlist "${this.nombre}"`);
    this.canciones.forEach((cancion, indice) => {
      console.log(`Canción ${indice + 1}: ${cancion}`);
    });
  }
}

