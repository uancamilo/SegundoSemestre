const peso = parseFloat(prompt("Ingresar el peso en kilogramos"));
const estatura = parseFloat(
	prompt("Cuál es la estatura de la persona en metros")
);

const calculo = (peso / (estatura * estatura)) * 100;
console.log(calculo);

if (calculo < 16) {
	console.log("Criterio de ingreso al hospital");
} else if (calculo >= 16 && calculo < 17) {
	console.log("Infrapeso");
} else if (calculo >= 17 && calculo < 18) {
	console.log("Bajo peso");
} else if (calculo >= 18 && calculo < 25) {
	console.log("Peso normal");
} else if (calculo >= 25 && calculo < 30) {
	console.log("Sobrepeso");
} else if (calculo >= 30 && calculo < 35) {
	console.log("Sobrepeso crónico");
} else if (calculo >= 35 && calculo < 40) {
	console.log("Obesidad premórbida");
} else if (calculo >= 40) {
	console.log("Obesidad mórbida");
}
