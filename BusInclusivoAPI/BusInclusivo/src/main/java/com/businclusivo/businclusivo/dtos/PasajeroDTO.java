package com.businclusivo.businclusivo.dtos;

import com.businclusivo.businclusivo.entities.Users;

public class PasajeroDTO {
    private int idPasajero;
    private Users usuario;

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
