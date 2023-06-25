package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.dtos.CountConductorDTO;
import com.businclusivo.businclusivo.dtos.TarjetaColorDTO;
import com.businclusivo.businclusivo.entities.TipoDocumento;
import com.businclusivo.businclusivo.entities.Viaje;

import java.util.List;

public interface ViajeService {

    public void insert( Viaje viaje);
    List<Viaje> list();
    public void delete(int id);
    public Viaje listID(int id);
    public List<CountConductorDTO> reporteConductores();
}
