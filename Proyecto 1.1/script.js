var attempts = 3;

var movies = [
  {
    title: "Los Vengadores",
    hint: "Es una película de super héroes",
    events: [
      "Invaden la Tierra con un ejército alienígena",
      "Los super héroes se pelean entre sí",
      "La película se basa en la ciudad de Nueva York"
    ],
    actors: [
      "actor1.jpg",
      "actor2.jpg",
      "actor3.jpg"
    ]
  },
  {
    title: "La Liga de la Justicia",
    hint: "Es una película de superhéroes que reúne a varios personajes icónicos.",
    events: [
      "Un grupo de superhéroes se une para enfrentar una amenaza global.",
      "La película presenta conflictos internos entre los miembros del equipo.",
      "La historia se desarrolla en diferentes ubicaciones, incluyendo Metrópolis y Gotham City.",
    ],
    actors: [
      "actor4.jpg",
      "actor5.jpg",
      "actor6.jpg"
    ]
  },
{
    títle: "Los Guardianes de la Galaxia",
    hint: "Es una película de superhéroes espaciales.",
    events: [
          "Un grupo de inadaptados se une para proteger la galaxia de una poderosa amenaza.",
          "La película combina acción con un tono humorístico y aventuras intergalácticas.",
          "La historia tiene lugar en diversos planetas y espacios cósmicos."
    ],
    actors: [
      "actor7.jpg",
      "actor8.jpg",
      "actor9.jpg"
  // Agrega más películas aquí
      ]
}];

var selectedMovie;

function selectRandomMovie() {
  var randomIndex = Math.floor(Math.random() * movies.length);
  selectedMovie = movies[randomIndex];
}

function initializeGame() {
  selectRandomMovie();
  document.getElementById("hint").textContent = "Pista: " + selectedMovie.hint;
  renderEventList();
  renderActorPhotos();
}

function renderEventList() {
  var eventList = document.getElementById("event-list-items");
  eventList.innerHTML = "";
  selectedMovie.events.forEach(function(event) {
    var li = document.createElement("li");
    li.textContent = event;
    eventList.appendChild(li);
  });
}

function renderActorPhotos() {
  var actorPhotos = document.getElementById("actor-photos-list");
  actorPhotos.innerHTML = "";
  selectedMovie.actors.forEach(function(actor) {
    var li = document.createElement("li");
    var img = document.createElement("img");
    img.src = actor;
    img.alt = "Actor";
    li.appendChild(img);
    actorPhotos.appendChild(li);
  });
}
    
    function checkGuess() {
      var guess = document.getElementById("guess").value;
      var result = document.getElementById("result");
      var eventList = document.getElementById("event-list");
      var actorPhotos = document.getElementById("actor-photos");
            var guess = document.getElementById("guess").value;
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

var timer;
var timeLimit = 60; // Tiempo límite en segundos

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
