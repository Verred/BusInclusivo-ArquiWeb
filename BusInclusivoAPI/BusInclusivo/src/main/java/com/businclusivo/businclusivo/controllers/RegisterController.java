package com.businclusivo.businclusivo.controllers;

import com.businclusivo.businclusivo.dtos.RoleDTO;
import com.businclusivo.businclusivo.dtos.UserAndRolDTO;
import com.businclusivo.businclusivo.dtos.UserDTO;
import com.businclusivo.businclusivo.entities.Marca;
import com.businclusivo.businclusivo.entities.Role;
import com.businclusivo.businclusivo.entities.Users;
import com.businclusivo.businclusivo.services.RoleService;
import com.businclusivo.businclusivo.services.UsersService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/register")
public class RegisterController {
    @Autowired
    private PasswordEncoder bcrypt;
    @Autowired
    private UsersService uService;
    @Autowired
    private RoleService rService;


    @PostMapping
    public void insert(@RequestBody Users user){
        String bcryptPassword = bcrypt.encode(user.getPassword());
        user.setPassword(bcryptPassword);
        int rpta = uService.insert(user);

        Users userTemp = uService.findWihtName(user.getUsername());
        RoleDTO roleDTO = new RoleDTO();
        roleDTO.setRol("ADMIN");
        roleDTO.setUser(userTemp);

        ModelMapper mpp=new ModelMapper();
        Role rol =mpp.map(roleDTO, Role.class);
        rService.insert(rol);

    }
    /*
    @PostMapping("/add")
    public void insert(@RequestBody UserAndRolDTO userAndRolDTO){

        String bcryptPassword = bcrypt.encode(userAndRolDTO.userDTO.getPassword());
        userAndRolDTO.userDTO.setPassword(bcryptPassword);

        ModelMapper mp=new ModelMapper();
        Users m=mp.map(userAndRolDTO.userDTO, Users.class);
        int rpta = uService.insert(m);



        ModelMapper mpp=new ModelMapper();
        Role rol =mpp.map(userAndRolDTO.roleDTO, Role.class);
        rService.insert(rol);
    }*/
 /******************/

}
