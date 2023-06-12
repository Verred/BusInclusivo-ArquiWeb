package com.businclusivo.businclusivo.controllers;

import com.businclusivo.businclusivo.dtos.TipoDocumentoDTO;
import com.businclusivo.businclusivo.entities.TipoDocumento;
import com.businclusivo.businclusivo.services.TipoDocumentoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/tipodocumentos")
public class TipoDocumentoController {
    @Autowired
    private TipoDocumentoService Servic;
    //insert

    @PostMapping
    public void insert(@RequestBody TipoDocumentoDTO dto){
        ModelMapper mp=new ModelMapper();
        TipoDocumento m=mp.map(dto, TipoDocumento.class);
        Servic.insert(m);
    }

    //list
    @GetMapping
    public List<TipoDocumentoDTO> list(){
        return Servic.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,TipoDocumentoDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        Servic.delete(id);
    }

    @GetMapping("/{id}")
    public TipoDocumentoDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        TipoDocumentoDTO dto =mp.map(Servic.listID(id), TipoDocumentoDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody TipoDocumentoDTO dto){
        ModelMapper mp=new ModelMapper();
        TipoDocumento m=mp.map(dto,TipoDocumento.class);
        Servic.insert(m);
    }

}
