// <!-- Crea un objeto llamado playlist con las propiedades nombre y canciones. Asigna
// valores a estas propiedades, donde canciones será un arreglo de objetos que
// representen una canción, cada objeto debe tener las propiedades titulo y artista.
// Luego, crea un método llamado mostrarCanciones que imprima en la consola el
// nombre de cada canción en la lista de reproducción -->
var playlist = {
  nombre: "Mis Favoritas",
  canciones: [
    { titulo: "Canción 1", artista: "Artista 1" },
    { titulo: "Canción 2", artista: "Artista 2" },
    { titulo: "Canción 3", artista: "Artista 3" },
  ],
  mostrarCanciones: function () {
    for (var i = 0; i < this.canciones.length; i++) {
      console.log(
        "Canción: " +
          this.canciones[i].titulo +
          " - Artista: " +
          this.canciones[i].artista
      );
    }
  },
};

playlist.mostrarCanciones();
// Imprime:
// Canción: Canción 1 - Artista: Artista 1
// Canción: Canción 2 - Artista: Artista 2
// Canción: Canción 3 - Artista: Artista 3
