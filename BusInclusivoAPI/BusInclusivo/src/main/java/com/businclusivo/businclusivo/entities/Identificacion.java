package com.businclusivo.businclusivo.entities;

import javax.persistence.*;
import java.time.LocalDate;
@Entity
@Table(name= "Identificacion")
public class Identificacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idIdentificacion;
    @Column(name = "numDocumento", length = 20 , nullable = false)
    private String numDocumento;
    @ManyToOne
    @JoinColumn(name = "idTipoDocumento")
    private TipoDocumento tipoDocumento;
    @ManyToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;
    @Column(name = "fechaVencimiento",  nullable = false)
    private LocalDate fechaVencimiento;

    public Identificacion() {
    }

    public Identificacion(int idIdentificacion, String numDocumento, TipoDocumento tipoDocumento, Usuario usuario, LocalDate fechaVencimiento) {
        this.idIdentificacion = idIdentificacion;
        this.numDocumento = numDocumento;
        this.tipoDocumento = tipoDocumento;
        this.usuario = usuario;
        this.fechaVencimiento = fechaVencimiento;
    }

    public int getIdIdentificacion() {
        return idIdentificacion;
    }

    public void setIdIdentificacion(int idIdentificacion) {
        this.idIdentificacion = idIdentificacion;
    }

    public String getNumDocumento() {
        return numDocumento;
    }

    public void setNumDocumento(String numDocumento) {
        this.numDocumento = numDocumento;
    }

    public TipoDocumento getTipoDocumento() {
        return tipoDocumento;
    }

    public void setTipoDocumento(TipoDocumento tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public LocalDate getFechaVencimiento() {
        return fechaVencimiento;
    }

    public void setFechaVencimiento(LocalDate fechaVencimiento) {
        this.fechaVencimiento = fechaVencimiento;
    }
}
