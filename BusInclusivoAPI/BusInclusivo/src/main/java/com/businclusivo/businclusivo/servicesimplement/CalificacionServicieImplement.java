package pe.edu.upc.bus.servicesimplement;
import org.springframework.beans.factory.annotation.Autowired;
import pe.edu.upc.bus.entities.Calificacion;
import pe.edu.upc.bus.repositories.CalificacionRepository;
import pe.edu.upc.bus.servicies.CalificacionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


public class CalificacionServicieImplement implements  CalificacionService{

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
