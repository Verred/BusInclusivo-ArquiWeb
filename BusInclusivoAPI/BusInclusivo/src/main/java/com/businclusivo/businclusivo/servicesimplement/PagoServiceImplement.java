package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.Pago;
import com.businclusivo.businclusivo.repositories.PagoRepository;
import com.businclusivo.businclusivo.services.PagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PagoServiceImplement implements PagoService {
    @Autowired
    private PagoRepository repo;

    @Override
    public void insert(Pago pago)    {
        repo.save(pago);
    }

    @Override
    public List<Pago> list()    {
        return repo.findAll();
    }

    @Override
    public void delete(int id)    {
        repo.deleteById(id);
    }

    @Override
    public Pago listID(int id)  {
        return repo.findById(id).orElse(new Pago());
    }
}
