let puntosPlayer = 0;
let puntosCompu = 0;
const puntosPlayer_span = document.getElementById("puntosPlayer");
const puntosCompu_span = document.getElementById("puntosCompu");
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
let resultado = document.getElementById("resultado");
let detalle = document.getElementById("detalle");

function compuChoices() {
    const opciones = ["piedra", "papel", "tijera"];
    let randomChoice = Math.floor(Math.random() * 3);
    return opciones[randomChoice];
};

function juego (playerChoice) {
    const compuChoice = compuChoices();

    if (playerChoice === compuChoice) {
        detalle.innerHTML = "Vamos de nuevo?";
        document.getElementById(playerChoice).classList.add("empate");
        setTimeout (function () {document.getElementById(playerChoice).classList.remove("empate")}, 500);
        empataste();
    } else if (playerChoice === "piedra" && compuChoice === "papel") {
        detalle.innerHTML = "Mi " + compuChoice + " mata tu asquerosa " + playerChoice;
        document.getElementById(playerChoice).classList.add("incorrecto");
        setTimeout (function () {document.getElementById(playerChoice).classList.remove("incorrecto")}, 500);
        perdiste ();
    } else if (playerChoice === "piedra" && compuChoice === "tijera") {
        detalle.innerHTML = "Tu asquerosa " + playerChoice + " mata mi bella " + compuChoice;
        document.getElementById(playerChoice).classList.add("correcto");
        setTimeout (function () {document.getElementById(playerChoice).classList.remove("correcto")}, 500);
        ganaste ();
    } else if (playerChoice === "papel" && compuChoice === "tijera") {
        detalle.innerHTML = "Mi útil " + compuChoice + " mata tu triste " + playerChoice;
        document.getElementById(playerChoice).classList.add("incorrecto");
        setTimeout (function () {document.getElementById(playerChoice).classList.remove("incorrecto")}, 500);
        perdiste ();
    } else if (playerChoice === "papel" && compuChoice === "piedra") {
        detalle.innerHTML = "Tu mugroso " + playerChoice + " mata mi bella " + compuChoice;
        document.getElementById(playerChoice).classList.add("correcto");
        setTimeout (function () {document.getElementById(playerChoice).classList.remove("correcto")}, 500);
        ganaste ();
    } else if (playerChoice === "tijera" && compuChoice === "piedra") {
        detalle.innerHTML = "Mi hermosa " + compuChoice + " mata tu triste " + playerChoice;
        document.getElementById(playerChoice).classList.add("incorrecto");
        setTimeout (function () {document.getElementById(playerChoice).classList.remove("incorrecto")}, 500);
        perdiste ();
    } else if (playerChoice === "tijera" && compuChoice === "papel") {
        detalle.innerHTML = "Tu sucia " + playerChoice + " mata mi perfecto " + compuChoice;
        document.getElementById(playerChoice).classList.add("correcto");
        setTimeout (function () {document.getElementById(playerChoice).classList.remove("correcto")}, 500);
        ganaste ();
    }
};

function playerChoices () {
    piedra.addEventListener("click", function() {
        juego("piedra");
    })

    papel.addEventListener("click", function() {
        juego("papel");
    })

    tijera.addEventListener("click", function() {
        juego("tijera");
    })
};

playerChoices();

function ganaste () {
    puntosPlayer++;
    puntosPlayer_span.innerHTML = puntosPlayer;
    puntosCompu_span.innerHTML = puntosCompu;
    resultado.innerHTML = "GANASTE";
    resultado.classList.add("correcto2");
    setTimeout (function () {resultado.classList.remove("correcto2")}, 500);
    paraInsultar();
};

function perdiste () {
    puntosCompu++;
    puntosPlayer_span.innerHTML = puntosPlayer;
    puntosCompu_span.innerHTML = puntosCompu;
    resultado.innerHTML = "PERDISTE";
    resultado.classList.add("incorrecto2");
    setTimeout (function () {resultado.classList.remove("incorrecto2")}, 500);
    paraInsultar();
};

function empataste () {
    puntosPlayer_span.innerHTML = puntosPlayer;
    puntosCompu_span.innerHTML = puntosCompu;
    resultado.innerHTML = "EMPATAMOS";
};

