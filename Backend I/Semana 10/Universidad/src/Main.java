import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        Matricula matricula = new Matricula();

        // Leer los datos
        System.out.print("Número de Materias: ");
        int nro_materias = teclado.nextInt();

        System.out.print("Valor de cada materia: ");
        float val_materia = teclado.nextFloat();

        System.out.print("Código: ");
        String codigo = teclado.next();

        System.out.print("Nombre: ");
        String nombre = teclado.next();

        System.out.print("Sexo: ");
        String sexo = teclado.next();

        System.out.print("Técnica: ");
        String tecnica = teclado.next();

        System.out.print("Edad: ");
        int edad = teclado.nextInt();

        // Asignar la información al objeto
        matricula.setNro_materias(nro_materias);
        matricula.setVal_materia(val_materia);
        matricula.setCodigo(codigo);
        matricula.setNombre(nombre);
        matricula.setSexo(sexo);
        matricula.setTecnica(tecnica);
        matricula.setEdad(edad);

        // Realizar la operación
        matricula.calcular_matricula();

        // Mostrar el valor bruto de la matrícula
        System.out.println("Valor Bruto de la Matrícula: " + matricula.getValor_bruto());

        matricula.calcular_valor_neto();

        System.out.println("valor neto " + matricula.getValor_neto());

        teclado.close(); // Cerrar el Scanner
    }
}
