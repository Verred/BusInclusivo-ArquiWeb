package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.Color;
import com.businclusivo.businclusivo.entities.TipoDocumento;
import com.businclusivo.businclusivo.repositories.ColorRepository;
import com.businclusivo.businclusivo.repositories.TipoDocumentoRepository;
import com.businclusivo.businclusivo.services.ColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColorServiceImplement implements ColorService {

    @Autowired
    private ColorRepository repo;
    @Override
    public void insert(Color color)   {
        repo.save(color);
    }

    @Override
    public List<Color> list()   {
        return repo.findAll();
    }

    @Override
    public void delete(int id)   {
        repo.deleteById(id);
    }

    @Override
    public Color listID(int id) {
        return repo.findById(id).orElse(new Color());
    }

}
