package com.businclusivo.businclusivo.repositories;

import com.businclusivo.businclusivo.entities.Pasajero;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PasajeroRepository extends JpaRepository<Pasajero,Integer> {

}
