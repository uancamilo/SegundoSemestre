// Solicitar el día al usuario
let dia = parseInt(prompt("Ingrese el día (1-7)"), 10); // Convertir a número entero

// Verificar el día ingresado y mostrar el nombre correspondiente
if (dia === 1) {
    console.log("Lunes");
} else if (dia === 2) {
    console.log("Martes");
} else if (dia === 3) {
    console.log("Miércoles");
} else if (dia === 4) {
    console.log("Jueves");
} else if (dia === 5) {
    console.log("Viernes");
} else if (dia === 6) {
    console.log("Sábado");
} else if (dia === 7) {
    console.log("Domingo");
} else {
    console.log("Día incorrecto. Ingrese un número entre 1 y 7.");
}


