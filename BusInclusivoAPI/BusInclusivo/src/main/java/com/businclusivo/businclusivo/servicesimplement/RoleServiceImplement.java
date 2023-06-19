package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.Role;
import com.businclusivo.businclusivo.repositories.RoleRepository;
import com.businclusivo.businclusivo.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service

public class RoleServiceImplement implements RoleService {
    @Autowired
    private RoleRepository rR;


    public void insert(Role role) {
        rR.save(role);
    }


    public List<Role> list() {
        // TODO Auto-generated method stub
        return rR.findAll();
    }
}
