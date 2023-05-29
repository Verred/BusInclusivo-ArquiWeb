package com.businclusivo.businclusivo.dtos;

public class MarcaDTO {
 private int PK_idMarca;
 private String descripcion;

    public int getPK_idMarca() {
        return PK_idMarca;
    }

    public void setPK_idMarca(int PK_idMarca) {
        this.PK_idMarca = PK_idMarca;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
