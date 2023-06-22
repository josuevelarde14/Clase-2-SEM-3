// Crea una clase Libro con propiedades titulo, autor y anioPublicacion.
// Crea un método para mostrar la información del libro.
class Libro {
  titulo: string;
  autor: string;
  anioPublicacion: number;

  constructor(titulo: string, autor: string, anioPublicacion: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.anioPublicacion = anioPublicacion;
  }

  mostrarInformacion(): void {
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Año de publicación: ${this.anioPublicacion}`);
  }
}
