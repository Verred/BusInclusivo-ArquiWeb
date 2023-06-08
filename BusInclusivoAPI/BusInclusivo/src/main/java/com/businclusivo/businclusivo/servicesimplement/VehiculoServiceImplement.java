package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.Vehiculo;
import com.businclusivo.businclusivo.repositories.VehiculoRepository;
import com.businclusivo.businclusivo.services.VehiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehiculoServiceImplement implements VehiculoService {

    @Autowired
    private VehiculoRepository repo;

    @Override
    public void insert(Vehiculo vehiculo) {
        repo.save(vehiculo);
    }

    @Override
    public List<Vehiculo> list() {
        return repo.findAll();
    }

    @Override
    public void delete(int id) {
        repo.deleteById(id);
    }

    @Override
    public Vehiculo listID(int id) {
        return repo.findById(id).orElse(new Vehiculo());
    }
}
