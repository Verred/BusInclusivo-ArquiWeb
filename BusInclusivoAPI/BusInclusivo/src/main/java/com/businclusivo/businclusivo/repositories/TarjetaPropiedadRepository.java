package com.businclusivo.businclusivo.repositories;

import com.businclusivo.businclusivo.entities.TarjetaPropiedad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TarjetaPropiedadRepository  extends JpaRepository<TarjetaPropiedad,Integer>  {
    @Query(value = "SELECT c.descripcion, COUNT(*) AS total\n" +
            "FROM tarjeta_propiedad tp\n" +
            "JOIN color c ON tp.id_color = c.id_color\n" +
            "GROUP BY c.descripcion;", nativeQuery = true)
    List<String[]> getCountColorByTarjeta();
    @Query(value = "SELECT m.descripcion, COUNT(*) AS total\n" +
            "FROM tarjeta_propiedad tp\n" +
            "JOIN modelo m ON tp.id_modelo = m.id_modelo\n" +
            "GROUP BY m.descripcion;", nativeQuery = true)
    List<String[]> getCountModeloByTarjeta();

    @Query(value = "SELECT m.descripcion, COUNT(*) AS total\n" +
            "FROM tarjeta_propiedad tp\n" +
            "JOIN marca m ON tp.id_marca = m.id_marca\n" +
            "GROUP BY m.descripcion;", nativeQuery = true)
    List<String[]> getCountMarcaByTarjeta();
}
