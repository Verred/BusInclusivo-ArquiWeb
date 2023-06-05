package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.TipoDocumento;
import com.businclusivo.businclusivo.repositories.TipoDocumentoRepository;
import com.businclusivo.businclusivo.services.TipoDocumentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TipoDocumentoServiceImplement  implements TipoDocumentoService {

    @Autowired
    private TipoDocumentoRepository repo;
    @Override
    public void insert(TipoDocumento tipoDocumento)   {
        repo.save(tipoDocumento);
    }

    @Override
    public List<TipoDocumento> list()   {
        return repo.findAll();
    }

    @Override
    public void delete(int id)   {
        repo.deleteById(id);
    }

    @Override
    public TipoDocumento listID(int id) {
        return repo.findById(id).orElse(new TipoDocumento());
    }
}
