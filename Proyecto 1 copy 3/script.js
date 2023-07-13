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
  }
];

window.onload = function () {
  startGame();
};

function startGame() {
  currentMovieIndex = getRandomIndex(movies.length); // Seleccionar un índice de película aleatorio
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

  if (guess.trim() === "") {
    alert("Por favor, ingresa tu respuesta antes de enviar."); // Alerta si el campo de respuesta está vacío
    return;
  }

  if (guess.toLowerCase() === movies[currentMovieIndex].title.toLowerCase()) {
    // Comprobar si la respuesta es correcta
    result.textContent = "¡Correcto! ¡Has adivinado la película " + movies[currentMovieIndex].title + "!";
    result.style.color = "green";

    if (currentMovieIndex === movies.length - 1) {
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

  if (attempts === 1) {
    hint.textContent = "Última pista: ";
    eventList.innerHTML = "";
    actorPhotos.innerHTML = "<p>Actores de la película:</p>";
    var actorImages = movies[currentMovieIndex].actorImages;
    for (var j = 0; j < actorImages.length; j++) {
      actorPhotos.innerHTML +=
        "<img src='" + actorImages[j] + "' alt='Actor " + (j + 1) + "'>";
    }
  } else {
    hint.textContent = "Pista: " + movies[currentMovieIndex].hints[attempts - 1];
    eventList.innerHTML = "<p>Sucesos en la película:</p><ul>";
    for (var i = 0; i < attempts - 1; i++) {
      eventList.innerHTML += "<li>" + movies[currentMovieIndex].hints[i] + "</li>";
    }
    eventList.innerHTML += "</ul>";
  }

  if (attempts === 2) {
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
  document.getElementById("guess").value = "";
}

function startTimer() {
  clearInterval(timer); // Limpiar el temporizador existente, si lo hay
  timeLimit = 60; // Restablecer el tiempo límite a 60 segundos

  timer = setInterval(function () {
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
  attempts = 3; // Restablecer el número de intentos
  document.getElementById("result").textContent = "";
  document.getElementById("result").style.color = "inherit";
  document.getElementById("attempts").textContent = "Intentos restantes: " + attempts;
  document.getElementById("guess").disabled = false;
  document.getElementById("guess").value = "";
  document.getElementById("event-list").style.display = "none";
  document.getElementById("actor-photos").style.display = "none";

  startGame(); // Reiniciar el juego
}