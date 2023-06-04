package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.Calificacion;

import java.util.List;

public interface CalificacionService {
    public void insert(Calificacion calificacion);
    List<Calificacion> list();
    public void delete(int idCalificacion);
    public Calificacion listID(int idCalificacion);
}
