package com.businclusivo.businclusivo.repositories;

import com.businclusivo.businclusivo.entities.Reclamo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReclamoRepository extends JpaRepository<Reclamo,Integer> {

}
