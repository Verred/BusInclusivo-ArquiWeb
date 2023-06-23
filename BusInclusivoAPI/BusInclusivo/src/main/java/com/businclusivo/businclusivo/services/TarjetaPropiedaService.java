package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.dtos.TarjetaColorDTO;
import com.businclusivo.businclusivo.dtos.TarjetaMarcaDTO;
import com.businclusivo.businclusivo.dtos.TarjetaModeloDTO;
import com.businclusivo.businclusivo.entities.TarjetaPropiedad;

import java.util.List;

public interface TarjetaPropiedaService {
    public void insert( TarjetaPropiedad tarjetaPropiedad);
    List<TarjetaPropiedad> list();
    public void delete(int idTarjetaPropiedad);
    public TarjetaPropiedad listID(int idTarjetaPropiedad);
    public List<TarjetaColorDTO> reporteColor();
    public List<TarjetaMarcaDTO> reporteMarca();
    public List<TarjetaModeloDTO> reporteModelo();

}
