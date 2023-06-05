package com.businclusivo.businclusivo.repositories;


import com.businclusivo.businclusivo.entities.EstadoVehiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstadoVehiculoRepository extends JpaRepository <EstadoVehiculo,Integer> {

}
