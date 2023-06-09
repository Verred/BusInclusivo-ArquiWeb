package com.businclusivo.businclusivo.repositories;

import com.businclusivo.businclusivo.entities.Identificacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IdentificacionRepository  extends JpaRepository<Identificacion,Integer> {

}
