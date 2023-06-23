package com.businclusivo.businclusivo.entities;


import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name= "Usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUsuario;
    @Column(name = "email", length = 25, nullable = false)
    private String email;
    @Column(name = "direccion", length = 25, nullable = false)
    private String direccion;
    @Column(name = "nombre", length = 25, nullable = false)
    private String nombre;
    @Column(name = "telefono", nullable = false)
    private int telefono;
    @Column(name = "fechaNacimiento", nullable = false)
    private LocalDate fechaNacimiento;
    @OneToOne
    @JoinColumn(name = "idUser")
    private Users users;
    public Usuario() {
    }

    public Usuario(int idUsuario, String email, String direccion, String nombre, int telefono, LocalDate fechaNacimiento, Users users) {
        this.idUsuario = idUsuario;
        this.email = email;
        this.direccion = direccion;
        this.nombre = nombre;
        this.telefono = telefono;
        this.fechaNacimiento = fechaNacimiento;
        this.users = users;
    }

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }
}
