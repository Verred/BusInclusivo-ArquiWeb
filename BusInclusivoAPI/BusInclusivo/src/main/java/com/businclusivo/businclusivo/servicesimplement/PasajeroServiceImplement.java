package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.Pasajero;
import com.businclusivo.businclusivo.entities.TipoDocumento;
import com.businclusivo.businclusivo.repositories.PasajeroRepository;
import com.businclusivo.businclusivo.repositories.TipoDocumentoRepository;
import com.businclusivo.businclusivo.services.PasajeroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PasajeroServiceImplement implements PasajeroService {
    @Autowired
    private PasajeroRepository repo;
    @Override
    public void insert(Pasajero pasajero)   {
        repo.save(pasajero);
    }

    @Override
    public List<Pasajero> list()   {
        return repo.findAll();
    }

    @Override
    public void delete(int id)   {
        repo.deleteById(id);
    }

    @Override
    public Pasajero listID(int id) {
        return repo.findById(id).orElse(new Pasajero());
    }
}
