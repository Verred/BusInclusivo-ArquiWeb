package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.Pasajero;
import com.businclusivo.businclusivo.entities.TipoDocumento;

import java.util.List;

public interface PasajeroService {

    public void insert( Pasajero pasajero);
    List<Pasajero> list();
    public void delete(int id);
    public Pasajero listID(int id);
}
