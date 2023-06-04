package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.MetodoPago;
import com.businclusivo.businclusivo.repositories.MetodoPagoRepository;
import com.businclusivo.businclusivo.services.MetodoPagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MetodoPagoServicieImplement implements MetodoPagoService {

    @Autowired
    private MetodoPagoRepository mR;
    public void insert(MetodoPago metodoPago) {
        mR.save(metodoPago);
    }
    public List<MetodoPago> list() {
        return mR.findAll();
    }
    public void delete(int idMetodoPago) {
        mR.deleteById(idMetodoPago);
    }
    public MetodoPago listID(int idMetodoPago) {
        return mR.findById(idMetodoPago).orElse(new MetodoPago());
    }

}
