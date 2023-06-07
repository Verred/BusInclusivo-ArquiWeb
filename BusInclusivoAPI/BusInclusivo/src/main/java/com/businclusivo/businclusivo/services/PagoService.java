package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.Pago;
import com.businclusivo.businclusivo.entities.TipoDocumento;

import java.util.List;


public interface PagoService {
    public void insert( Pago pago);
    List<Pago> list();
    public void delete(int id);
    public Pago listID(int id);
}
