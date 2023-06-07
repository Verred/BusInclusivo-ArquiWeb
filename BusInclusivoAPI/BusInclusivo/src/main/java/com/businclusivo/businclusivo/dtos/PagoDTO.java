package com.businclusivo.businclusivo.dtos;

import com.businclusivo.businclusivo.entities.MetodoPago;

public class PagoDTO {

    private int idPago;
    private Float precioKM;
    private MetodoPago metodoPago;

    public int getIdPago() {
        return idPago;
    }

    public void setIdPago(int idPago) {
        this.idPago = idPago;
    }

    public Float getPrecioKM() {
        return precioKM;
    }

    public void setPrecioKM(Float precioKM) {
        this.precioKM = precioKM;
    }

    public MetodoPago getMetodoPago() {
        return metodoPago;
    }

    public void setMetodoPago(MetodoPago metodoPago) {
        this.metodoPago = metodoPago;
    }
}
