// Solicitar el día al usuario
let dia = parseInt(prompt("Ingrese el día (1-7)"), 10); // Convertir a número entero en base decimal

// Verificar el día ingresado y mostrar el nombre correspondiente usando switch
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día incorrecto. Ingrese un número entre 1 y 7.");
        break;
}
