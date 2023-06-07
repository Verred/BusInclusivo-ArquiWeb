package com.businclusivo.businclusivo.dtos;

import com.businclusivo.businclusivo.entities.Coordenada;


import java.time.LocalDate;

public class ReclamoDTO {
    private int idReclamo;
    private String evidencia;
    private String comentario;
    private LocalDate horaFecha;
    private Coordenada coordenada;

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
