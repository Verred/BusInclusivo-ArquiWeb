package com.businclusivo.businclusivo.controllers;

import com.businclusivo.businclusivo.dtos.IdentificacionDTO;
import com.businclusivo.businclusivo.dtos.TipoDocumentoDTO;
import com.businclusivo.businclusivo.entities.Identificacion;
import com.businclusivo.businclusivo.entities.TipoDocumento;
import com.businclusivo.businclusivo.services.IdentificacionService;
import com.businclusivo.businclusivo.services.TipoDocumentoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
@RestController
@RequestMapping("/Identificaciones")
public class IdentificacionController {
    @Autowired
    private IdentificacionService Servic;
    //insert

    @PostMapping
    public void insert(@RequestBody IdentificacionDTO dto){
        ModelMapper mp=new ModelMapper();
        Identificacion m=mp.map(dto, Identificacion.class);
        Servic.insert(m);
    }

    //list
    @GetMapping
    public List<IdentificacionDTO> list(){
        return Servic.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,IdentificacionDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        Servic.delete(id);
    }

    @GetMapping("/{id}")
    public IdentificacionDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        IdentificacionDTO dto =mp.map(Servic.listID(id), IdentificacionDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody IdentificacionDTO dto){
        ModelMapper mp=new ModelMapper();
        Identificacion m=mp.map(dto, Identificacion.class);
        Servic.insert(m);
    }
}
