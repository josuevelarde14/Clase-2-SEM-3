// Crea una interfaz Pelicula con propiedades titulo, director y anio. Crea una 
// función que reciba un objeto que cumpla con la interfaz y muestre la información de la película.
interface Pelicula {
    titulo: string;
    director: string;
    anio: number;
  }
  
  function mostrarInformacionPelicula(pelicula: Pelicula): void {
    console.log(`Título: ${pelicula.titulo}`);
    console.log(`Director: ${pelicula.director}`);
    console.log(`Año: ${pelicula.anio}`);
  }
  