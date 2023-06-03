package com.businclusivo.businclusivo.servicesimplement;


import com.businclusivo.businclusivo.entities.Marca;
import com.businclusivo.businclusivo.entities.TarjetaPropiedad;
import com.businclusivo.businclusivo.repositories.TarjetaPropiedadRepository;
import com.businclusivo.businclusivo.services.TarjetaPropiedaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TarjetaPropiedadServiceImplement  implements TarjetaPropiedaService {


    @Autowired
    private TarjetaPropiedadRepository tr;

    @Override
    public void insert(TarjetaPropiedad tarjetaPropiedad)  {
        tr.save(tarjetaPropiedad);
    }

    @Override
    public List<TarjetaPropiedad> list()  {
        return tr.findAll();
    }

    @Override
    public void delete(int idTarjetaPropiedad)  {
        tr.deleteById(idTarjetaPropiedad);
    }

    @Override
    public TarjetaPropiedad listID(int idTarjetaPropiedad)  {
        return tr.findById(idTarjetaPropiedad).orElse(new TarjetaPropiedad());
    }
}
