public class Cuadrado  extends Figuras{

    private float lado ;

    public Cuadrado(float lado) {
        this.lado = lado;
    }

    @Override
    public float Hallar_area() {
        return lado * lado;
    }

    @Override
    public float Hallar_perimetro() {
        throw new UnsupportedOperationException("Not supported yet.");
    }
}
