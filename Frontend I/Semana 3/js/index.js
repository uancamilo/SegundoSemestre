
let nameEst = "Paco"; 
let grade1, grade2, grade3, definitive; 
let comments; 
const percent1 = 0.2; 
const percent2 = 0.3; 
const percent3 = 0.5; 


nameEst = prompt("Nombre: "); 
grade1 = parseFloat(prompt("Nota 1")); 
grade2 = parseFloat(prompt("Nota 2")); 
grade3 = parseFloat(prompt("Nota 2"));

definitive = grade1 * percent1 + grade2 * percent2 + grade3 * percent3;

console.log(nameEst + definitive);

if (definitive < 3 ) {
    comments = "Perdio por vago"
} else {
    comments = "Ganaste la materia"
}

console.log(comments)