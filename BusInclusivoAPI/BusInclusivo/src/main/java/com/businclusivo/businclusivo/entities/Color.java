package com.businclusivo.businclusivo.entities;

import javax.persistence.*;

@Entity
@Table(name = "Color")
public class Color {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idColor;
    @Column(name = "descripcion", length = 25, nullable = false)
    private String descripcion;

    public Color() {
    }

    public Color(int idColor, String descripcion) {
        this.idColor = idColor;
        this.descripcion = descripcion;
    }

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
