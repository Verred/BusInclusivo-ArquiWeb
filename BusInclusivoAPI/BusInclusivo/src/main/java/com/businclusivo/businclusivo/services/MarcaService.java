package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.Marca;

import java.util.List;
public interface MarcaService {
     public void insert(Marca marca);
    List<Marca> list();
    public void delete(int idMarca);
    public Marca listID(int idMarca);

}
