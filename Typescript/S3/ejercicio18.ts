// Crea una clase Juego con un método iniciar que simule un juego interactivo.
//  Crea clases hijas para diferentes tipos de juegos como juegos de mesa, juegos de cartas, etc
class Juego {
  iniciar(): void {
    console.log("Iniciando el juego...");
  }
}

class JuegoDeMesa extends Juego {
  iniciar(): void {
    console.log("Iniciando juego de mesa...");
  }
}

class JuegoDeCartas extends Juego {
  iniciar(): void {
    console.log("Iniciando juego de cartas...");
  }
}
