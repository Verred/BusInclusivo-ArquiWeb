package com.businclusivo.businclusivo.dtos;

import javax.persistence.Column;

public class ColorDTO {
    private int idColor;
    private String descripcion;

    public int getIdColor() {
        return idColor;
    }

    public void setIdColor(int idColor) {
        this.idColor = idColor;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
