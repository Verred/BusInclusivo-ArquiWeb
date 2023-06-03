package com.businclusivo.businclusivo.controllers;

import com.businclusivo.businclusivo.dtos.TarjetaPropiedadDTO;
import com.businclusivo.businclusivo.entities.TarjetaPropiedad;
import com.businclusivo.businclusivo.services.TarjetaPropiedaService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/TarjetaPopiedades")
public class TarjetaPropiedadController {

    @Autowired
    private TarjetaPropiedaService mS;
    //insert

    @PostMapping
    public void insert(@RequestBody TarjetaPropiedadDTO dto){
        ModelMapper mp=new ModelMapper();
        TarjetaPropiedad m=mp.map(dto, TarjetaPropiedad.class);
        mS.insert(m);
    }

    //list
    @GetMapping
    public List<TarjetaPropiedadDTO> list(){
        return mS.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,TarjetaPropiedadDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        mS.delete(id);
    }

    @GetMapping("/{id}")
    public TarjetaPropiedadDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        TarjetaPropiedadDTO dto =mp.map(mS.listID(id), TarjetaPropiedadDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody TarjetaPropiedadDTO dto){
        ModelMapper mp=new ModelMapper();
        TarjetaPropiedad m=mp.map(dto,TarjetaPropiedad.class);
        mS.insert(m);
    }

}
