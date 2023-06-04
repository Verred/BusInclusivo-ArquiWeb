package com.businclusivo.businclusivo.entities;

import javax.persistence.*;

@Entity
@Table(name= "calificacion")

public class Calificacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int  idCalificacion;

    @Column(name = "valoracion", nullable = false)
    private int valoracion;

    @Column(name = "comentario", length = 200, nullable = false)

    private String comentario;

    public Calificacion() {
    }

    public Calificacion(int idCalificacion, int valoracion, String comentario) {
        this.idCalificacion = idCalificacion;
        this.valoracion = valoracion;
        this.comentario = comentario;
    }

    public int getIdCalificacion() {
        return idCalificacion;
    }

    public void setIdCalificacion(int idCalificacion) {
        this.idCalificacion = idCalificacion;
    }

    public int getValoracion() {
        return valoracion;
    }

    public void setValoracion(int valoracion) {
        this.valoracion = valoracion;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }
}
