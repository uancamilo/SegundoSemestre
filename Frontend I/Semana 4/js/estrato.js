// const studentName = prompt("Nombre del estudiante");

// const valorMatricula = parseFloat(prompt("Ingrese el valor de matricula"));

// const studentEstrato = parseInt(prompt("Ingrese el estrato"));

// console.log(studentName);
// console.log(studentEstrato);

// const descuentoEstrato1 = 0.4;
// const descuentoEstrato2 = 0.3;
// const descuentoEstrato3 = 0.1;
// const descuentoEstrato4 = 0.1;
// const descuentoEstrato5 = 0.2;
// const descuentoEstrato6 = 0.4;

// switch (studentEstrato) {
// 	case 1:
// 		valorApagar = valorMatricula * descuentoEstrato1 + valorMatricula;
// 		console.log(studentName, valorApagar);
// 		break;
// 	case 2:
// 		valorApagar = valorMatricula * descuentoEstrato1 + valorMatricula;
// 		console.log(studentName, valorApagar);
// 		break;
// 	case 3:
// 		valorApagar = valorMatricula * descuentoEstrato1 + valorMatricula;
// 		console.log(studentName, valorApagar);
// 		break;
// 	case 4:
// 		valorApagar = valorMatricula * descuentoEstrato1 + valorMatricula;
// 		console.log(studentName, valorApagar);
// 		break;
// 	case 5:
// 		valorApagar = valorMatricula * descuentoEstrato1 + valorMatricula;
// 		console.log(studentName, valorApagar);
// 		break;
// 	case 6:
// 		valorApagar = valorMatricula * descuentoEstrato1 + valorMatricula;
// 		console.log(studentName, valorApagar);
// 		break;

// 	default:
// 		break;
// }

const studentName = prompt("Nombre del estudiante");
const valorMatricula = parseFloat(prompt("Ingrese el valor de matrícula"));
const studentEstrato = parseInt(prompt("Ingrese el estrato"));

console.log(studentName);
console.log(studentEstrato);

// Arreglo con los descuentos según el estrato (índice 0 es para el estrato 1, etc.)
const descuentos = [0.4, 0.3, 0.1, 0.1, 0.2, 0.4];

// Verifica si el estrato ingresado es válido
if (studentEstrato >= 1 && studentEstrato <= 6) {
	const descuento = descuentos[studentEstrato - 1];
	const valorApagar = valorMatricula * (1 - descuento);
	console.log(studentName, valorApagar);
} else {
	console.log("Estrato no válido");
}

