import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        float lado,base,altura,radio,area,perimetro;
        int opcion;

        do {
            System.out.println("Menu de figuras");
            System.out.println("1. Cuadrado");
            System.out.println("2. Regtangulo");
            System.out.println("3. Circulo");
            System.out.println("4. Salir");

            opcion = teclado.nextInt();
        }
    }
}