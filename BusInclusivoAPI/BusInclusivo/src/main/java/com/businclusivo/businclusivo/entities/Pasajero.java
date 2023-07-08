package com.businclusivo.businclusivo.entities;

import javax.persistence.*;

@Entity
@Table(name= "Pasajero")
public class Pasajero {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idPasajero;
    @OneToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario; /* OtO idUser*/

    public Pasajero() {
    }

    public Pasajero(int idPasajero, Usuario usuario) {
        this.idPasajero = idPasajero;
        this.usuario = usuario;
    }

    public int getIdPasajero() {
        return idPasajero;
    }

    public void setIdPasajero(int idPasajero) {
        this.idPasajero = idPasajero;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
