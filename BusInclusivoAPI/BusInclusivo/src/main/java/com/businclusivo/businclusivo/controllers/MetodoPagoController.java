package com.businclusivo.businclusivo.controllers;

import com.businclusivo.businclusivo.dtos.MetodoPagoDTO;
import com.businclusivo.businclusivo.entities.MetodoPago;
import com.businclusivo.businclusivo.services.MetodoPagoService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/metodospagos")
public class MetodoPagoController {

    @Autowired
    private MetodoPagoService mS;

    //insert
    @PostMapping
    public void insert(@RequestBody MetodoPagoDTO dto){
        ModelMapper mp=new ModelMapper();
        MetodoPago m=mp.map(dto, MetodoPago.class);
        mS.insert(m);
    }

    //list
    @GetMapping
    public List<MetodoPagoDTO> list(){
        return mS.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,MetodoPagoDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        mS.delete(id);
    }

    @GetMapping("/{id}")
    public MetodoPagoDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        MetodoPagoDTO dto =mp.map(mS.listID(id), MetodoPagoDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody MetodoPagoDTO dto){
        ModelMapper mp=new ModelMapper();
        MetodoPago m=mp.map(dto,MetodoPago.class);
        mS.insert(m);
    }


}
