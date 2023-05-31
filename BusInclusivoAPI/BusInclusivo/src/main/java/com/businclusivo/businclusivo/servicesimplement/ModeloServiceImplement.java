package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.Modelo;
import com.businclusivo.businclusivo.repositories.ModeloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModeloServiceImplement {

    private ModeloRepository mR;



    public void insert(Modelo modelo) {
        mR.save(modelo);
    }


    public List<Modelo> list() {
        return mR.findAll();
    }


    public void delete(int idModelo) {
        mR.deleteById(idModelo);
    }


    public Modelo listID(int idModelo) {
        return mR.findById(idModelo).orElse(new Modelo());
    }

}
