package com.businclusivo.businclusivo.entities;

import javax.persistence.*;

@Entity
@Table(name= "TipoDocumento")
public class TipoDocumento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idTipoDocumento;
    @Column(name = "descripcion", length = 20 , nullable = false)
    private String descripcion;

    public TipoDocumento() {
    }

    public TipoDocumento(int idTipoDocumento, String descripcion) {
        this.idTipoDocumento = idTipoDocumento;
        this.descripcion = descripcion;
    }

    public int getIdTipoDocumento() {
        return idTipoDocumento;
    }

    public void setIdTipoDocumento(int idTipoDocumento) {
        this.idTipoDocumento = idTipoDocumento;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
