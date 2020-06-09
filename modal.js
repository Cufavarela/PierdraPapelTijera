let nombre = document.getElementById("nombre");
let boton = document.getElementById("boton");
let jugadorPantalla = document.getElementById("jugador");
let modal = document.getElementById("miModal");
let mensaje = document.getElementById("mensaje");

let pibesNames = ["fede", "cufa", "tirri", "gordo", "fabri", "ruso", "roldi", "otto", "dela", "rober", "ale", "tincho", "kike", "quique", "enrique", "lio", "lucas", "el luxter", "luxter", "lukitas", "lince", "agus", "lucho", "peducho", "billy", "billie", "rami", "rama"];
let insultosPibes = ["Puto el que lee.", "Vos tenés de genio lo que Kike tiene de ingeniero, nada.", "No habrás cagado en el bidet, no?", "Quién cago en la maceta?",
     "Lucho se está quejando, no importa cuando leas esto.", "Por qué? Por qué sos tan pelotudo?", "A Giovi le voy a hacer 4 hijos.", "Rami se siente mal, no importa cuando leas esto.", "Pasó el tanque Silva y dijo que a Roldi le falta pelo.",
     "No te metas con Lio que te puede golpear con su billetera.", "Como te quedó la mano? - le dijo el árbol a Lio.", "Pasó el Tirri y dijo que sos un negro de mierda.", "No lavo el auto hace 3 meses y sigue más limpio que Cufa.",
     "Si a Rami le dieran un ascenso cada vez que se lesiona, sería CEO de Google.", "Lio, pasó Lisa Ann y preguntó como hacés para tener tantas tetas.",
     "Rubio Menemista.", "Esta noche me pongo duro como nalga de Agus.", "eeeeee emocionante.", "Sos mas trolo que el Lince que come avena y le salen hemorroides.", "Sos más negrero que Lio y Rober juntos.",
     "Kike correte, estamos jugando al fútbol.", "Sos más fantasma que Dela.", "Sos peor que discutir con Lucas.", "Sos peor que #laexperienciadorrego", ];


boton.addEventListener("click", startGame);

nombre.addEventListener("keyup", pressEnter);

function pressEnter (e) {
    if(e.keyCode === 13) {
        startGame();
    }
};

function startGame() {
    jugadorPantalla.innerHTML = nombre.value;
    modal.style.display = "none";
    paraInsultar();
};

function paraInsultar () {
    if (pibesNames.includes(nombre.value)) {
        let largoLista = insultosPibes.length;
        let indiceInsulto = Math.floor(Math.random() * largoLista);
        insultoElegido = insultosPibes[indiceInsulto];
        mensaje.innerHTML = insultoElegido;
    }
};




