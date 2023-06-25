package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.Users;

import java.util.List;

public interface UsersService {
    public Integer insert(Users user);

    List<Users> list();

    Users findWihtName(String name);

    public void delete(Long id);
    public Users listID(Long id);
}
