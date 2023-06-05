package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.Coordenada;
import com.businclusivo.businclusivo.entities.TipoDocumento;
import com.businclusivo.businclusivo.repositories.CoordenadaRepository;
import com.businclusivo.businclusivo.repositories.TipoDocumentoRepository;
import com.businclusivo.businclusivo.services.CoordenadaService;
import com.businclusivo.businclusivo.services.TipoDocumentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CoordenadaServiceImplement implements CoordenadaService {
    @Autowired
    private CoordenadaRepository repo;

    @Override
    public void insert(Coordenada coordenada)    {
        repo.save(coordenada);
    }

    @Override
    public List<Coordenada> list()    {
        return repo.findAll();
    }

    @Override
    public void delete(int id)    {
        repo.deleteById(id);
    }
    @Override
    public Coordenada listID(int id) {
        return repo.findById(id).orElse(new Coordenada());
    }
}

