let nombreCliente;
let cantidadAdultos;
let cantidadNinios;
let seleccionDestino;

const destino = [
	{
		Nombre: "Guajira",
		Precio: 1980000,
	},
	{
		Nombre: "Cañón del Chicamocha",
		Precio: 1600000,
	},
	{
		Nombre: "Llanos Orientales",
		Precio: 1500000,
	},
];

function esNumeroValido(numero, permitirCero = false) {
	return !isNaN(numero) && (permitirCero || numero > 0);
}

while (true) {
	nombreCliente = prompt("Ingrese el nombre del cliente:");
	if (!nombreCliente) {
		alert("El nombre del cliente no puede estar vacío.");
		continue;
	}

	seleccionDestino = parseInt(
		prompt(
			"Seleccione el destino (1. Guajira, 2. Cañón del Chicamocha, 3. Llanos Orientales): "
		)
	);

	if (seleccionDestino < 1 || seleccionDestino > 3 || isNaN(seleccionDestino)) {
		alert("Por favor, ingrese un valor correcto para el destino.");
		continue;
	}

	cantidadAdultos = parseInt(prompt("Ingrese el número de adultos:"));
	cantidadNinios = parseInt(prompt("Ingrese el número de niños:"));

	if (
		!esNumeroValido(cantidadAdultos) ||
		(cantidadAdultos === 0 && cantidadNinios > 1)
	) {
		alert(
			"La cantidad de adultos debe ser mayor a cero, y si la cantidad de adultos es cero, los niños no pueden ser más de uno."
		);
		continue;
	}

	if (
		!esNumeroValido(cantidadNinios, true) ||
		(cantidadAdultos === 0 && cantidadNinios > 1)
	) {
		alert(
			"La cantidad de niños debe ser cero o uno si la cantidad de adultos es cero."
		);
		continue;
	}

	break; // Salir del bucle si todos los valores son correctos
}

if (cantidadAdultos > 4 && cantidadNinios > 2) {
	console.log("Con Descuento");
	if (seleccionDestino >= 1 && seleccionDestino <= 3) {
		const totalAdultos = cantidadAdultos * destino[seleccionDestino - 1].Precio;
		const totalNinios =
			cantidadNinios * (destino[seleccionDestino - 1].Precio * 0.6);
		const desccuentoAdultos = totalAdultos * 0.2;
		const descuentoNinios = totalNinios * 0.2;
		console.log(desccuentoAdultos);
		console.log(descuentoNinios);
	}
} else {
	console.log("Sin Descuento");
	if (seleccionDestino >= 1 && seleccionDestino <= 3) {
		const totalAdultos = cantidadAdultos * destino[seleccionDestino - 1].Precio;
		const totalNinios =
			cantidadNinios * (destino[seleccionDestino - 1].Precio * 0.6);
		console.log(totalAdultos);
		console.log(totalNinios);
	}
}
