import Estudiante from "./estudiante.js";
import Persona from "./persona.js";
import Profesor from "./profesor.js";

const persona1 = new Persona(1, "Pérez", "Juan", 30, "Masculino");
persona1.imprimirDatos();

persona1.actualizarDatos({ nombre: "Carlos", edad: 35 });
persona1.imprimirDatos();

const estudiante1 = new Estudiante(
	2,
	"Andres",
	"Sanchez",
	27,
	"Masculino",
	"Desarrollo",
	300000,
	2500
);

estudiante1.imprimirDatos();
estudiante1.asistirClase();

const profesor1 = new Profesor(
	4,
	"Jorge",
	"Murielo",
	57,
	"Masculino",
	"Fijo",
	50000000
);

console.log(profesor1);

profesor1.imprimirDatos();
