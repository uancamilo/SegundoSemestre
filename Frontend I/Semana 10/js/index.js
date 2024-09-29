import Persona from "./persona.js";

const persona1 = new Persona(1, "Pérez", "Juan", 30, "Masculino");
persona1.imprimirDatos();

persona1.actualizarDatos({ nombre: "Carlos", edad: 35 });
persona1.imprimirDatos();