//Piedra papel y tijera

const opciones = ["PIEDRA", "PAPEL", "TIJERA"];
let jugar = "S";

while (jugar === "S") {

    const randommm = Math.floor(Math.random() * 3);
    const maquina = opciones[randommm];

    let elegir = prompt("Elige PIEDRA, PAPEL o TIJERA:");

    if (!elegir) {
        console.log ("ERROR. Por favor, intenta de nuevo");
        continue;
    }

    elegir = elegir.toUpperCase();

    if (!opciones.includes(elegir)) {
        console.log ("Elige solo: PIEDRA, PAPEL O TIJERA.");
        continue;
    }

    console.log("Usuario eligió: " + elegir);
    console.log("Computadora eligió: " + maquina);

    if (elegir === maquina) {
        console.log("¡ESTAMOS EMPATADOS! :P");
    } else if (
        (elegir === "PIEDRA" && maquina === "TIJERA") ||
        (elegir === "PAPEL" && maquina === "PIEDRA") ||
        (elegir === "TIJERA" && maquina === "PAPEL")
    ) {
        console.log("FELICIDADES GANASTE :))");
    } else {
        console.log("LO SIENTO PERDISTE :c");
    }

    jugar = prompt("¿Quieres jugar de nuevo? (S/N)").toUpperCase();
}

console.log("Gracias por jugar nos vemos luego");



// let frutas = ['manzana', 'banano', 'uva', 'pera', 'sandia', 'kiwi', 'naranja']
// console.log(frutas.sort())

// function singularAPlural( palabra){
//     if (palabra.endsWhith("s"))
//         return palabra + "s"

// }

// console.log (singularAPlural(frutas[3]))