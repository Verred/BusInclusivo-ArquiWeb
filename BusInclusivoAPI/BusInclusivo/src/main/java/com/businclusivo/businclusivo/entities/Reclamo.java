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
    @JoinColumn(name = "idViaje")
    private Viaje viaje;

    public Reclamo() {
    }

    public Reclamo(int idReclamo, String evidencia, String comentario, LocalDate horaFecha, Viaje viaje) {
        this.idReclamo = idReclamo;
        this.evidencia = evidencia;
        this.comentario = comentario;
        this.horaFecha = horaFecha;
        this.viaje = viaje;
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

    public Viaje getViaje() {
        return viaje;
    }

    public void setViaje(Viaje viaje) {
        this.viaje = viaje;
    }
}
