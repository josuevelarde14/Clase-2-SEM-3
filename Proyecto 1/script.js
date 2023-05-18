var attempts = 3;
    
    function checkGuess() {
      var guess = document.getElementById("guess").value;
      var result = document.getElementById("result");
      var eventList = document.getElementById("event-list");
      var actorPhotos = document.getElementById("actor-photos");
      
      if (guess.toLowerCase() === "Los vengadores") {
        result.textContent = "¡Correcto! ¡Has adivinado la película de los Vengadores!";
        eventList.style.display = "none";
        actorPhotos.style.display = "none";
      } else {
        attempts--;
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