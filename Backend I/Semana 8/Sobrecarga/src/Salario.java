public class Salario {
    private float sal_neto, sal_basico;
    private float val_horas;
    private int nro_horas;

    public Salario(float val_horas, int nro_horas) {
        this.val_horas = val_horas;
        this.nro_horas = nro_horas;
    }

    public float Calcular_Salario_Neto() {

    float deducciones, aux_transporte=0;
    sal_basico= nro_horas*val_horas;
        if (sal_basico <= 4 * 1300000) {
            deducciones=(sal_basico * 8)/100;
            if (sal_basico <= 2) {
                aux_transporte=162000;

            }
        }else {
            deducciones=(sal_basico*9)/100;
        }
        sal_neto=sal_basico-deducciones+aux_transporte;
        float salNeto = sal_neto;
        return salNeto;
    }
    public float Calcular_Salario_Neto( float porc) {

        float descuento ;
        sal_basico=nro_horas * val_horas;
        descuento = (sal_basico * porc) /100 ;
        sal_neto=sal_basico -descuento;
        float salNeto = sal_neto;
        return salNeto;
    }

    public float Calcular_Salario_Neto( double retencion) {

        sal_basico=nro_horas * val_horas;
        sal_neto=sal_basico - (sal_basico * (float)retencion/100);
        float salNeto = sal_neto;
        return salNeto;
    }

}
