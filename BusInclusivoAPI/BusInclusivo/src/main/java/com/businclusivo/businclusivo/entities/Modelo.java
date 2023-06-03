package com.businclusivo.businclusivo.entities;

import javax.persistence.*;

@Entity
@Table(name = "Modelo")
public class Modelo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int PK_idModelo;
    @Column (name = "descripcion", length = 25, nullable = false)
    private String descripcion;

    public Modelo(int PK_idModelo, String descripcion) {
        this.PK_idModelo = PK_idModelo;
        this.descripcion = descripcion;
    }

    public int getPK_idModelo() {
        return PK_idModelo;
    }

    public void setPK_idModelo(int PK_idModelo) {
        this.PK_idModelo = PK_idModelo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Modelo() {
    }
}
