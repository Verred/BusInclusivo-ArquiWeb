package com.businclusivo.businclusivo.dtos;


public class ModeloDTO {


    private int PK_idModelo;

    private String descripcion;

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
}
