import Persona from "../js/persona.js";

class Profesor extends Persona {
	constructor(
		idPersona,
		nombre,
		apellido,
		edad,
		genero,
		tipoContrato,
		salario
	) {
		super(idPersona, apellido, nombre, edad, genero);
		this.tipoContrato = tipoContrato;
		this.salario = salario;
	}

	imprimirDatos() {
		console.log("** Profesor **");
		console.log(`${this.nombre}`);
		console.log(`${this.tipoContrato}`);
		console.log(`${this.salario}`);
	}
	actualizarDatos() {}
	calificar() {
		console.log("Todos tiene diez ");
	}
}

export default Profesor;
