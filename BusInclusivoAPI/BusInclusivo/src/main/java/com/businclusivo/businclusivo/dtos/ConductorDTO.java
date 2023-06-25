package com.businclusivo.businclusivo.dtos;

import com.businclusivo.businclusivo.entities.Users;

public class ConductorDTO {
    private int idConductor;
    private Users usuario;
    private int licencia;
    private float horasViaje;

    public int getIdConductor() {
        return idConductor;
    }

    public void setIdConductor(int idConductor) {
        this.idConductor = idConductor;
    }

    public Users getUsuario() {
        return usuario;
    }

    public void setUsuario(Users usuario) {
        this.usuario = usuario;
    }

    public int getLicencia() {
        return licencia;
    }

    public void setLicencia(int licencia) {
        this.licencia = licencia;
    }

    public float getHorasViaje() {
        return horasViaje;
    }

    public void setHorasViaje(float horasViaje) {
        this.horasViaje = horasViaje;
    }
}
