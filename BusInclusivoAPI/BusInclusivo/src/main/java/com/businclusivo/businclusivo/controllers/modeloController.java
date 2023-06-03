package com.businclusivo.businclusivo.controllers;

import com.businclusivo.businclusivo.dtos.ModeloDTO;
import com.businclusivo.businclusivo.entities.Modelo;
import com.businclusivo.businclusivo.services.ModeloService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/modelos")
public class modeloController {

    private ModeloService mS;
    //insert
    @PostMapping
    public void insert(@RequestBody ModeloDTO dto){
        ModelMapper mp=new ModelMapper();
        Modelo m=mp.map(dto, Modelo.class);
        mS.insert(m);
    }

    //list
    @GetMapping
    public List<ModeloDTO> list(){
        return mS.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,ModeloDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        mS.delete(id);
    }

    @GetMapping("/{id}")
    public ModeloDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        ModeloDTO dto =mp.map(mS.listID(id), ModeloDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody ModeloDTO dto){
        ModelMapper mp=new ModelMapper();
        Modelo m=mp.map(dto,Modelo.class);
        mS.insert(m);
    }

}
