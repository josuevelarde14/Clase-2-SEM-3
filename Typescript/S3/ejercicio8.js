// Crea una clase Empleado con propiedades nombre, salario y puesto.
// Crea un método para calcular el salario anual del empleado.
var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario, puesto) {
        this.nombre = nombre;
        this.salario = salario;
        this.puesto = puesto;
    }
    Empleado.prototype.calcularSalarioAnual = function () {
        return this.salario * 12;
    };
    return Empleado;
}());
