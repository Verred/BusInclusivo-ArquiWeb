package com.businclusivo.businclusivo.servicesimplement;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import com.businclusivo.businclusivo.entities.Calificacion;
import com.businclusivo.businclusivo.repositories.CalificacionRepository;
import com.businclusivo.businclusivo.services.CalificacionService;

import java.util.List;

@Service
public class CalificacionServicieImplement implements  CalificacionService{

    @Autowired
    private CalificacionRepository mR;


    @Override
    public void insert(Calificacion calificacion) {
        mR.save(calificacion);
    }

    @Override
    public List<Calificacion> list() {
        return mR.findAll();
    }


    public void delete(int idCalificacion) {
        mR.deleteById(idCalificacion);
    }


    public Calificacion listID(int idCalificacion) {
        return mR.findById(idCalificacion).orElse(new Calificacion());
    }
}
