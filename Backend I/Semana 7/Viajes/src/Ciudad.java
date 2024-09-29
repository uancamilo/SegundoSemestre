public class Ciudad {
    private int valor;
    private int numeroPersonas;

    // Constructor
    public Ciudad(int numeroCiudad, int numeroPersonas) {
        setValor(numeroCiudad);
        this.numeroPersonas = numeroPersonas;
    }

    public int getValor() {
        return valor;
    }

    public int getNumeroPersonas() {
        return numeroPersonas;
    }

    public void setValor(int numeroCiudad) {
        switch (numeroCiudad) {
            case 1:
                this.valor = 600000; // Cartagena
                break;
            case 2:
                this.valor = 500000; // Cali
                break;
            case 3:
                this.valor = 400000; // Montería
                break;
            default:
                throw new IllegalArgumentException("Número de ciudad no válido.");
        }
    }

    public double calcularIVA() {
        return calcularValorBruto() * 0.19;
    }

    public double calcularValorNeto() {
        return calcularValorBruto() + calcularIVA();
    }

    public double calcularValorBruto() {
        return valor * numeroPersonas;
    }

    // Método toString
    @Override
    public String toString() {
        return "Ciudad: " + (valor == 600000 ? "Cartagena" : valor == 500000 ? "Cali" : "Montería") + "\n" +
                "Número de personas: " + numeroPersonas + "\n" +
                "Valor bruto total: " + calcularValorBruto() + " pesos\n" +
                "IVA (19%): " + calcularIVA() + " pesos\n" +
                "Valor neto total: " + calcularValorNeto() + " pesos";
    }
}
