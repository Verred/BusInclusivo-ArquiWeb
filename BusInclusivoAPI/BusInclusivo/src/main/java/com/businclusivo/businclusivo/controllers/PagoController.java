package com.businclusivo.businclusivo.controllers;

import com.businclusivo.businclusivo.dtos.PagoDTO;
import com.businclusivo.businclusivo.entities.Pago;
import com.businclusivo.businclusivo.services.PagoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/Pagos")
public class PagoController {
    @Autowired
    private PagoService Servic;
    //insert

    @PostMapping
    public void insert(@RequestBody PagoDTO dto){
        ModelMapper mp=new ModelMapper();
        Pago m=mp.map(dto, Pago.class);
        Servic.insert(m);
    }

    //list
    @GetMapping
    public List<PagoDTO> list(){
        return Servic.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,PagoDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        Servic.delete(id);
    }

    @GetMapping("/{id}")
    public PagoDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        PagoDTO dto =mp.map(Servic.listID(id), PagoDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody PagoDTO dto){
        ModelMapper mp=new ModelMapper();
        Pago m=mp.map(dto,Pago.class);
        Servic.insert(m);
    }
}
