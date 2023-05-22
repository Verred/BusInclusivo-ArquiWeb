package pe.edu.upc.bus.servicies;

import pe.edu.upc.bus.entities.Calificacion;

import java.util.List;

public interface CalificacionService {
    public void insert(Calificacion calificacion);
    List<Calificacion> list();
}
