package com.businclusivo.businclusivo.repositories;

import com.businclusivo.businclusivo.entities.TipoDocumento;
import com.businclusivo.businclusivo.entities.Viaje;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ViajeRepository extends JpaRepository<Viaje,Integer> {
}
