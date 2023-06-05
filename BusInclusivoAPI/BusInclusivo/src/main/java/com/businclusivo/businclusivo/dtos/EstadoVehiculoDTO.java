package com.businclusivo.businclusivo.dtos;

public class EstadoVehiculoDTO {
    private int  idEstadoVehiculo;
    private String situacion;
    private String descripcion;

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
