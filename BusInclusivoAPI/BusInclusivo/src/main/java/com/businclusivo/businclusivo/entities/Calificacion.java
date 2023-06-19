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

    @ManyToOne
    @JoinColumn(name = "idViaje")
    private Viaje viaje;

    public Calificacion() {
    }

    public Calificacion(int idCalificacion, int valoracion, String comentario, Viaje viaje) {
        this.idCalificacion = idCalificacion;
        this.valoracion = valoracion;
        this.comentario = comentario;
        this.viaje = viaje;
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

    public Viaje getViaje() {
        return viaje;
    }

    public void setViaje(Viaje viaje) {
        this.viaje = viaje;
    }
}
