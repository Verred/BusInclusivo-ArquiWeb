package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.Ruta;
import com.businclusivo.businclusivo.repositories.RutaRepository;
import com.businclusivo.businclusivo.services.RutaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RutaServiceImplement implements RutaService {
    @Autowired
    private RutaRepository repo;

    @Override
    public void insert(Ruta ruta) {
        repo.save(ruta);
    }

    @Override
    public List<Ruta> list() {
        return repo.findAll();
    }

    @Override
    public void delete(int id) {
        repo.deleteById(id);
    }

    @Override
    public Ruta listID(int id) {
        return repo.findById(id).orElse(new Ruta());
    }
}
