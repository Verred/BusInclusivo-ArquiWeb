package com.businclusivo.businclusivo.controllers;

import com.businclusivo.businclusivo.dtos.ReclamoDTO;

import com.businclusivo.businclusivo.entities.Reclamo;

import com.businclusivo.businclusivo.services.ReclamoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/Reclamos")
public class ReclamoController {
    @Autowired
    private ReclamoService Servic;
    //insert

    @PostMapping
    public void insert(@RequestBody ReclamoDTO dto){
        ModelMapper mp=new ModelMapper();
        Reclamo m=mp.map(dto, Reclamo.class);
        Servic.insert(m);
    }

    //list
    @GetMapping
    public List<ReclamoDTO> list(){
        return Servic.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,ReclamoDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        Servic.delete(id);
    }

    @GetMapping("/{id}")
    public ReclamoDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        ReclamoDTO dto =mp.map(Servic.listID(id), ReclamoDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody ReclamoDTO dto){
        ModelMapper mp=new ModelMapper();
        Reclamo m=mp.map(dto,Reclamo.class);
        Servic.insert(m);
    }
}
