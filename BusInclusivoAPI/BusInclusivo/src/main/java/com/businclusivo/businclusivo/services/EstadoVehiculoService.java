package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.EstadoVehiculo;

import java.util.List;

public interface EstadoVehiculoService {
    public void insert( EstadoVehiculo estadoVehiculo);
    List<EstadoVehiculo> list();
    public void delete(int id);
    public EstadoVehiculo listID(int id);
}
