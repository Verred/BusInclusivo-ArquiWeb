package com.businclusivo.businclusivo.dtos;

public class CountConductorDTO {

    private String name;
    private int horas;

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

    public int getHoras() {
        return horas;
    }

    public void setHoras(int horas) {
        this.horas = horas;
    }
}
