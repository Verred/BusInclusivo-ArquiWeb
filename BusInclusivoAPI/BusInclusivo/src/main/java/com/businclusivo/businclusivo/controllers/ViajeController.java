package com.businclusivo.businclusivo.controllers;

import com.businclusivo.businclusivo.dtos.TipoDocumentoDTO;
import com.businclusivo.businclusivo.dtos.ViajeDTO;
import com.businclusivo.businclusivo.entities.TipoDocumento;
import com.businclusivo.businclusivo.entities.Viaje;
import com.businclusivo.businclusivo.services.TipoDocumentoService;
import com.businclusivo.businclusivo.services.ViajeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
@RestController
@RequestMapping("/Viajes")
public class ViajeController {
    @Autowired
    private ViajeService Servic;
    //insert

    @PostMapping
    public void insert(@RequestBody ViajeDTO dto){
        ModelMapper mp=new ModelMapper();
        Viaje m=mp.map(dto, Viaje.class);
        Servic.insert(m);
    }

    //list
    @GetMapping
    public List<ViajeDTO> list(){
        return Servic.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,ViajeDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        Servic.delete(id);
    }

    @GetMapping("/{id}")
    public ViajeDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        ViajeDTO dto =mp.map(Servic.listID(id), ViajeDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody ViajeDTO dto){
        ModelMapper mp=new ModelMapper();
        Viaje m=mp.map(dto,Viaje.class);
        Servic.insert(m);
    }
}
