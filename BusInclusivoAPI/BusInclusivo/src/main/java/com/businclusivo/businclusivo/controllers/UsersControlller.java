package com.businclusivo.businclusivo.controllers;
import com.businclusivo.businclusivo.dtos.UserDTO;
import com.businclusivo.businclusivo.entities.Users;
import com.businclusivo.businclusivo.services.UsersService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

@Controller
@Secured({"ROLE_ADMIN"})
@RequestMapping("/users")
public class UsersControlller {

    @Autowired
    private PasswordEncoder bcrypt;
    @Autowired
    private UsersService uService;

    @PostMapping("/save")
    public String saveUser(@Valid Users user, BindingResult result, Model model, SessionStatus status)
            throws Exception {
        if (result.hasErrors()) {
            return "usersecurity/user";
        } else {
            String bcryptPassword = bcrypt.encode(user.getPassword());
            user.setPassword(bcryptPassword);
            int rpta = uService.insert(user);
            if (rpta > 0) {
                model.addAttribute("mensaje", "Ya existe");
                return "usersecurity/user";
            } else {
                model.addAttribute("mensaje", "Se guardó correctamente");
                status.setComplete();
            }
        }
        model.addAttribute("listaUsuarios", uService.list());

        return "usersecurity/listUser";
    }

    @GetMapping("/list")
    public String listUser(Model model) {
        try {
            model.addAttribute("user", new Users());
            model.addAttribute("listaUsuarios", uService.list());
        } catch (Exception e) {
            model.addAttribute("error", e.getMessage());
        }
        return "usersecurity/listUser";
    }

    /*********************/

    @PostMapping
    public void insert(@RequestBody UserDTO dto){
        ModelMapper mp=new ModelMapper();
        Users m=mp.map(dto, Users.class);
        uService.insert(m);
    }

    //list
    @GetMapping
    public List<UserDTO> list(){
        return uService.list().stream().map(x->{
            ModelMapper mp=new ModelMapper();
            return mp.map(x,UserDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id){
        uService.delete(id);
    }

    @GetMapping("/{id}")
    public UserDTO listID(@PathVariable ("id") Long id){
        ModelMapper mp=new ModelMapper();
        UserDTO dto =mp.map(uService.listID(id), UserDTO.class);
        return dto;
    }
    @PutMapping
    public void goUpdate(@RequestBody UserDTO dto){
        ModelMapper mp=new ModelMapper();
        Users m=mp.map(dto,Users.class);
        uService.insert(m);
    }


}
