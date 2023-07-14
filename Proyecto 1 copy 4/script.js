var attempts = 3; // Número de intentos iniciales
var timer; // Variable para el temporizador
var timeLimit = 60; // Tiempo límite en segundos
var currentMovieIndex; // Índice de la película actual
var movies = [
  {
    title: "Los Vengadores",
    hints: [
      "Invaden la Tierra con un ejército alienígena",
      "Los super héroes se pelean entre sí",
      "La película se basa en la ciudad de Nueva York"
    ],
    actorImages: ["actor1.jpg", "actor2.jpg", "actor3.jpg"]
  },
  {
    title: "Titanic",
    hints: [
      "La película se desarrolla en un famoso barco",
      "Una historia de amor trágica en medio del desastre",
      "Ganó varios premios Oscar"
    ],
    actorImages: ["actor4.jpg", "actor5.jpg", "actor6.jpg"]
  },
  {
    title: "Mad Max",
    hints: [
      "Una película post-apocalíptica",
      "El protagonista maneja un icónico vehículo",
      "Escenas de acción y persecuciones en el desierto"
    ],
    actorImages: ["actor7.jpg", "actor8.jpg", "actor9.jpg"]
  },
  {
    title: "Star Wars",
    hints: [
      "Una saga épica de ciencia ficción",
      "Batallas espaciales y jedis",
      "El personaje principal es Luke Skywalker"
    ],
    actorImages: ["actor10.jpg", "actor11.jpg", "actor12.jpg"]
  },
  {
    title: "Matrix",
    hints: [
      "Un mundo virtual generado por computadora",
      "Lucha contra las máquinas",
      "La píldora roja o la azul"
    ],
    actorImages: ["actor13.jpg", "actor14.jpg", "actor15.jpg"]
  }
];

window.onload = function () {
  startGame();
};

function startGame() {
  currentMovieIndex = 0; // Comenzar con la primera película
  updateHint(); // Actualizar la pista mostrada al jugador
  startTimer(); // Iniciar el temporizador
}

function getRandomIndex(max) {
  return Math.floor(Math.random() * max); // Generar un índice aleatorio entre 0 y max-1
}

function checkGuess() {
  var guess = document.getElementById("guess").value; // Obtener la respuesta del jugador
  var result = document.getElementById("result");
  var hint = document.getElementById("hint");
  var eventList = document.getElementById("event-list");
  var actorPhotos = document.getElementById("actor-photos");

//En la función checkGuess(), se realiza lo siguiente:

  if (guess.trim() === "") {
    alert("Por favor, ingresa tu respuesta antes de enviar."); // Alerta si el campo de respuesta está vacío
    return;
  }

  if (guess.toLowerCase() === movies[currentMovieIndex].title.toLowerCase()) {
    // Comprobar si la respuesta es correcta
    result.textContent = "¡Correcto! ¡Has adivinado la película " + movies[currentMovieIndex].title + "!";
    result.style.color = "green";

    // Mostrar mensaje para adivinar la siguiente película
    var message = document.getElementById("message");
    message.textContent = "¡Sigue adivinando la siguiente película!";
    message.style.color = "white";

    if (currentMovieIndex === movies.length - 1) { //el movies.length cuenta de 1 por eso le resto 1, si es la ultima pelicula me bota eso
      // Si se ha adivinado todas las películas
      eventList.style.display = "none";
      actorPhotos.style.display = "none";
      clearInterval(timer); // Detener el temporizador
      document.getElementById("timer").textContent = "Tiempo restante: 0 segundos";
      document.getElementById("attempts").textContent = "¡Felicidades! Has adivinado todas las películas.";
    } else {
      currentMovieIndex++; // Pasar a la siguiente película
      updateHint(); // Actualizar la pista mostrada al jugador
      resetGuessInput(); // Restablecer el campo de entrada de texto
    }
  } else {
    attempts--; // Decrementar los intentos restantes en 1
    result.textContent = "Incorrecto. Intenta de nuevo.";
    result.style.color = "red";
    document.getElementById("attempts").textContent =
      "Intentos restantes: " + attempts;

    if (attempts === 0) {
      result.textContent = "No has adivinado. El juego ha terminado.";
      result.style.color = "red";
      eventList.style.display = "none";
      actorPhotos.style.display = "none";
      document.getElementById("guess").disabled = true;
      clearInterval(timer); // Detener el temporizador
      document.getElementById("timer").textContent = "Tiempo restante: 0 segundos";
      showAnswer(); // Mostrar la respuesta correcta
    } else {
      updateHint(); // Actualizar la pista mostrada al jugador
    }
  }

  resetGuessInput(); // Restablecer el campo de entrada de texto
}

