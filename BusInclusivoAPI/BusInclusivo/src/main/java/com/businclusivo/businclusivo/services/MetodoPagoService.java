package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.MetodoPago;

import java.util.List;

public interface MetodoPagoService {
    public void insert(MetodoPago metodoPago);
    List<MetodoPago> list();
    public void delete(int idMetodoPago);
    public MetodoPago listID(int idMetodoPago);

}
