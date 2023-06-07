package com.businclusivo.businclusivo.dtos;

import com.businclusivo.businclusivo.entities.EstadoVehiculo;
import com.businclusivo.businclusivo.entities.TarjetaPropiedad;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class VehiculoDTO {
    private int idVehiculo;
    private TarjetaPropiedad tarjetaPropiedad;
    private EstadoVehiculo estadoVehiculo;

    public int getIdVehiculo() {
        return idVehiculo;
    }

    public void setIdVehiculo(int idVehiculo) {
        this.idVehiculo = idVehiculo;
    }

    public TarjetaPropiedad getTarjetaPropiedad() {
        return tarjetaPropiedad;
    }

    public void setTarjetaPropiedad(TarjetaPropiedad tarjetaPropiedad) {
        this.tarjetaPropiedad = tarjetaPropiedad;
    }

    public EstadoVehiculo getEstadoVehiculo() {
        return estadoVehiculo;
    }

    public void setEstadoVehiculo(EstadoVehiculo estadoVehiculo) {
        this.estadoVehiculo = estadoVehiculo;
    }
}
