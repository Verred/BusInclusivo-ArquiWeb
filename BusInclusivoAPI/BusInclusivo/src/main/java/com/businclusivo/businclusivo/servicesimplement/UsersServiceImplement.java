package com.businclusivo.businclusivo.servicesimplement;

import com.businclusivo.businclusivo.entities.Users;
import com.businclusivo.businclusivo.repositories.UsersRepository;
import com.businclusivo.businclusivo.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UsersServiceImplement  implements UsersService {
    @Autowired
    private UsersRepository uR;


    public Integer insert(Users user) {
        int rpta = uR.buscarUsername(user.getUsername());
        if (rpta == 0) {
            uR.save(user);
        }
        return rpta;
    }

    public List<Users> list() {
        // TODO Auto-generated method stub
        return uR.findAll();
    }

    @Override
    public Users findWihtName(String name) {
        return uR.findByUsername(name);
    }

    @Override
    public void delete(Long id) {
        uR.deleteById(id);
    }


    @Override
    public Users listID(Long id) {
        return uR.findById(id).orElse(new Users());
    }
}
