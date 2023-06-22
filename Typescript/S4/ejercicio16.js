var OrdenadorNumeros = /** @class */ (function () {
    function OrdenadorNumeros() {
    }
    OrdenadorNumeros.prototype.ordenar = function (array) {
        return array.sort(function (a, b) { return a - b; });
    };
    return OrdenadorNumeros; // Descomenta esta línea
}());

var ordenador = new OrdenadorNumeros();
var numeros = [4, 2, 1, 3, 5];
var numerosOrdenados = ordenador.ordenar(numeros);
console.log(numerosOrdenados); // Imprimirá [1, 2, 3, 4, 5] en la consola