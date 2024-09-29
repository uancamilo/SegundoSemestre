public class Matricula {
    private int nro_materias, edad;
    private float val_materia;
    private float valor_bruto, valor_neto, descuento;
    private String codigo, nombre, sexo, tecnica;

    // Setters
    public void setNro_materias(int nro_materias) {
        this.nro_materias = nro_materias;
    }

    public void setVal_materia(float val_materia) {
        this.val_materia = val_materia;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public void setTecnica(String tecnica) {
        this.tecnica = tecnica;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    // Getters
    public float getValor_bruto() {
        return valor_bruto;
    }

    public float getValor_neto() {
        return valor_neto;
    }

    public float getDescuento() {
        return descuento;
    }

    // Métodos de cálculo
    public void calcular_matricula() {
        valor_bruto = nro_materias * val_materia;
    }

    public void calcular_descuento() {
        if (sexo.equals("Mujer") && tecnica.equals("Sistemas") && edad < 18) {
            descuento = valor_bruto * 0.1f; // 10% de descuento
        } else {
            descuento = 0;
        }
    }

    public void calcular_valor_neto() {
        calcular_descuento(); // Asegura que el descuento sea calculado antes
        valor_neto = valor_bruto - descuento;
    }
}
