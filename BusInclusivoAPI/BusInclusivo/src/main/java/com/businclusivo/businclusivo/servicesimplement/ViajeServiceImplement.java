package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.TipoDocumento;
import com.businclusivo.businclusivo.entities.Viaje;
import com.businclusivo.businclusivo.repositories.TipoDocumentoRepository;
import com.businclusivo.businclusivo.repositories.ViajeRepository;
import com.businclusivo.businclusivo.services.ViajeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ViajeServiceImplement implements ViajeService {

    @Autowired
    private ViajeRepository repo;
    @Override
    public void insert(Viaje viaje)   {
        repo.save(viaje);
    }

    @Override
    public List<Viaje> list()   {
        return repo.findAll();
    }

    @Override
    public void delete(int id)   {
        repo.deleteById(id);
    }

    @Override
    public Viaje listID(int id) {
        return repo.findById(id).orElse(new Viaje());
    }
}
