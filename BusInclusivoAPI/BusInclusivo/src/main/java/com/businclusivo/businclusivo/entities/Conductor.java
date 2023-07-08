package com.businclusivo.businclusivo.entities;

import javax.persistence.*;

@Entity
@Table(name= "Conductor")
public class Conductor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idConductor;
    @OneToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario; /* OtO idUser*/
    @Column(name = "licencia", nullable = false)
    private int licencia;
    @Column(name = "totalHoras", nullable = false)
    private float horasViaje;

    public Conductor() {
    }

    public Conductor(int idConductor, Usuario usuario, int licencia, float horasViaje) {
        this.idConductor = idConductor;
        this.usuario = usuario;
        this.licencia = licencia;
        this.horasViaje = horasViaje;
    }

    public int getIdConductor() {
        return idConductor;
    }

    public void setIdConductor(int idConductor) {
        this.idConductor = idConductor;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public int getLicencia() {
        return licencia;
    }

    public void setLicencia(int licencia) {
        this.licencia = licencia;
    }

    public float getHorasViaje() {
        return horasViaje;
    }

    public void setHorasViaje(float horasViaje) {
        this.horasViaje = horasViaje;
    }
}
