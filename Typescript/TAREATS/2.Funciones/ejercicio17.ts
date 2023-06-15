// Crea una función llamada esFechaValida que tome tres números como
// parámetros (día, mes, año) y devuelva true si forman una fecha válida y false si no lo son.

function esFechaValida(dia: number, mes: number, anio: number): boolean {
  const fecha = new Date(anio, mes - 1, dia);
  return (
    fecha.getDate() === dia &&
    fecha.getMonth() === mes - 1 &&
    fecha.getFullYear() === anio
  );
}
