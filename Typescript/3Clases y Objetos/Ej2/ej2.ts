class Persona {
    nombre:string;
    edad:number;
    profesion:string;

    constructor(nombre: string, edad: number, profesion: string) {
        this.nombre= nombre;
        this.edad= edad;
        this.profesion= profesion;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y mi profesion es ${this.profesion}`)
    }
}

let p1:Persona= new Persona("Josue",24,"ing industrial");
console.log(p1.saludar());
