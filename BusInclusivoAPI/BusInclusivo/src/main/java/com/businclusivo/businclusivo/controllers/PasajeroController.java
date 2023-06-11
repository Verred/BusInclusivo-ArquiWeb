package com.businclusivo.businclusivo.controllers;

import com.businclusivo.businclusivo.dtos.PasajeroDTO;
import com.businclusivo.businclusivo.dtos.TipoDocumentoDTO;
import com.businclusivo.businclusivo.entities.Pasajero;
import com.businclusivo.businclusivo.entities.TipoDocumento;
import com.businclusivo.businclusivo.services.PasajeroService;
import com.businclusivo.businclusivo.services.TipoDocumentoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
@RestController
@RequestMapping("/pasajeros")
public class PasajeroController {
    @Autowired
    private PasajeroService Servic;
    //insert

    @PostMapping
    public void insert(@RequestBody PasajeroDTO dto){
        ModelMapper mp=new ModelMapper();
        Pasajero m=mp.map(dto, Pasajero.class);
        Servic.insert(m);
    }

    //list
    @GetMapping
    public List<PasajeroDTO> list(){
        return Servic.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,PasajeroDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        Servic.delete(id);
    }

    @GetMapping("/{id}")
    public PasajeroDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        PasajeroDTO dto =mp.map(Servic.listID(id), PasajeroDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody PasajeroDTO dto){
        ModelMapper mp=new ModelMapper();
        Pasajero m=mp.map(dto,Pasajero.class);
        Servic.insert(m);
    }
}
