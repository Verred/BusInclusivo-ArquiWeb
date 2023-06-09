package com.businclusivo.businclusivo.repositories;

import com.businclusivo.businclusivo.entities.Color;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColorRepository extends JpaRepository<Color,Integer> {
}
