const datosDocentes = [
	{ categoria: "PH", valor: 60000 },
	{ categoria: "Magister", valor: 50000 },
	{ categoria: "Especialista", valor: 40000 },
	{ categoria: "Profesional", valor: 30000 },
];

const bonificacion = [0.3, 0.5, 0.6, 0.9];

let cantidadDocentes = parseInt(prompt("Cantidad de docentes"));
let nominaDocentes = 0;
let acumuladorDatos = [];

while (nominaDocentes < cantidadDocentes) {
	let nombreDocente = prompt("Ingresa el nombre del docente:");
	let horasQuincena = parseInt(prompt("Horas trabajadas"));
	let ingresoCategoria =
		parseInt(
			prompt(
				"Seleccione categoria:\n1. PH\n2. Magister\n3. Especialista\n4. Profesional"
			)
		) - 1;
	let antiguedadDocente =
		parseInt(
			prompt(
				"Seleccione antigüedad en años:\n1. Menos de dos años\n2. Entre 2 y 5\n3. Entre 5 y 10\n4. Más de diez"
			)
		) - 1;

	acumuladorDatos.push({
		nombre: nombreDocente,
		horas: horasQuincena,
		categoria: ingresoCategoria,
		antiguedad: antiguedadDocente,
	});
	nominaDocentes++;
}

let calculoDocentes = [];

for (let i = 0; i < acumuladorDatos.length; i++) {
	let docente = acumuladorDatos[i];
	let valorPorHora = 0;

	if (docente.categoria >= 0 && docente.categoria < datosDocentes.length) {
		valorPorHora = datosDocentes[docente.categoria].valor;
	}

	let valorBonificiacion = 0;
	if (docente.antiguedad >= 0 && docente.antiguedad < bonificacion.length) {
		valorBonificiacion = bonificacion[docente.antiguedad];
	}

	if (docente.categoria >= 0 && docente.categoria < datosDocentes.length) {
		docente.categoria = datosDocentes[docente.categoria].categoria;
	}

	if (docente.antiguedad === 0) {
		docente.antiguedad = "Menos de 2 años";
	} else if (docente.antiguedad === 1) {
		docente.antiguedad = "Entre 2 y 5 años";
	} else if (docente.antiguedad === 2) {
		docente.antiguedad = "Entre 5 y 10 años";
	} else if (docente.antiguedad === 3) {
		docente.antiguedad = "Más de 10 años";
	}

	docente.quincena = docente.horas * valorPorHora;
	docente.bonificacion = docente.quincena * valorBonificiacion;

	calculoDocentes.push(docente);
}

let totalQuincenas = 0;

for (let i = 0; i < calculoDocentes.length; i++) {
	totalQuincenas += calculoDocentes[i].quincena;
}

console.log(calculoDocentes);

console.log("Total de quincenas: " + totalQuincenas);
