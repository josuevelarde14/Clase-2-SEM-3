var attempts = 3;
var timer;
var timeLimit = 60; // Tiempo límite en segundos


peliculas=["los vengadores","titanic","madmax"]
peliculaescogida=Math.floor((Math.random() * (2 - 0 + 1)) + 0)

console.log(peliculas[peliculaescogida]);

window.onload = function() {
  startTimer();
};
    
// Sucesos en la película
var eventList = document.getElementById("event-list");
var eventListContent = [
  "Invaden la Tierra con un ejército alienígena",
  "Los super heroes se pelean entre sí",
  "La película se basa en la ciudad de Nueva York"
];

var eventListHTML = "<p>Sucesos en la película:</p><ul>";
for (var i = 0; i < eventListContent.length; i++) {
  eventListHTML += "<li>" + eventListContent[i] + "</li>";
}
eventListHTML += "</ul>";
eventList.innerHTML = eventListHTML;

// Actores de la película
var actorPhotos = document.getElementById("actor-photos");
var actorPhotosHTML = "<p>Actores de la película:</p>";
var actorImages = ["actor1.jpg", "actor2.jpg", "actor3.jpg"];
for (var j = 0; j < actorImages.length; j++) {
  actorPhotosHTML += "<img src='" + actorImages[j] + "' alt='Actor " + (j + 1) + "'>";
}
actorPhotos.innerHTML = actorPhotosHTML;

function checkGuess() {
  var guess = document.getElementById("guess").value;
  var result = document.getElementById("result");
  var eventList = document.getElementById("event-list");
  var actorPhotos = document.getElementById("actor-photos");

  if (guess.trim() === "") {
    alert("Por favor, ingresa tu respuesta antes de enviar.");
    return;
  }
  
  if (guess.toLowerCase() === peliculas[peliculaescogida]) {
    result.textContent = "¡Correcto! ¡Has adivinado la película " + peliculas[peliculaescogida];
    eventList.style.display = "none";
    actorPhotos.style.display = "none";
    clearInterval(timer); //Detener el temporizador
    document.getElementById("timer").textContent = "Tiempo restante: 0 segundos";
    document.getElementById("attempts").textContent = "Intentos restantes 0"
  } else {
    attempts--; //decrementar los intentos -1
    result.textContent = "Incorrecto. Intenta de nuevo.";
    document.getElementById("attempts").textContent = "Intentos restantes: " + attempts;
    
    if (attempts === 0 && timeLimit > 0) {
      result.textContent = "No has adivinado. El juego ha terminado.";
      eventList.style.display = "none";
      actorPhotos.style.display = "none";
      document.getElementById("guess").disabled = true;
      clearInterval(timer); //Detener el temporizador
      document.getElementById("timer").textContent = "Tiempo restante: 0 segundos";
      showAnswer(); // Mostrar la respuesta correcta
    } else if (attempts === 2) {
      eventList.style.display = "block";
    } else if (attempts === 1) {
      actorPhotos.style.display = "block";
    }
  }
  
  document.getElementById("guess").value = "";
}


function startTimer() {
  clearInterval(timer);// Limpiar el temporizador existente, si lo hay
  timeLimit = 60; //Restablecer el tiempo limite a 60 segundos
  
  timer = setInterval(function() {
    timeLimit--;
    if (timeLimit <= 0) {
      clearInterval(timer);
      endGame();
    }
    document.getElementById("timer").textContent = "Tiempo restante: " + timeLimit + " segundos";
  }, 1000); //se ejecuta cada segundo
}

function endGame() {
  var result = document.getElementById("result");
  var eventList = document.getElementById("event-list");
  var actorPhotos = document.getElementById("actor-photos");

  result.textContent = "Tiempo agotado. El juego ha terminado.";
  eventList.style.display = "none";
  actorPhotos.style.display = "none";
  document.getElementById("guess").disabled = true;
  
  if (attempts !== 0) {
    showAnswer(); // Mostrar la respuesta correcta solo si los intentos no han llegado a cero
  }
}

function restartGame() {
  attempts = 3;
  document.getElementById("result").textContent = "";
  document.getElementById("attempts").textContent = "Intentos restantes: " + attempts;
  document.getElementById("guess").disabled = false;
  document.getElementById("guess").value = "";
  document.getElementById("event-list").style.display = "none";
  document.getElementById("actor-photos").style.display = "none";

  startTimer(); // Reinicia el temporizador llamando a la función startTimer()

}
function showAnswer() {
  var answer = "Los Vengadores";
  var answerElement = document.getElementById("answer");
  answerElement.textContent = "La respuesta correcta es: " + answer;
}