function updateHint() {
  var hint = document.getElementById("hint");
  var eventList = document.getElementById("event-list");
  var actorPhotos = document.getElementById("actor-photos");

  if (attempts === 1) { //es igual a 1, se realiza lo siguiente
    hint.textContent = "Última pista: ";
    eventList.innerHTML = "";
    actorPhotos.innerHTML = "<p>Actores de la película:</p>"; //solo se muestra imagenes
    var actorImages = movies[currentMovieIndex].actorImages;  //Se obtiene el arreglo actorImages que contiene las imágenes correspondiente a currentMovieIndex
    for (var j = 0; j < actorImages.length; j++) { //Este bucle itera sobre el arreglo actorImages y genera código HTML para mostrar imágenes con el id "actor-photos".
      actorPhotos.innerHTML +=
        "<img src='" + actorImages[j] + "' alt='Actor " + (j + 1) + "'>";
    }


 //ctualizar el texto del elemento hint con una pista relacionada con la película actual, 
 //y también actualiza el contenido HTML del elemento eventList para mostrar una lista de sucesos en la película. 
 //Cada suceso se obtiene del arreglo movies[currentMovieIndex].hints y se agrega a la lista desordenada utilizando etiquetas HTML.   
  } else { //dentro de la función updateHint() y se ejecuta cuando el número de intentos restantes (attempts) no es igual a 1.
    hint.textContent = "Pista: " + movies[currentMovieIndex].hints[attempts - 1];
    eventList.innerHTML = "<p>Sucesos en la película:</p><ul>";
    for (var i = 0; i < attempts - 1; i++) {
      eventList.innerHTML += "<li>" + movies[currentMovieIndex].hints[i] + "</li>";
    }
    eventList.innerHTML += "</ul>";
  }

  if (attempts === 2) { //Se verifica si attempts es igual a 2 o 1 y segun eso se muestra
    eventList.style.display = "block";
  } else if (attempts === 1) {
    actorPhotos.style.display = "block";
  }
}

function showAnswer() {
  var answer = movies[currentMovieIndex].title;
  var answerElement = document.getElementById("answer");
  answerElement.textContent = "La respuesta correcta es: " + answer;
  answerElement.style.color = "white";
}

function resetGuessInput() {
  document.getElementById("guess").value = ""; //restablecer el campo de entrada de texto del juego
}

function startTimer() {
  clearInterval(timer); // Limpiar el temporizador existente, si lo hay
  timeLimit = 60; // Restablecer el tiempo límite a 60 segundos

  timer = setInterval(function () { //crear un temporizador que se ejecuta repetidamente cada segundo
    timeLimit--;
    if (timeLimit <= 0) {
      clearInterval(timer);
      endGame(); // Finalizar el juego cuando se agota el tiempo
    }
    document.getElementById("timer").textContent = "Tiempo restante: " + timeLimit + " segundos";
  }, 1000); // Se ejecuta cada segundo
}

function endGame() {
  var result = document.getElementById("result");
  var eventList = document.getElementById("event-list");
  var actorPhotos = document.getElementById("actor-photos");

  result.textContent = "Tiempo agotado. El juego ha terminado.";
  result.style.color = "red";
  eventList.style.display = "none";
  actorPhotos.style.display = "none";
  document.getElementById("guess").disabled = true;

  if (attempts !== 0) {
    showAnswer(); // Mostrar la respuesta correcta solo si los intentos no han llegado a cero
  }
}

function restartGame() {
  var audio = document.getElementById("background-audio");
  audio.pause();
  attempts = 3; // Restablecer el número de intentos
  document.getElementById("result").textContent = "";
  document.getElementById("result").style.color = "inherit";
  document.getElementById("attempts").textContent = "Intentos restantes: " + attempts;
  document.getElementById("guess").disabled = false;
  document.getElementById("guess").value = "";
  document.getElementById("event-list").style.display = "none";
  document.getElementById("actor-photos").style.display = "none";


  startGame(); // Reiniciar el juego
  audio.play();
}