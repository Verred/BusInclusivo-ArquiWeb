package com.businclusivo.businclusivo.controllers;

import com.businclusivo.businclusivo.dtos.CoordenadaDTO;
import com.businclusivo.businclusivo.entities.Coordenada;
import com.businclusivo.businclusivo.services.CoordenadaService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/Coordenadas")
public class CoordenadaController {
    @Autowired
    private CoordenadaService Servic;
    //insert

    @PostMapping
    public void insert(@RequestBody CoordenadaDTO dto){
        ModelMapper mp=new ModelMapper();
        Coordenada m=mp.map(dto, Coordenada.class);
        Servic.insert(m);
    }

    //list
    @GetMapping
    public List<CoordenadaDTO> list(){
        return Servic.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,CoordenadaDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        Servic.delete(id);
    }

    @GetMapping("/{id}")
    public CoordenadaDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        CoordenadaDTO dto =mp.map(Servic.listID(id), CoordenadaDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody CoordenadaDTO dto){
        ModelMapper mp=new ModelMapper();
        Coordenada m=mp.map(dto,Coordenada.class);
        Servic.insert(m);
    }
}
