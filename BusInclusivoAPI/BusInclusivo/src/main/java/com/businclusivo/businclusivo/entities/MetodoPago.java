package com.businclusivo.businclusivo.entities;

import javax.persistence.*;

@Entity
@Table(name = "MetodoPago")
public class MetodoPago {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int PK_idMetodoPago;


    @Column (name = "descripcion", length = 25, nullable = false)
    private String descripcion;

    public MetodoPago() {
    }

    public MetodoPago(int PK_idMetodoPago, String descripcion) {
        this.PK_idMetodoPago = PK_idMetodoPago;
        this.descripcion = descripcion;
    }

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
