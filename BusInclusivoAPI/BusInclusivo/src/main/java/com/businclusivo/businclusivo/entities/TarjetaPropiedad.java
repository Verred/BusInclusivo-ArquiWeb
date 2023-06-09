package com.businclusivo.businclusivo.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name= "TarjetaPropiedad")
public class TarjetaPropiedad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idTarjetaPropiedad;

    @Column(name = "placa", length = 20, nullable = false)

    private String placa;
    @Column(name = "TarjetaNumero",  nullable = false)
    private int tarjetaNumero;
    @Column(name = "anio", nullable = false)

    private LocalDate anio;
    @Column(name = "descripcion", length = 100, nullable = false)

    private String descripcion;

    @Column(name = "cantidadAsientos",  nullable = false)
    private int cantidadAsientos;

    @ManyToOne
    @JoinColumn(name = "idMarca")
    private Marca marca;

    @ManyToOne
    @JoinColumn(name = "idModelo")
    private Modelo modelo;

    @ManyToOne
    @JoinColumn(name = "idColor")
    private Color color;
    public TarjetaPropiedad() {
    }

    public TarjetaPropiedad(int idTarjetaPropiedad, String placa, int tarjetaNumero, LocalDate anio, String descripcion, int cantidadAsientos, Marca marca, Modelo modelo, Color color) {
        this.idTarjetaPropiedad = idTarjetaPropiedad;
        this.placa = placa;
        this.tarjetaNumero = tarjetaNumero;
        this.anio = anio;
        this.descripcion = descripcion;
        this.cantidadAsientos = cantidadAsientos;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    public int getIdTarjetaPropiedad() {
        return idTarjetaPropiedad;
    }

    public void setIdTarjetaPropiedad(int idTarjetaPropiedad) {
        this.idTarjetaPropiedad = idTarjetaPropiedad;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public int getTarjetaNumero() {
        return tarjetaNumero;
    }

    public void setTarjetaNumero(int tarjetaNumero) {
        this.tarjetaNumero = tarjetaNumero;
    }

    public LocalDate getAnio() {
        return anio;
    }

    public void setAnio(LocalDate anio) {
        this.anio = anio;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getCantidadAsientos() {
        return cantidadAsientos;
    }

    public void setCantidadAsientos(int cantidadAsientos) {
        this.cantidadAsientos = cantidadAsientos;
    }

    public Marca getMarca() {
        return marca;
    }

    public void setMarca(Marca marca) {
        this.marca = marca;
    }

    public Modelo getModelo() {
        return modelo;
    }

    public void setModelo(Modelo modelo) {
        this.modelo = modelo;
    }

    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }
}

