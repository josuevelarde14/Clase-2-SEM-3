// Crea una función llamada encontrarPalabrasRepetidas que tome una
//  cadena de texto como parámetro y devuelva un arreglo con las palabras que se repiten en ella.
function encontrarPalabrasRepetidas(cadena) {
    var palabras = cadena.split(" ");
    var palabrasRepetidas = [];
    var contadorPalabras = {};
    palabras.forEach(function (palabra) {
        if (contadorPalabras[palabra]) {
            contadorPalabras[palabra]++;
        }
        else {
            contadorPalabras[palabra] = 1;
        }
    });
    for (var palabra in contadorPalabras) {
        if (contadorPalabras[palabra] > 1) {
            palabrasRepetidas.push(palabra);
        }
    }
    return palabrasRepetidas;
}


