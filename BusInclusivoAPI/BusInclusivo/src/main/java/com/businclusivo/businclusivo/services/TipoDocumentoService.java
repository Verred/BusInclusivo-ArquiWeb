package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.TipoDocumento;

import java.util.List;

public interface TipoDocumentoService {

    public void insert( TipoDocumento tipoDocumento);
    List<TipoDocumento> list();
    public void delete(int id);
    public TipoDocumento listID(int id);
}
