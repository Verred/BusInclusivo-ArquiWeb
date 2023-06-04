package com.businclusivo.businclusivo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.businclusivo.businclusivo.entities.Calificacion;
import org.springframework.stereotype.Repository;
@Repository
public interface CalificacionRepository extends JpaRepository<Calificacion,Integer> {
}
