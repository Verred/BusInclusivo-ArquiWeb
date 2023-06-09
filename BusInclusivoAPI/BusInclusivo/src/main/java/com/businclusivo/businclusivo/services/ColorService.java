package com.businclusivo.businclusivo.services;

import com.businclusivo.businclusivo.entities.Color;

import java.util.List;

public interface ColorService {
    public void insert( Color color);
    List<Color> list();
    public void delete(int id);
    public Color listID(int id);
}
