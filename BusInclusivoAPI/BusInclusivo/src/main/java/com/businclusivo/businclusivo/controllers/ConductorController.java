package com.businclusivo.businclusivo.controllers;

import com.businclusivo.businclusivo.dtos.ConductorDTO;
import com.businclusivo.businclusivo.dtos.TipoDocumentoDTO;
import com.businclusivo.businclusivo.entities.Conductor;
import com.businclusivo.businclusivo.entities.TipoDocumento;
import com.businclusivo.businclusivo.services.ConductorService;
import com.businclusivo.businclusivo.services.TipoDocumentoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
@RestController
@RequestMapping("/Conductores")
public class ConductorController {
    @Autowired
    private ConductorService Servic;
    //insert

    @PostMapping
    public void insert(@RequestBody ConductorDTO dto){
        ModelMapper mp=new ModelMapper();
        Conductor m=mp.map(dto, Conductor.class);
        Servic.insert(m);
    }

    //list
    @GetMapping
    public List<ConductorDTO> list(){
        return Servic.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,ConductorDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        Servic.delete(id);
    }

    @GetMapping("/{id}")
    public ConductorDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        ConductorDTO dto =mp.map(Servic.listID(id), ConductorDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody ConductorDTO dto){
        ModelMapper mp=new ModelMapper();
        Conductor m=mp.map(dto,Conductor.class);
        Servic.insert(m);
    }
}
