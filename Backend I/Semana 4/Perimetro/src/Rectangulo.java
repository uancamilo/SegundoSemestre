public class Rectangulo {
    private double ancho;
    private double alto;

    public Rectangulo(double ancho, double alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    public double calcularArea() {
        return ancho * alto;
    }

    public static void main(String[] args) {
        Rectangulo rectangulo = new Rectangulo(5, 3);
        double area = rectangulo.calcularArea();
        System.out.println("El área del rectángulo es: " + area);
    }
}
