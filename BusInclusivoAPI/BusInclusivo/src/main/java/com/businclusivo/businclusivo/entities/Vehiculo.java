package com.businclusivo.businclusivo.entities;

import javax.persistence.*;

@Entity
@Table(name= "Vehiculo")
public class Vehiculo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idVehiculo;
    @OneToOne
    @JoinColumn(name = "idTarjetaPropiedad")
    private TarjetaPropiedad tarjetaPropiedad;
    @ManyToOne
    @JoinColumn(name = "idEstadoVehiculo")
    private EstadoVehiculo estadoVehiculo;

    public Vehiculo() {
    }

    public Vehiculo(int idVehiculo, TarjetaPropiedad tarjetaPropiedad, EstadoVehiculo estadoVehiculo) {
        this.idVehiculo = idVehiculo;
        this.tarjetaPropiedad = tarjetaPropiedad;
        this.estadoVehiculo = estadoVehiculo;
    }

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

