// <!-- Crea un objeto llamado persona con las propiedades nombre, apellido, edad y
// direccion. Asigna valores a estas propiedades, donde direccion será un objeto con las
// propiedades calle, numero, ciudad y pais. Luego, crea un método llamado
// mostrarDireccion que imprima en la consola la dirección completa de la persona. -->
var persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30,
  direccion: {
    calle: "Calle Principal",
    numero: 123,
    ciudad: "Ciudad",
    pais: "País",
  },
  mostrarDireccion: function () {
    console.log(
      "Dirección: " +
        this.direccion.calle +
        " " +
        this.direccion.numero +
        ", " +
        this.direccion.ciudad +
        ", " +
        this.direccion.pais
    );
  },
};

persona.mostrarDireccion(); // Imprime "Dirección: Calle Principal 123, Ciudad, País"
