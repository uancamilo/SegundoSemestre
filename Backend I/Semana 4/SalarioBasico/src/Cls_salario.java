public class Cls_salario {
     float val_salario_minimo = 1300000, val_auxilio_transporte = 162000;

    public float Cacular_deduccion(float sal_basico) {
        float deduccion;
        if (sal_basico < 4 * val_salario_minimo) {
            deduccion = (val_salario_minimo * 8) / 100;
        } else {
            deduccion = (val_salario_minimo * 9) / 100;
        }
        return deduccion;
    }
}
