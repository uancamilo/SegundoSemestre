package org.example;

public class Compra {
    private int cantidad;
    private float valorNeto;
    private String producto;
    private float valorTotal;

    // Constructor para compras sin descuento
    public Compra(int cantidad, float valorNeto, String producto) {
        this.cantidad = cantidad;
        this.valorNeto = valorNeto;
        this.producto = producto;
        this.valorTotal = Calcular_Compra();
    }

    // Constructor para compras con descuento
    public Compra(float descuento, int cantidad, String producto, float valorNeto) {
        this.cantidad = cantidad;
        this.valorNeto = valorNeto;
        this.producto = producto;
        this.valorTotal = Calcular_Con_Descuento(descuento);
    }

    // Constructor para compras con descuento y IVA
    public Compra(float descuento, int cantidad, String producto, float valorNeto, float iva) {
        this.cantidad = cantidad;
        this.valorNeto = valorNeto;
        this.producto = producto;
        this.valorTotal = Calcular_Con_Descuento(descuento);
        this.valorTotal += this.valorTotal * (iva / 100); // Agregar IVA al valor total
    }

    // Método para calcular el valor de la compra sin descuento
    public float Calcular_Compra() {
        return valorNeto * cantidad;
    }

    // Método privado para calcular el valor de la compra con descuento
    private float Calcular_Con_Descuento(float descuento) {
        float valorCompra = Calcular_Compra();
        return valorCompra - (valorCompra * (descuento / 100));
    }

    // Método para obtener el valor total de la compra
    public float getValorTotal() {
        return valorTotal;
    }
}
