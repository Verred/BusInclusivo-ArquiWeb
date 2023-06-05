package com.businclusivo.businclusivo.repositories;

import com.businclusivo.businclusivo.entities.Coordenada;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoordenadaRepository extends JpaRepository<Coordenada,Integer> {
}
