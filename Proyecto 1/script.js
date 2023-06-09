var attempts = 3;
var timer;
var timeLimit = 60; // Tiempo límite en segundos
    
    function checkGuess() {
      var guess = document.getElementById("guess").value;
      var result = document.getElementById("result");
      var eventList = document.getElementById("event-list");
      var actorPhotos = document.getElementById("actor-photos");
      startTimer()
      if (guess.trim() === "") {
        alert("Por favor, ingresa tu respuesta antes de enviar.");
        return;
      }

      if (guess.toLowerCase() === "los vengadores") {
        result.textContent = "¡Correcto! ¡Has adivinado la película de los Vengadores!";
        eventList.style.display = "none";
        actorPhotos.style.display = "none";
      } else {
        attempts--; //decrementar los intentos -1
        result.textContent = "Incorrecto. Intenta de nuevo.";
        document.getElementById("attempts").textContent = "Intentos restantes: " + attempts;
        
        if (attempts === 2) {
          eventList.style.display = "block";
        } else if (attempts === 1) {
          actorPhotos.style.display = "block";
        } else {
          result.textContent = "No has adivinado. El juego ha terminado.";
eventList.style.display = "none";
actorPhotos.style.display = "none";
document.getElementById("guess").disabled = true;
}
}
document.getElementById("guess").value = "";
}


function startTimer() {
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
  result.textContent = "Tiempo agotado. El juego ha terminado.";
  eventList.style.display = "none";
  actorPhotos.style.display = "none";
  document.getElementById("guess").disabled = true;
  showAnswer(); // Mostrar la respuesta correcta o realizar otra acción adicional
}

function restartGame() {
  attempts = 3;
  result.textContent = "";
  document.getElementById("attempts").textContent = "Intentos restantes: " + attempts;
  document.getElementById("guess").disabled = false;
  document.getElementById("guess").value = "";
  eventList.style.display = "none";
  actorPhotos.style.display = "none";
  startTimer(); // Reinicia el temporizador si lo has agregado

}
function showAnswer() {
  var answer = "Los Vengadores";
  var answerElement = document.getElementById("answer");
  answerElement.textContent = "La respuesta correcta es: " + answer;
}