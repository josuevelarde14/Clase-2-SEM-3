// Crea una clase RedSocial con propiedades nombre y usuarios. Agrega métodos para agregar usuarios,
//  publicar mensajes y mostrar las publicaciones de un usuario
class RedSocial {
  nombre: string;
  usuarios: Usuario[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.usuarios = [];
  }

  agregarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  publicarMensaje(usuario: Usuario, mensaje: string): void {
    const usuarioEncontrado = this.buscarUsuario(usuario.nombre);
    if (usuarioEncontrado) {
      usuarioEncontrado.publicarMensaje(mensaje);
    } else {
      console.log(`El usuario ${usuario.nombre} no está registrado en ${this.nombre}.`);
    }
  }

  mostrarPublicacionesUsuario(usuario: Usuario): void {
    const usuarioEncontrado = this.buscarUsuario(usuario.nombre);
    if (usuarioEncontrado) {
      usuarioEncontrado.mostrarPublicaciones();
    } else {
      console.log(`El usuario ${usuario.nombre} no está registrado en ${this.nombre}.`);
    }
  }

  buscarUsuario(nombre: string): Usuario | undefined {
    return this.usuarios.find((usuario) => usuario.nombre === nombre);
  }
}

class Usuario {
  nombre: string;
  publicaciones: string[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.publicaciones = [];
  }

  publicarMensaje(mensaje: string): void {
    this.publicaciones.push(mensaje);
  }

  mostrarPublicaciones(): void {
    console.log(`Publicaciones de ${this.nombre}:`);
    this.publicaciones.forEach((publicacion, indice) => {
      console.log(`Publicación ${indice + 1}: ${publicacion}`);
    });
  }
}
