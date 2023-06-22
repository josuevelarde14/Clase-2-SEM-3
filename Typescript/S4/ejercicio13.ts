// Crea una interfaz ReproductorMusical con un método reproducir y una propiedad playlist.
//  Crea una clase ReproductorMP3 que implemente la
//  interfaz y en el método reproducir reproduzca las canciones de la playlist.
interface ReproductorMusical {
    reproducir(): void;
    playlist: string[];
  }
  
  class ReproductorMP3 implements ReproductorMusical {
    playlist: string[];
  
    constructor(playlist: string[]) {
      this.playlist = playlist;
    }
  
    reproducir(): void {
      console.log("Reproduciendo canciones:");
      this.playlist.forEach(cancion => console.log(cancion));
    }
  }
  