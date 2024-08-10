/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ejerciciovectores;

import java.util.Scanner;

/**
 *
 * @author desarrollo
 */
public class Impares {
    
    public static void main(String[] args) {
        
        Scanner leer = new Scanner(System.in);
        
        System.out.print("Ingresa el tamaño del vector ");
        
        int N = leer.nextInt();
        
        int[] vector = new int[N];
        
        System.out.println("Ingresa los elemento del vector");
        
        for (int i = 0; i < N; i++) {
            
            vector[i] = leer.nextInt();
            
        }
        
        int suma = 0;
        int contador = 0; 
        
        for (int i = 0; i < N; i+=2) {
            
            if (vector[i] % 2 != 0) {
                suma += vector[i];
                contador++;
            }
            
        }
        if (contador > 0 ) {
            double promedio = (double) suma / contador;
            
            System.out.println("promedio " + promedio);
            
        } else {
            System.out.println("No hay pares");
        }
        
        leer.close();
        
    }
    
    
    
    
}
