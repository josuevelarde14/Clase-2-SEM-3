// <!-- Crea un objeto llamado fruta con las propiedades nombre y precio. Asigna valores a
// estas propiedades y luego crea un método llamado mostrarPrecio que imprima en la
// consola el precio de la fruta -->
var fruta = {
  nombre: "Manzana",
  precio: 2.5,
  mostrarPrecio: function () {
    console.log("El precio de la fruta es: " + this.precio);
  },
};

fruta.mostrarPrecio(); // Imprime "El precio de la fruta es: 2.5"
