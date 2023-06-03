package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.Modelo;
import com.businclusivo.businclusivo.entities.Modelo;

import java.util.List;

public interface ModeloService {

        public void insert(Modelo modelo);
        List<Modelo> list();
        public void delete(int idModelo);
        public Modelo listID(int idModelo);

    }
