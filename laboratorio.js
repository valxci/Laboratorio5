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


// actividad 2


let frutas = ['manzana', 'banano', 'uva', 'pera', 'sandia', 'kiwi', 'naranja'];
console.log("Frutas:", frutas);

frutas.sort();
console.log("Frutas ordenadas:", frutas);

function SingularAPlural(palabra) {
  if (palabra.endsWith('s')) {
    return palabra;
  } else {
    return palabra + 's';
  }
}

let frutasPlural = [];
for (let fruta of frutas) {
  frutasPlural.push(SingularAPlural(fruta));
}
console.log("Frutas en plural:", frutasPlural);


function exist(nombre) {
  return frutas.includes(nombre);
}
console.log("¿Existe 'mango'?", exist("mango"));
console.log("¿Existe 'uva'?", existeFruta("uva")); 


let fruCortas = frutas.filter(fruta => fruta.length <= 4);
console.log("Frutas cortas (≤ 4 letras):", fruCortas);


function eliminarFruta(nombre) {
  let fru = frutas.indexOf(nombre);
  if (fru !== -1) {
    frutas.splice(fru, 1);
    return true;
  } else {
    return false;
  }
}
console.log("Eliminar 'pera':", eliminarFruta("pera")); 
console.log("Eliminar 'mango':", eliminarFruta("mango")); 
console.log("Frutas después de eliminar:", frutas);