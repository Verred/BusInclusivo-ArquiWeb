package com.businclusivo.businclusivo.entities;

import javax.persistence.*;

@Entity
@Table(name = "EstadoVehiculo")
public class EstadoVehiculo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int  idEstadoVehiculo;
    @Column (name = "situacion", length = 25, nullable = false)
    private String situacion;
    @Column (name = "descripcion", length = 25, nullable = false)
    private String descripcion;

    public EstadoVehiculo() {
    }

    public EstadoVehiculo(int idEstadoVehiculo, String situacion, String descripcion) {
        this.idEstadoVehiculo = idEstadoVehiculo;
        this.situacion = situacion;
        this.descripcion = descripcion;
    }

    public int getIdEstadoVehiculo() {
        return idEstadoVehiculo;
    }

    public void setIdEstadoVehiculo(int idEstadoVehiculo) {
        this.idEstadoVehiculo = idEstadoVehiculo;
    }

    public String getSituacion() {
        return situacion;
    }

    public void setSituacion(String situacion) {
        this.situacion = situacion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
