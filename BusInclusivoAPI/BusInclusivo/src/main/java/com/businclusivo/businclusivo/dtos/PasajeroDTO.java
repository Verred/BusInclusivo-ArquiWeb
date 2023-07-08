package com.businclusivo.businclusivo.dtos;

import com.businclusivo.businclusivo.entities.Users;
import com.businclusivo.businclusivo.entities.Usuario;

public class PasajeroDTO {
    private int idPasajero;
    private Usuario usuario;

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
