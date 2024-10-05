class Persona {
	constructor(idPersona, apellido, nombre, edad, genero) {
		this.idPersona = idPersona;
		this.apellido = apellido;
		this.nombre = nombre;
		this.edad = edad;
		this.genero = genero;
	}

	imprimirDatos() {
		console.log("Datos de la persona ");
		console.log(`Nombre -----> ${this.nombre}`);
		console.log(`Apellido -----> ${this.apellido}`);
		console.log(`Edad -----> ${this.edad}`);
		console.log(`Género -----> ${this.genero}`);
	}

	actualizarDatos(nuevosDatos) {
		if (nuevosDatos.apellido) this.apellido = nuevosDatos.apellido;
		if (nuevosDatos.nombre) this.nombre = nuevosDatos.nombre;
		if (nuevosDatos.edad) this.edad = nuevosDatos.edad;
		if (nuevosDatos.genero) this.genero = nuevosDatos.genero;
	}
}

export default Persona;
