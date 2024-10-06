package org.example;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String producto;
        float valorNeto;
        int cantidad;
        boolean iva;
        float descuento;

        Scanner teclado = new Scanner(System.in);

        // Solicitar el nombre del producto
        System.out.print("Ingresar el nombre del producto: ");
        producto = teclado.nextLine();

        // Solicitar la cantidad
        System.out.print("Ingresar la cantidad: ");
        while (!teclado.hasNextInt()) {
            System.out.print("Por favor, ingrese un número entero para la cantidad: ");
            teclado.next(); // Limpiar entrada inválida
        }
        cantidad = teclado.nextInt();

        // Solicitar el valor del producto
        System.out.print("Valor del producto: ");
        while (!teclado.hasNextFloat()) {
            System.out.print("Por favor, ingrese un número válido para el valor del producto: ");
            teclado.next(); // Limpiar entrada inválida
        }
        valorNeto = teclado.nextFloat();

        // Solicitar el descuento
        System.out.print("Ingresar el descuento (en porcentaje): ");
        while (!teclado.hasNextFloat()) {
            System.out.print("Por favor, ingrese un número válido para el descuento: ");
            teclado.next(); // Limpiar entrada inválida
        }
        descuento = teclado.nextFloat();

        // Solicitar si se aplica IVA
        System.out.print("¿Se aplica IVA? (true/false): ");
        while (!teclado.hasNextBoolean()) {
            System.out.print("Por favor, ingrese 'true' o 'false' para IVA: ");
            teclado.next(); // Limpiar entrada inválida
        }
        iva = teclado.nextBoolean();

        // Crear la compra según el descuento
        Compra compra;
        if (descuento > 0 && descuento <= 20) {
            compra = new Compra(descuento, cantidad, producto, valorNeto);
        } else if (descuento > 20 ){
            compra = new Compra(cantidad, valorNeto, producto);
        } else {
            compra = new Compra(cantidad, valorNeto, producto, descuento, iva);
        }

        // Mostrar el valor total de la compra
        System.out.printf("El valor total de la compra es: %.2f%n", compra.valorTotal());

        // Cerrar el escáner
        teclado.close();
    }
}
