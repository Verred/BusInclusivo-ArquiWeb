package com.businclusivo.businclusivo.repositories;

import com.businclusivo.businclusivo.entities.Modelo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModeloRepository extends JpaRepository<Modelo, Integer> {

}
