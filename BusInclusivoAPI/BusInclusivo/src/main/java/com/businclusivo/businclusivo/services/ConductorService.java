package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.Conductor;
import com.businclusivo.businclusivo.entities.TipoDocumento;

import java.util.List;

public interface ConductorService {
    public void insert( Conductor conductor);
    List<Conductor> list();
    public void delete(int id);
    public Conductor listID(int id);
}
