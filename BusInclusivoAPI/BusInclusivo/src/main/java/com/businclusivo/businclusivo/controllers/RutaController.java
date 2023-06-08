package com.businclusivo.businclusivo.controllers;

import com.businclusivo.businclusivo.dtos.RutaDTO;
import com.businclusivo.businclusivo.entities.Ruta;
import com.businclusivo.businclusivo.services.RutaService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/Rutas")
public class RutaController {
    @Autowired
    private RutaService Servic;
    //insert

    @PostMapping
    public void insert(@RequestBody RutaDTO dto){
        ModelMapper mp=new ModelMapper();
        Ruta m=mp.map(dto, Ruta.class);
        Servic.insert(m);
    }

    //list
    @GetMapping
    public List<RutaDTO> list(){
        return Servic.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,RutaDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        Servic.delete(id);
    }

    @GetMapping("/{id}")
    public RutaDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        RutaDTO dto =mp.map(Servic.listID(id), RutaDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody RutaDTO dto){
        ModelMapper mp=new ModelMapper();
        Ruta m=mp.map(dto,Ruta.class);
        Servic.insert(m);
    }
}
