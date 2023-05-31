package com.businclusivo.businclusivo.dtos;



public class MetodoPagoDTO {
    private int PK_idMetodoPago;
    private String descripcion;

    public int getPK_idMetodoPago() {
        return PK_idMetodoPago;
    }

    public void setPK_idMetodoPago(int PK_idMetodoPago) {
        this.PK_idMetodoPago = PK_idMetodoPago;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
