package com.businclusivo.businclusivo.dtos;

import com.businclusivo.businclusivo.entities.Marca;
import com.businclusivo.businclusivo.entities.Modelo;

import java.time.LocalDate;

public class TarjetaPropiedadDTO {
    private int idTarjetaPropiedad;
    private String placa;
    private int TarjetaNumero;
    private LocalDate anio;
    private String descripcion;
    private int cantidadAsientos;
    private Marca marca;

    private Modelo modelo;

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
        return TarjetaNumero;
    }

    public void setTarjetaNumero(int tarjetaNumero) {
        TarjetaNumero = tarjetaNumero;
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
}
