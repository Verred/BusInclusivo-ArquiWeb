package com.businclusivo.businclusivo.repositories;

import com.businclusivo.businclusivo.entities.TipoDocumento;
import com.businclusivo.businclusivo.entities.Viaje;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ViajeRepository extends JpaRepository<Viaje,Integer> {
    @Query(value = "SELECT u.nombre, SUM(v.horas_viaje) AS total_horas_viaje\n" +
            "FROM usuario u\n" +
            "JOIN conductor c ON u.id_usuario = c.id_usuario\n" +
            "JOIN viaje v ON c.id_conductor = v.id_conductor\n" +
            "GROUP BY u.nombre", nativeQuery = true)
    List<String[]> getCountHoursConductor();

}
