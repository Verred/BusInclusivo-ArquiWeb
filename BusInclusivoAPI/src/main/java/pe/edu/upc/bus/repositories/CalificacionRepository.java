package pe.edu.upc.bus.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upc.bus.entities.Calificacion;

public interface CalificacionRepository extends JpaRepository<Calificacion,Integer> {
}
