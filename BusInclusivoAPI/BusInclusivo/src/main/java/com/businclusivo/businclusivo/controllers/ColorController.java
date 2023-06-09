package com.businclusivo.businclusivo.controllers;

import com.businclusivo.businclusivo.dtos.ColorDTO;

import com.businclusivo.businclusivo.entities.Color;

import com.businclusivo.businclusivo.services.ColorService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
@RestController
@RequestMapping("/Colores")
public class ColorController {
    @Autowired
    private ColorService Servic;
    //insert

    @PostMapping
    public void insert(@RequestBody ColorDTO dto){
        ModelMapper mp=new ModelMapper();
        Color m=mp.map(dto, Color.class);
        Servic.insert(m);
    }

    //list
    @GetMapping
    public List<ColorDTO> list(){
        return Servic.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,ColorDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        Servic.delete(id);
    }

    @GetMapping("/{id}")
    public ColorDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        ColorDTO dto =mp.map(Servic.listID(id), ColorDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody ColorDTO dto){
        ModelMapper mp=new ModelMapper();
        Color m=mp.map(dto,Color.class);
        Servic.insert(m);
    }
}
