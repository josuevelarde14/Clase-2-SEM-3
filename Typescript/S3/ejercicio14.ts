// Crea una clase Tienda con propiedades nombre y direccion.
//  Agrega un método para agregar productos a la tienda y otro método para mostrar todos los productos.
class Tienda {
  nombre: string;
  direccion: string;
  productos: string[];

  constructor(nombre: string, direccion: string) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.productos = [];
  }

  agregarProducto(producto: string): void {
    this.productos.push(producto);
  }

  mostrarProductos(): void {
    console.log("Productos disponibles en la tienda:");
    this.productos.forEach((producto) => {
      console.log(producto);
    });
  }
}

