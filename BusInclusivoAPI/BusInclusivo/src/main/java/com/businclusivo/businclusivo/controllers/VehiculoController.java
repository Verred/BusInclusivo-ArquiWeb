package com.businclusivo.businclusivo.controllers;


import com.businclusivo.businclusivo.dtos.VehiculoDTO;
import com.businclusivo.businclusivo.entities.Vehiculo;
import com.businclusivo.businclusivo.services.VehiculoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/vehiculos")
public class VehiculoController {
    @Autowired
    private VehiculoService Servic;
    //insert

    @PostMapping
    public void insert(@RequestBody VehiculoDTO dto){
        ModelMapper mp=new ModelMapper();
        Vehiculo m=mp.map(dto, Vehiculo.class);
        Servic.insert(m);
    }

    //list
    @GetMapping
    public List<VehiculoDTO> list(){
        return Servic.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,VehiculoDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        Servic.delete(id);
    }

    @GetMapping("/{id}")
    public VehiculoDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        VehiculoDTO dto =mp.map(Servic.listID(id), VehiculoDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody VehiculoDTO dto){
        ModelMapper mp=new ModelMapper();
        Vehiculo m=mp.map(dto,Vehiculo.class);
        Servic.insert(m);
    }
}
