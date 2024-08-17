// Solicitar la nota al usuario y convertirla a número
let nota = parseFloat(prompt("Introduce la nota entre 1 y 5"));

// Verificar la nota y mostrar el mensaje correspondiente
if (nota >= 4.5 && nota <= 5) {
    console.log("Eres genial");
} else if (nota > 4.0 && nota < 4.5) {
    console.log("Sobresaliente");
} else if (nota > 3.0 && nota < 4.0) {
    console.log("Ganó muy bien");
} else if (nota > 2.0 && nota < 3.0) {
    console.log("Puede recuperar");
} else if (nota > 0 && nota < 2.0) {
    console.log("Perdió por vago");
} else {
    console.log("Nota fuera de rango. Introduce una nota entre 1 y 5.");
}
