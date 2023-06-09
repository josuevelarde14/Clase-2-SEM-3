var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os"));
    };
    return Persona;
}());
var persona1 = new Persona("Juan", 25);
var persona2 = new Persona("Maria", 30);
console.log(persona1.nombre);
console.log(persona2.edad);
persona1.saludar();
persona2.saludar();
