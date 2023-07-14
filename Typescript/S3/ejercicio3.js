// Crea una clase Rectangulo que tenga propiedades base y altura.
// Agrega un método para calcular el área del rectángulo.
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
var rectángulo = new Rectangulo
console.log(resultado);