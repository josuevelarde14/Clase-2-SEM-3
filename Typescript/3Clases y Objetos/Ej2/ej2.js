var Persona = /** @class */ (function () {
    function Persona(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, mi nombre es ".concat(this.nombre, ", tengo ").concat(this.edad, " a\u00F1os y mi profesion es ").concat(this.profesion));
    };
    return Persona;
}());
var p1 = new Persona("Josue", 24, "ing industrial");
console.log(p1.saludar());
