package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.Vehiculo;

import java.util.List;

public interface VehiculoService {

    public void insert( Vehiculo vehiculo);
    List<Vehiculo> list();
    public void delete(int id);
    public Vehiculo listID(int id);
}
