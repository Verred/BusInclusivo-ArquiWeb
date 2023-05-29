package pe.edu.upc.bus.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upc.bus.entities.Calificacion;
import org.springframework.stereotype.Repository;
@Repository
public interface CalificacionRepository extends JpaRepository<Calificacion,Integer> {
}
