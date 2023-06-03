package com.businclusivo.businclusivo.entities;

import javax.persistence.*;

@Entity
@Table(name = "Marca")
public class Marca {

@Id
@GeneratedValue (strategy = GenerationType.IDENTITY)
private int idMarca;
@Column (name = "descripcion", length = 25, nullable = false)
private String descripcion;

    public Marca() {
    }

    public Marca(int idMarca, String descripcion) {
        this.idMarca = idMarca;
        this.descripcion = descripcion;
    }

    public int getIdMarca() {
        return idMarca;
    }

    public void setIdMarca(int idMarca) {
        this.idMarca = idMarca;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
