package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.Users;

import java.util.List;

public interface UsersService {
    public Integer insert(Users user);

    List<Users> list();
}
