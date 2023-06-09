// <!-- Crea un objeto llamado libro con las propiedades titulo, autor y paginas. Asigna
// valores a estas propiedades y luego crea un método llamado resumir que devuelva un
// resumen del libro en una cadena de texto. El resumen debe incluir el título, el autor y
// el número de páginas. -->
var libro = {
  titulo: "El Gran Gatsby",
  autor: "F. Scott Fitzgerald",
  paginas: 250,
  resumir: function () {
    return (
      "Libro: " +
      this.titulo +
      " - Autor: " +
      this.autor +
      " - Páginas: " +
      this.paginas
    );
  },
};

console.log(libro.resumir()); // Imprime "Libro: El Gran Gatsby - Autor: F. Scott Fitzgerald - Páginas: 250"
