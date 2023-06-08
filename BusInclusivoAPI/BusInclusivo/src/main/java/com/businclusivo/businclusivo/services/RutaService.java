package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.Ruta;
import com.businclusivo.businclusivo.entities.TipoDocumento;

import java.util.List;

public interface RutaService {
    public void insert( Ruta ruta);
    List<Ruta> list();
    public void delete(int id);
    public Ruta listID(int id);
}
