package com.businclusivo.businclusivo.servicesimplement;
import com.businclusivo.businclusivo.entities.Marca;
import com.businclusivo.businclusivo.repositories.MarcaRepository;
import com.businclusivo.businclusivo.services.MarcaService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarcaServicieImplement implements  MarcaService{
    @Autowired
    private MarcaRepository mR;


    @Override
    public void insert(Marca marca) {
        mR.save(marca);
    }

    @Override
    public List<Marca> list() {
        return mR.findAll();
    }

    @Override
    public void delete(int idMarca) {
        mR.deleteById(idMarca);
    }

    @Override
    public Marca listID(int idMarca) {
        return mR.findById(idMarca).orElse(new Marca());
    }
}
