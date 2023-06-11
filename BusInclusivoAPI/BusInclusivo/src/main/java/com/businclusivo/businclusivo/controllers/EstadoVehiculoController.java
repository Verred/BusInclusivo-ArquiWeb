package com.businclusivo.businclusivo.controllers;

import com.businclusivo.businclusivo.dtos.EstadoVehiculoDTO;
import com.businclusivo.businclusivo.entities.EstadoVehiculo;
import com.businclusivo.businclusivo.services.EstadoVehiculoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/estadovehiculos")
public class EstadoVehiculoController {
    @Autowired
    private EstadoVehiculoService Servic;
    //insert

    @PostMapping
    public void insert(@RequestBody EstadoVehiculoDTO dto){
        ModelMapper mp=new ModelMapper();
        EstadoVehiculo m=mp.map(dto, EstadoVehiculo.class);
        Servic.insert(m);
    }

    //list
    @GetMapping
    public List<EstadoVehiculoDTO> list(){
        return Servic.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,EstadoVehiculoDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        Servic.delete(id);
    }

    @GetMapping("/{id}")
    public EstadoVehiculoDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        EstadoVehiculoDTO dto =mp.map(Servic.listID(id), EstadoVehiculoDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody EstadoVehiculoDTO dto){
        ModelMapper mp=new ModelMapper();
        EstadoVehiculo m=mp.map(dto,EstadoVehiculo.class);
        Servic.insert(m);
    }
}
