package com.businclusivo.businclusivo.dtos;

import com.businclusivo.businclusivo.entities.Coordenada;


public class RutaDTO {
    private int idRuta;
    private Coordenada StartCoordenada;
    private Coordenada EndCoordenada;
    private String descripcion;

    public int getIdRuta() {
        return idRuta;
    }

    public void setIdRuta(int idRuta) {
        this.idRuta = idRuta;
    }

    public Coordenada getStartCoordenada() {
        return StartCoordenada;
    }

    public void setStartCoordenada(Coordenada startCoordenada) {
        StartCoordenada = startCoordenada;
    }

    public Coordenada getEndCoordenada() {
        return EndCoordenada;
    }

    public void setEndCoordenada(Coordenada endCoordenada) {
        EndCoordenada = endCoordenada;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
