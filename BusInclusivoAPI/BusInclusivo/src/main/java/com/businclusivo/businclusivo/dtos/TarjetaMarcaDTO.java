package com.businclusivo.businclusivo.dtos;

public class TarjetaMarcaDTO {
    private String marcaName;
    private int marcaCount;

    public TarjetaMarcaDTO() {
    }

    public TarjetaMarcaDTO(String marcaName, int marcaCount) {
        this.marcaName = marcaName;
        this.marcaCount = marcaCount;
    }

    public String getMarcaName() {
        return marcaName;
    }

    public void setMarcaName(String marcaName) {
        this.marcaName = marcaName;
    }

    public int getMarcaCount() {
        return marcaCount;
    }

    public void setMarcaCount(int marcaCount) {
        this.marcaCount = marcaCount;
    }
}
