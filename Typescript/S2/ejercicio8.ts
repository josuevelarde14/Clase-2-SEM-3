// Crea una función llamada calcularEdad que
// tome el año de nacimiento como parámetro y devuelva la edad actual.
function calcularEdad(anioNacimiento: number): number {
  const anioActual = new Date().getFullYear();
  return anioActual - anioNacimiento;
}
