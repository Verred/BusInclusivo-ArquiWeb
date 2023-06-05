package com.businclusivo.businclusivo.services;
import com.businclusivo.businclusivo.entities.Usuario;

import java.util.List;

public interface UsuarioService {
    public void insert( Usuario usuario);
    List<Usuario> list();
    public void delete(int id);
    public Usuario listID(int id);
}
