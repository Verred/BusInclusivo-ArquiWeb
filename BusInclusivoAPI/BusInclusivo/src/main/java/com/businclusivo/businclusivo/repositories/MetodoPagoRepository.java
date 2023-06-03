package com.businclusivo.businclusivo.repositories;

import com.businclusivo.businclusivo.entities.MetodoPago;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MetodoPagoRepository extends JpaRepository <MetodoPago, Integer>{


}
