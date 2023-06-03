package com.businclusivo.businclusivo.repositories;

import com.businclusivo.businclusivo.entities.TarjetaPropiedad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TarjetaPropiedadRepository  extends JpaRepository<TarjetaPropiedad,Integer>  {

}
