public class Persona {
    private String nombre;
    private String genero;

    // Constructor
    public Persona(String nombre, String genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    // Métodos getter
    public String getNombre() {
        return nombre;
    }

    public String getGenero() {
        return genero;
    }

    // Métodos setter
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    @Override
    public String toString() {
        return "Nombre: " + nombre + ", Género: " + genero;
    }
}