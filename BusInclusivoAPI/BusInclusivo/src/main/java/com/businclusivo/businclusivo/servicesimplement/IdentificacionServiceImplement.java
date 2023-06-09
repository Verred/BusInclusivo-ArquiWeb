package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.Identificacion;
import com.businclusivo.businclusivo.entities.TipoDocumento;
import com.businclusivo.businclusivo.repositories.IdentificacionRepository;
import com.businclusivo.businclusivo.repositories.TipoDocumentoRepository;
import com.businclusivo.businclusivo.services.IdentificacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IdentificacionServiceImplement implements IdentificacionService {
    @Autowired
    private IdentificacionRepository repo;
    @Override
    public void insert(Identificacion identificacion)   {
        repo.save(identificacion);
    }

    @Override
    public List<Identificacion> list()   {
        return repo.findAll();
    }

    @Override
    public void delete(int id)   {
        repo.deleteById(id);
    }

    @Override
    public Identificacion listID(int id) {
        return repo.findById(id).orElse(new Identificacion());
    }
}
