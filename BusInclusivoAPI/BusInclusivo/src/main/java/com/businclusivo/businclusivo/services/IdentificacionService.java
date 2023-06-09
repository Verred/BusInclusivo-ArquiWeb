package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.Identificacion;
import com.businclusivo.businclusivo.entities.TipoDocumento;

import java.util.List;

public interface IdentificacionService {
    public void insert( Identificacion identificacion);
    List<Identificacion> list();
    public void delete(int id);
    public Identificacion listID(int id);
}
