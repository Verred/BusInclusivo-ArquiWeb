package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.Coordenada;
import com.businclusivo.businclusivo.entities.EstadoVehiculo;
import com.businclusivo.businclusivo.repositories.EstadoVehiculoRepository;
import com.businclusivo.businclusivo.repositories.TipoDocumentoRepository;
import com.businclusivo.businclusivo.services.EstadoVehiculoService;
import com.businclusivo.businclusivo.services.TipoDocumentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstadoVehiculoServiceImplement implements EstadoVehiculoService {
    @Autowired
    private EstadoVehiculoRepository repo;

    @Override
    public void insert(EstadoVehiculo estadoVehiculo) {
        repo.save(estadoVehiculo);

    }

    @Override
    public List<EstadoVehiculo> list() {
        return repo.findAll();

    }

    @Override
    public void delete(int id) {
        repo.deleteById(id);
    }

    @Override
    public EstadoVehiculo listID(int id) {
        return repo.findById(id).orElse(new EstadoVehiculo());
    }
}
