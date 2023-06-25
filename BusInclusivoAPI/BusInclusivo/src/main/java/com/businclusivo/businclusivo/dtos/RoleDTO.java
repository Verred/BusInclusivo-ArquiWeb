package com.businclusivo.businclusivo.dtos;

import com.businclusivo.businclusivo.entities.Users;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class RoleDTO {
    private Long id;

    private String rol;

    private Users user;

    public Long getId() {
        return id;
    }

    public RoleDTO() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }
}
