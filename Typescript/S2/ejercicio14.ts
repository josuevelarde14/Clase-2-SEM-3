// Crea una función llamada obtenerDiasTranscurridos que tome dos fechas
//  como parámetros y devuelva la cantidad de días transcurridos entre ellas.
function obtenerDiasTranscurridos(fechaInicio: Date, fechaFin: Date): number {
  const milisegundosPorDia = 1000 * 60 * 60 * 24;
  const diferenciaTiempo = fechaFin.getTime() - fechaInicio.getTime();
  return Math.floor(diferenciaTiempo / milisegundosPorDia);
}
