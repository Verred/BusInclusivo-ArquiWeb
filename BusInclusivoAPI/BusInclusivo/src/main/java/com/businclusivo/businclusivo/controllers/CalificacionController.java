package pe.edu.upc.bus.controller;
import org.modelmapper.ModelMapper;

import pe.edu.upc.bus.dtos.CalificacionDTO;
import pe.edu.upc.bus.entities.Calificacion;
import pe.edu.upc.bus.servicies.CalificacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;
import java.util.List;


@RestController
@RequestMapping("/calificaciones")
public class CalificacionController {

    private CalificacionService mS;
    //insert
    @PostMapping
    public void insert(@RequestBody CalificacionDTO dto){
        ModelMapper mp=new ModelMapper();
        Calificacion m=mp.map(dto, Calificacion.class);
        mS.insert(m);
    }

    //list
    @GetMapping
    public List<CalificacionDTO> list(){
        return mS.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,CalificacionDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        mS.delete(id);
    }

    @GetMapping("/{id}")
    public CalificacionDTO listID(@PathVariable ("id") Integer id){
        ModelMapper mp=new ModelMapper();
        CalificacionDTO dto =mp.map(mS.listID(id), CalificacionDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody CalificacionDTO dto){
        ModelMapper mp=new ModelMapper();
        Calificacion m=mp.map(dto,Calificacion.class);
        mS.insert(m);
    }

}
