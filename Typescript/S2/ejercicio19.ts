// Crea una función llamada encontrarPalabrasRepetidas que tome una
//  cadena de texto como parámetro y devuelva un arreglo con las palabras que se repiten en ella.
function encontrarPalabrasRepetidas(cadena: string): string[] {
  const palabras = cadena.split(" ");
  const palabrasRepetidas: string[] = [];
  const contadorPalabras: { [key: string]: number } = {};

  palabras.forEach((palabra) => {
    if (contadorPalabras[palabra]) {
      contadorPalabras[palabra]++;
    } else {
      contadorPalabras[palabra] = 1;
    }
  });

  for (const palabra in contadorPalabras) {
    if (contadorPalabras[palabra] > 1) {
      palabrasRepetidas.push(palabra);
    }
  }

  return palabrasRepetidas;
}
