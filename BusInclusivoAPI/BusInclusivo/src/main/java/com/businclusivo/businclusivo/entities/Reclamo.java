package com.businclusivo.businclusivo.entities;

import javax.persistence.*;
import java.time.LocalDate;
@Entity
@Table(name= "Reclamo")
public class Reclamo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idReclamo;
    @Column(name = "evidencia", length = 200, nullable = false)
    private String evidencia; /* 200 */
    @Column(name = "comentario", length = 200, nullable = false)
    private String comentario; /* 200 */
    @Column(name = "horaFecha", nullable = false)
    private LocalDate horaFecha;
    @ManyToOne
    @JoinColumn(name = "idCoordenada")
    private Coordenada coordenada;

    public Reclamo() {
    }

    public Reclamo(int idReclamo, String evidencia, String comentario, LocalDate horaFecha, Coordenada coordenada) {
        this.idReclamo = idReclamo;
        this.evidencia = evidencia;
        this.comentario = comentario;
        this.horaFecha = horaFecha;
        this.coordenada = coordenada;
    }

    public int getIdReclamo() {
        return idReclamo;
    }

    public void setIdReclamo(int idReclamo) {
        this.idReclamo = idReclamo;
    }

    public String getEvidencia() {
        return evidencia;
    }

    public void setEvidencia(String evidencia) {
        this.evidencia = evidencia;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public LocalDate getHoraFecha() {
        return horaFecha;
    }

    public void setHoraFecha(LocalDate horaFecha) {
        this.horaFecha = horaFecha;
    }

    public Coordenada getCoordenada() {
        return coordenada;
    }

    public void setCoordenada(Coordenada coordenada) {
        this.coordenada = coordenada;
    }
}
