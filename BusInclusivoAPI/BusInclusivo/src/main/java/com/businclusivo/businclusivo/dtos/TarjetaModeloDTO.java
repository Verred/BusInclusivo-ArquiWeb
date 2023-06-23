package com.businclusivo.businclusivo.dtos;

public class TarjetaModeloDTO {
    private String modeloName;
    private int modeloCount;

    public TarjetaModeloDTO() {
    }

    public TarjetaModeloDTO(String modeloName, int modeloCount) {
        this.modeloName = modeloName;
        this.modeloCount = modeloCount;
    }

    public String getModeloName() {
        return modeloName;
    }

    public void setModeloName(String modeloName) {
        this.modeloName = modeloName;
    }

    public int getModeloCount() {
        return modeloCount;
    }

    public void setModeloCount(int modeloCount) {
        this.modeloCount = modeloCount;
    }
}
