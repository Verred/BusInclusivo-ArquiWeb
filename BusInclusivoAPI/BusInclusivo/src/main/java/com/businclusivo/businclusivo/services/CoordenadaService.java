package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.Coordenada;

import java.util.List;

public interface CoordenadaService {

    public void insert( Coordenada coordenada);
    List<Coordenada> list();
    public void delete(int id);
    public Coordenada listID(int id);
}
