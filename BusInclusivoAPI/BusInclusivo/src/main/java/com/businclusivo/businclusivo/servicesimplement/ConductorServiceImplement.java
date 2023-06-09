package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.Conductor;
import com.businclusivo.businclusivo.entities.TipoDocumento;
import com.businclusivo.businclusivo.repositories.ConductorRepository;
import com.businclusivo.businclusivo.repositories.TipoDocumentoRepository;
import com.businclusivo.businclusivo.services.ConductorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConductorServiceImplement implements ConductorService {
    @Autowired
    private ConductorRepository repo;
    @Override
    public void insert(Conductor conductor)   {
        repo.save(conductor);
    }

    @Override
    public List<Conductor> list()   {
        return repo.findAll();
    }

    @Override
    public void delete(int id)   {
        repo.deleteById(id);
    }

    @Override
    public Conductor listID(int id) {
        return repo.findById(id).orElse(new Conductor());
    }
}
