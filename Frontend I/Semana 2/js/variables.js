// var nombre = "Tomas";
// console.log(nombre);
// var nombre = "Camilo";
// console.log(nombre);

// const salario = 1200;
// console.log(salario);

// realizar programa que lea dos nueros y los sume

// const numero1 = parseInt(prompt("ingrese un numero 1"));
// const numero2 = parseInt(prompt("ingrese un numero 2"));

// alert(numero1 + numero2);

//Factura
let nameCustomer;
let product;
let quantity;
let price;
let subtotal;
const discount = 0.2;
const tax = 0.19;
let discountValue;
let taxValue;
let neto;

// Ingreso de datos
nameCustomer = prompt("Cliente");
product = prompt("Producto");
quantity = parseInt(prompt("Cantidad"));
price = parseInt(prompt("Precio"));

// Operaciones
subtotal = quantity * price;
discountValue = subtotal * discount;
taxValue = (subtotal - discountValue) * tax;
neto = subtotal - discountValue + taxValue;

// Mostrar resultados en tabla ASCII
console.log("=====================================");
console.log("| Campo           | Valor           |");
console.log("=====================================");
console.log(`| Cliente         | ${nameCustomer.padEnd(15)} |`);
console.log(`| Producto        | ${product.padEnd(15)} |`);
console.log(`| Cantidad        | ${String(quantity).padEnd(15)} |`);
console.log(`| Precio          | $${String(price).padEnd(14)} |`);
console.log(`| Subtotal        | $${String(subtotal.toFixed(2)).padEnd(14)} |`);
console.log(
	`| Descuento (20%) | $${String(discountValue.toFixed(2)).padEnd(14)} |`
);
console.log(`| Impuesto (19%)  | $${String(taxValue.toFixed(2)).padEnd(14)} |`);
console.log(`| Neto a pagar    | $${String(neto.toFixed(2)).padEnd(14)} |`);
console.log("=====================================");

//Calcular una nomina

let employee = prompt("Nombre del empleado ");

let payroll = parseInt(prompt("Salario por mes "));

let regularExtraHours = parseInt(prompt("Horas extras"));
let nightExtraHours = parseInt(prompt("Horas extras"));

hoursPerMonth = parseInt(prompt("Horas por mes "));

let dayValue;
let hourValue;
