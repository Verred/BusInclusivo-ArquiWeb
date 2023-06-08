package com.businclusivo.businclusivo.repositories;

import com.businclusivo.businclusivo.entities.Vehiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehiculoRepository extends JpaRepository<Vehiculo,Integer> {

}
