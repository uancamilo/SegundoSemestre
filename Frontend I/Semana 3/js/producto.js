product = prompt("producto");
cant = parseInt(prompt("cantidad"));
precio = parseFloat(prompt("Precio"));

if(cant != 0 && cant < 10) {
    precioDescuento = precio * 0.07; 
    console.log(product+ " cuestan " +(precio - precioDescuento));
} else if (cant != 0 && cant >= 10 ) {
    precioDescuento  = precio * 0.12; 
    console.log(product + " cuestan " + (precio - precioDescuento));
}


