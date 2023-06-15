// Crea una clase Pelicula con propiedades titulo, director y duracion.
// Crea un método para reproducir la película.
class Pelicula {
  titulo: string;
  director: string;
  duracion: number;

  constructor(titulo: string, director: string, duracion: number) {
    this.titulo = titulo;
    this.director = director;
    this.duracion = duracion;
  }

  reproducir(): void {
    console.log(`Reproduciendo la película ${this.titulo} (${this.duracion} minutos).`);
  }
}
