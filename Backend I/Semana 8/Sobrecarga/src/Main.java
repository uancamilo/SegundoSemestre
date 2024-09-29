import java.util.Scanner;


public class Main {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        float valHora, salNeto, porceDeduc;
        int opcion, nroHora;

        System.out.println("Digite numero horas");
        nroHora = teclado.nextInt();
        System.out.println("Digite valor salario");
        valHora = teclado.nextFloat();

        Salario salario = new Salario(valHora, nroHora);

        do {
            System.out.println("Menu salario neto");
            System.out.println("1. Salario a termino indefinido");
            System.out.println("2. Salario por prestacion de servicio");
            System.out.println("4. Salir");

            opcion = teclado.nextInt();

            switch (opcion) {
                case 1:
                    salNeto = salario.Calcular_Salario_Neto();
                    System.out.println("Salario neto: " + salNeto);
                    break;
                case 2:
                    System.out.println("Porcentaje a reducir");
                    porceDeduc = teclado.nextFloat();
                    salNeto = salario.Calcular_Salario_Neto(porceDeduc);
                    System.out.println("Salario por prestacion de servicio: " + salNeto);
                    break;
                case 4:
                    System.out.println("Saliendo del programa.");
                    break;
                default:
                    System.out.println("Opción no válida. Inténtelo de nuevo.");
                    break;
            }
        } while (opcion != 4);

        teclado.close();
    }
}