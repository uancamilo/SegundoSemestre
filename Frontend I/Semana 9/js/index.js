function Saludar() {
  console.log("Hola");
}

Saludar();

function Suma() {
  let numero1 = 83;
  let numero2 = 127;
  let suma = numero1 + numero2;
  return suma;
}

function Suma2(numero1, numero2) {
  let suma = numero1 + numero2;
  return suma;
}

console.log(Suma());

function Suma3(numero1, numero2) {
  return numero1 + numero2;
}

const productos = [
    {
        "nombre": "Manzana",
        "precio": 1.20,
        "categoria": "Frutas",
        "descuento": 0.10, // 10% de descuento
        "iva": 0.05 // 5% de IVA
    },
    {
        "nombre": "Leche",
        "precio": 0.90,
        "categoria": "Lácteos",
        "descuento": 0.05, // 5% de descuento
        "iva": 0.05 // 5% de IVA
    },
    {
        "nombre": "Pan",
        "precio": 1.50,
        "categoria": "Panadería",
        "iva": 0.05 // 5% de IVA
    },
    {
        "nombre": "Arroz",
        "precio": 2.00,
        "categoria": "Granos",
        "descuento": 0.20, // 20% de descuento
        "iva": 0.19 // 19% de IVA
    },
    {
        "nombre": "Pollo",
        "precio": 5.00,
        "categoria": "Carnes",
        "descuento": 0.50, // 10% de descuento
        "iva": 0.19 // 19% de IVA
    },
    {
        "nombre": "Zanahoria",
        "precio": 0.80,
        "categoria": "Verduras",
        "iva": 0.19 // 19% de IVA
    },
    {
        "nombre": "Queso",
        "precio": 3.00,
        "categoria": "Lácteos",
        "descuento": 0.30, // 10% de descuento
        "iva": 0.19 // 19% de IVA
    },
    {
        "nombre": "Aceite de oliva",
        "precio": 4.50,
        "categoria": "Condimentos",
        "iva": 0.19 // 19% de IVA
    },
    {
        "nombre": "Cereal",
        "precio": 3.50,
        "categoria": "Desayunos",
        "iva": 0.19 // 19% de IVA
    },
    {
        "nombre": "Galletas",
        "precio": 2.50,
        "categoria": "Snacks",
        "descuento": 0.25, // 10% de descuento
        "iva": 0.19 // 19% de IVA
    }
];


const prefactura = productos.map((producto) =>  {producto.nombre}
)

console.log(prefactura)

function factura (productos) {

    console.log(productos.length);

    for (let index = 0; index < productos.length; index++) {
        let nombreProducto = productos[index].nombre;
        let precioProducto = productos[index].precio;
        console.log(productos[index].descuento);
        console.log(productos[index].iva);
    }

    const 




    
}

factura(productos);


