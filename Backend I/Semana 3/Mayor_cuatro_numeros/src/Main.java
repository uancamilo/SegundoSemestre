import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner leer = new Scanner(System.in);

        Numeros objMayor = new Numeros();
        int n1,n2,n3,n4,may1,may2,mayor;
        System.out.println("Numero 1");
        n1 = leer.nextInt();
        System.out.println("Numero 2");
        n2 = leer.nextInt();
        System.out.println("Numero 3");
        n3 = leer.nextInt();
        System.out.println("Numero 4");
        n4 = leer.nextInt();

        may1 = objMayor.Hallar_numero_mayor(n1,n2);
        may2 = objMayor.Hallar_numero_mayor(n3,n4);

        mayor = objMayor.Hallar_numero_mayor(may1,may2);

        System.out.println("El ganador es: " + mayor);



    }

}