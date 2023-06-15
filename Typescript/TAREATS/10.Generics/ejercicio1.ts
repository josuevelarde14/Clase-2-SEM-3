// •	Crea una función genérica que tome un arreglo de cualquier tipo y lo invierta. Luego,
//  llama a la función con diferentes tipos de arreglos y muestra el resultado en la consola.
function invertirArreglo<T>(arreglo: T[]): T[] {
    return arreglo.reverse();
  }
  
  // Ejemplo de uso
  const numeros: number[] = [1, 2, 3, 4, 5];
  const letras: string[] = ["a", "b", "c", "d", "e"];
  
  const numerosInvertidos = invertirArreglo(numeros);
  const letrasInvertidas = invertirArreglo(letras);
  
  console.log(numerosInvertidos); // Output: [5, 4, 3, 2, 1]
  console.log(letrasInvertidas); // Output: ["e", "d", "c", "b", "a"]
  