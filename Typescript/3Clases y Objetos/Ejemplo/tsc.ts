class Persona {
    nombre: string;
    edad:number

    constructor(nombre: string, edad: number) {
        this.nombre= nombre;
        this.edad= edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

const persona1 = new Persona("Juan", 25);
const persona2 = new Persona("Maria", 30);

console.log(persona1.nombre);
console.log(persona2.edad);

persona1.saludar();
persona2.saludar();
