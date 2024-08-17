package ejerciciovectores;

import java.util.Random;
import java.util.Scanner;

public class ImparesAleatorios {
    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        Random rnd = new Random();

        // Solicitar tamaño del vector
        System.out.print("Ingrese el tamaño del vector: ");
        int n = leer.nextInt();

        int[] datos = new int[n];
        int suma = 0;
        int cont = 0;

        System.out.println("Números del vector:");
        for (int i = 0; i < n; i++) {
            datos[i] = rnd.nextInt(1000);
            System.out.print(datos[i] + " ");
        }
        System.out.println(); // Salto de línea después de imprimir los números

        // Sumar elementos impares en posiciones pares
        for (int i = 0; i < n; i++) {
            if (i % 2 == 0 && datos[i] % 2 == 1) {
                suma += datos[i];
                cont++;
            }
        }

        // Calcular y mostrar el promedio
        if (cont == 0) {
            System.out.println("El promedio es 0");
        } else {
            double promedio = (double) suma / cont;
            System.out.println("El promedio de los números impares en posiciones pares es: " + promedio);
        }
    }
}
