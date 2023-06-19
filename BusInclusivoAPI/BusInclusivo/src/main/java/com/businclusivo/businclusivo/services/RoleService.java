package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.Role;

import java.util.List;

public interface RoleService {
    public void insert(Role role);

    List<Role> list();
}
