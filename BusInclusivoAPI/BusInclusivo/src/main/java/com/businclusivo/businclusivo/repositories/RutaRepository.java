package com.businclusivo.businclusivo.repositories;

import com.businclusivo.businclusivo.entities.Ruta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RutaRepository extends JpaRepository<Ruta,Integer> {

}
