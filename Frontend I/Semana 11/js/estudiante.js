import Persona from "../js/persona.js";

class Estudiante extends Persona {
	constructor(
		idPersona,
		apellido,
		nombre,
		edad,
		genero,
		matriPrograma,
		valorMatricula
	) {
		super(idPersona, apellido, nombre, edad, genero);
		this.matriPrograma = matriPrograma;
		this.valorMatricula = valorMatricula;
	}

    imprimirDatos() {
        console.log("** Estudiante **")
		console.log(`Matricula Programa: ${this.matriPrograma}`);
		console.log(`Valor Matricula: ${this.valorMatricula}`);
	}

	asistirClase() {
		console.log("Estoy en clase");
	}
}

export default Estudiante;
