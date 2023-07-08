package com.businclusivo.businclusivo.dtos;

public class CountConductorDTO {

    private String name;
    private float horas;

    public CountConductorDTO() {
    }

    public CountConductorDTO(String name, int horas) {
        this.name = name;
        this.horas = horas;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getHoras() {
        return horas;
    }

    public void setHoras(float horas) {
        this.horas = horas;
    }
}
