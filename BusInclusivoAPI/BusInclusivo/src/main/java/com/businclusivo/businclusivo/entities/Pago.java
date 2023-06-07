package com.businclusivo.businclusivo.entities;

import javax.persistence.*;

@Entity
@Table(name = "Pago")
public class Pago {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idPago;
    @Column (name = "precioKM",  nullable = false)
    private Float precioKM;
    @ManyToOne
    @JoinColumn(name = "idMetodoPago")
    private MetodoPago metodoPago;

    public Pago() {
    }

    public Pago(int idPago, Float precioKM, MetodoPago metodoPago) {
        this.idPago = idPago;
        this.precioKM = precioKM;
        this.metodoPago = metodoPago;
    }

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
