package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.Reclamo;
import com.businclusivo.businclusivo.repositories.ReclamoRepository;
import com.businclusivo.businclusivo.services.ReclamoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReclamoServiceImplement implements ReclamoService {
    @Autowired
    private ReclamoRepository repo;

    @Override
    public void insert(Reclamo reclamo) {
        repo.save(reclamo);
    }

    @Override
    public List<Reclamo> list() {
        return repo.findAll();
    }

    @Override
    public void delete(int id) {
        repo.deleteById(id);
    }

    @Override
    public Reclamo listID(int id) {
        return repo.findById(id).orElse(new Reclamo());
    }
}
