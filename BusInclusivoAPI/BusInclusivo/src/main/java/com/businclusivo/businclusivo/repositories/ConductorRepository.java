package com.businclusivo.businclusivo.repositories;

import com.businclusivo.businclusivo.entities.Conductor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConductorRepository  extends JpaRepository<Conductor,Integer> {

}
