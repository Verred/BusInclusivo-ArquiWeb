package com.businclusivo.businclusivo.entities;

import javax.persistence.*;

@Entity
@Table(name= "Ruta")
public class Ruta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idRuta;
    @ManyToOne
    @JoinColumn(name = "idStartCoordenada")
    private Coordenada StartCoordenada;
    @ManyToOne
    @JoinColumn(name = "idEndCoordenada")
    private Coordenada EndCoordenada;
    @Column(name = "descripcion", length = 50, nullable = false)
    private String descripcion;

    public Ruta() {
    }

    public Ruta(int idRuta, Coordenada startCoordenada, Coordenada endCoordenada, String descripcion) {
        this.idRuta = idRuta;
        StartCoordenada = startCoordenada;
        EndCoordenada = endCoordenada;
        this.descripcion = descripcion;
    }

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
