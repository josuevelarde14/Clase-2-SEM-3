// •	Crea un módulo separado con una función para calcular el área de un triángulo.
//  Importa la función en tu archivo principal y 
// calcula el área de un triángulo utilizando la función.
import { calcularAreaTriangulo } from './triangulo';

// Utiliza la función para calcular el área de un triángulo
const base = 4;
const altura = 6;
const areaTriangulo = calcularAreaTriangulo(base, altura);
console.log('El área del triángulo es:', areaTriangulo);
