package com.businclusivo.businclusivo.entities;

import javax.persistence.*;

@Entity
@Table(name = "Modelo")
public class Modelo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idModelo;
    @Column (name = "descripcion", length = 25, nullable = false)
    private String descripcion;


    public Modelo(int idModelo, String descripcion) {
        this.idModelo = idModelo;
        this.descripcion = descripcion;
    }

    public int getIdModelo() {
        return idModelo;
    }

    public void setIdModelo(int idModelo) {
        this.idModelo = idModelo;
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
