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
public class ImparesAleatorios {
    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        
        
        System.out.println("Numeros del vector");
        for (int i = 0; i < n; i++) {
            
            datos[i] = rnd.nextInt(1000);
            System.out.println(datos[i] + " ");
            
        }
        
        for (int i = 0; i < n; i++) {
            if( i % 2 == 0 && datos [i] % 2 ==1 ) {
                suma+=datos[i];
                cont++;
                
            }
        }
        if (cont == 0) 
            System.out.println("El promedio es 0");
    } else
}
