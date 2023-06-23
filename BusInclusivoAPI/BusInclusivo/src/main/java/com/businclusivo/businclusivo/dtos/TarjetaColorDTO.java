package com.businclusivo.businclusivo.dtos;

public class TarjetaColorDTO {
    private String coloName;
    private int colorCount;

    public TarjetaColorDTO() {
    }

    public TarjetaColorDTO(String coloName, int colorCount) {
        this.coloName = coloName;
        this.colorCount = colorCount;
    }

    public String getColoName() {
        return coloName;
    }

    public void setColoName(String coloName) {
        this.coloName = coloName;
    }

    public int getColorCount() {
        return colorCount;
    }

    public void setColorCount(int colorCount) {
        this.colorCount = colorCount;
    }
}
