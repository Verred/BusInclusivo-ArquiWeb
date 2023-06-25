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
    private Users usuario; /* OtO idUser*/

    public Pasajero() {
    }

    public Pasajero(int idPasajero, Users usuario) {
        this.idPasajero = idPasajero;
        this.usuario = usuario;
    }

    public int getIdPasajero() {
        return idPasajero;
    }

    public void setIdPasajero(int idPasajero) {
        this.idPasajero = idPasajero;
    }

    public Users getUsuario() {
        return usuario;
    }

    public void setUsuario(Users usuario) {
        this.usuario = usuario;
    }
}
