package com.businclusivo.businclusivo.controllers;

import com.businclusivo.businclusivo.dtos.UsuarioDTO;
import com.businclusivo.businclusivo.entities.Usuario;
import com.businclusivo.businclusivo.services.UsuarioService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    private UsuarioService Servic;
    //insert

    @PostMapping
    public void insert(@RequestBody UsuarioDTO dto){
        ModelMapper mp=new ModelMapper();
        Usuario m=mp.map(dto, Usuario.class);
        Servic.insert(m);
    }

    //list
    @GetMapping
    public List<UsuarioDTO> list(){
        return Servic.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,UsuarioDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        Servic.delete(id);
    }

    @GetMapping("/{id}")
    public UsuarioDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        UsuarioDTO dto =mp.map(Servic.listID(id), UsuarioDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody UsuarioDTO dto){
        ModelMapper mp=new ModelMapper();
        Usuario m=mp.map(dto,Usuario.class);
        Servic.insert(m);
    }
}
