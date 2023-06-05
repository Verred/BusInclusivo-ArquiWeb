package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.TipoDocumento;
import com.businclusivo.businclusivo.entities.Usuario;
import com.businclusivo.businclusivo.repositories.TipoDocumentoRepository;
import com.businclusivo.businclusivo.repositories.UsuarioRepository;
import com.businclusivo.businclusivo.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServiceImplement implements UsuarioService {
    @Autowired
    private UsuarioRepository repo;

    @Override
    public void insert(Usuario usuario) {
        repo.save(usuario);
    }

    @Override
    public List<Usuario> list() {
        return repo.findAll();
    }

    @Override
    public void delete(int id)    {
        repo.deleteById(id);
    }

    @Override
    public Usuario listID(int id) {
        return repo.findById(id).orElse(new Usuario());
    }
}
