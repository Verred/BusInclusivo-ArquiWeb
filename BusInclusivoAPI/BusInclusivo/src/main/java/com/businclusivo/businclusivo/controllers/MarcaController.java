package com.businclusivo.businclusivo.controllers;
import org.modelmapper.ModelMapper;

import com.businclusivo.businclusivo.dtos.MarcaDTO;
import com.businclusivo.businclusivo.entities.Marca;
import com.businclusivo.businclusivo.services.MarcaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;
import java.util.List;

@RestController
@RequestMapping("/marcas")
public class MarcaController {
    @Autowired
    private MarcaService mS;
    //insert
    @PostMapping
    public void insert(@RequestBody MarcaDTO dto){
        ModelMapper mp=new ModelMapper();
        Marca m=mp.map(dto, Marca.class);
        mS.insert(m);
    }

    //list
    @GetMapping
    public List<MarcaDTO> list(){
        return mS.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,MarcaDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        mS.delete(id);
    }

    @GetMapping("/{id}")
    public MarcaDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        MarcaDTO dto =mp.map(mS.listID(id), MarcaDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody MarcaDTO dto){
        ModelMapper mp=new ModelMapper();
        Marca m=mp.map(dto,Marca.class);
        mS.insert(m);
    }

}
