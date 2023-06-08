package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.Reclamo;
import com.businclusivo.businclusivo.entities.TipoDocumento;

import java.util.List;

public interface ReclamoService {

    public void insert( Reclamo reclamo);
    List<Reclamo> list();
    public void delete(int id);
    public Reclamo listID(int id);
}
