package com.businclusivo.businclusivo.entities;

import javax.persistence.*;

@Entity
@Table(name = "Marca")
public class Marca {

@Id
@GeneratedValue (strategy = GenerationType.IDENTITY)

private int PK_idMarca;
@Column (name = "descripcion", length = 25, nullable = false)
private String descripcion;

    public Marca() {
    }

    public Marca(int PK_idMarca, String descripcion) {
        this.PK_idMarca = PK_idMarca;
        this.descripcion = descripcion;
    }

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
