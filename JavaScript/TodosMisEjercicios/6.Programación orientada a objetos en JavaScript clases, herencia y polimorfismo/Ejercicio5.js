// Crea una clase Persona con las siguientes propiedades: nombre, edad, sexo, altura y
// peso. También debe tener un método calcularIMC que calcule y devuelva el índice
// de masa corporal de la persona (IMC = peso / altura^2).
class Persona {
  constructor(nombre, edad, sexo, altura, peso) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.altura = altura;
    this.peso = peso;
  }

  calcularIMC() {
    const imc = this.peso / (this.altura * this.altura);
    return imc.toFixed(2);
  }
}

const persona = new Persona("Juan", 30, "Hombre", 1.75, 70);
console.log("IMC: " + persona.calcularIMC()); // Imprime "IMC: 22.86"
