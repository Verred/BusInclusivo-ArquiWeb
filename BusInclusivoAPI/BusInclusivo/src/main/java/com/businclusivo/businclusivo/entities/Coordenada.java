package com.businclusivo.businclusivo.entities;

import javax.persistence.*;

@Entity
@Table(name = "Coordenada")
public class Coordenada {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idCoordenada;
    @Column (name = "longitud", nullable = false)
    private int longitud;
    @Column (name = "latitud", nullable = false)
    private int latitud;
    @Column (name = "referencia", length = 100, nullable = false)
    private String referencia;

    public Coordenada() {
    }

    public Coordenada(int idCoordenada, int longitud, int latitud, String referencia) {
        this.idCoordenada = idCoordenada;
        this.longitud = longitud;
        this.latitud = latitud;
        this.referencia = referencia;
    }

    public int getIdCoordenada() {
        return idCoordenada;
    }

    public void setIdCoordenada(int idCoordenada) {
        this.idCoordenada = idCoordenada;
    }

    public int getLongitud() {
        return longitud;
    }

    public void setLongitud(int longitud) {
        this.longitud = longitud;
    }

    public int getLatitud() {
        return latitud;
    }

    public void setLatitud(int latitud) {
        this.latitud = latitud;
    }

    public String getReferencia() {
        return referencia;
    }

    public void setReferencia(String referencia) {
        this.referencia = referencia;
    }
}
