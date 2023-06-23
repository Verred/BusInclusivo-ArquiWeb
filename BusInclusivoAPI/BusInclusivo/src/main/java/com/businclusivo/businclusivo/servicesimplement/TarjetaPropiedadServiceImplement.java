package com.businclusivo.businclusivo.servicesimplement;


import com.businclusivo.businclusivo.dtos.TarjetaColorDTO;
import com.businclusivo.businclusivo.dtos.TarjetaMarcaDTO;
import com.businclusivo.businclusivo.dtos.TarjetaModeloDTO;
import com.businclusivo.businclusivo.entities.Marca;
import com.businclusivo.businclusivo.entities.TarjetaPropiedad;
import com.businclusivo.businclusivo.repositories.TarjetaPropiedadRepository;
import com.businclusivo.businclusivo.services.TarjetaPropiedaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TarjetaPropiedadServiceImplement  implements TarjetaPropiedaService {


    @Autowired
    private TarjetaPropiedadRepository tr;

    @Override
    public void insert(TarjetaPropiedad tarjetaPropiedad)  {
        tr.save(tarjetaPropiedad);
    }

    @Override
    public List<TarjetaPropiedad> list()  {
        return tr.findAll();
    }

    @Override
    public void delete(int idTarjetaPropiedad)  {
        tr.deleteById(idTarjetaPropiedad);
    }

    @Override
    public TarjetaPropiedad listID(int idTarjetaPropiedad)  {
        return tr.findById(idTarjetaPropiedad).orElse(new TarjetaPropiedad());
    }

    @Override
    public List<TarjetaColorDTO> reporteColor() {
        List<String[]> ColorInTarjeta = tr.getCountColorByTarjeta();
        List<TarjetaColorDTO> tarjetaColorDTOS = new ArrayList<>();

        for (String[] data : ColorInTarjeta) {
            TarjetaColorDTO dto = new TarjetaColorDTO();
            dto.setColoName(data[0]);
            dto.setColorCount(Integer.parseInt(data[1]));
            tarjetaColorDTOS.add(dto);
        }

        return tarjetaColorDTOS;
    }

    @Override
    public List<TarjetaMarcaDTO> reporteMarca() {
        List<String[]> MarcasInTarjeta = tr.getCountMarcaByTarjeta();
        List<TarjetaMarcaDTO> tarjetaMarcaDTOS = new ArrayList<>();

        for (String[] data : MarcasInTarjeta) {
            TarjetaMarcaDTO dto = new TarjetaMarcaDTO();
            dto.setMarcaName(data[0]);
            dto.setMarcaCount(Integer.parseInt(data[1]));
            tarjetaMarcaDTOS.add(dto);
        }

        return tarjetaMarcaDTOS;
    }

    @Override
    public List<TarjetaModeloDTO> reporteModelo() {
        List<String[]> ModelInTarjetas = tr.getCountModeloByTarjeta();
        List<TarjetaModeloDTO> tarjetaModeloDTOS = new ArrayList<>();

        for (String[] data : ModelInTarjetas) {
            TarjetaModeloDTO dto = new TarjetaModeloDTO();
            dto.setModeloName(data[0]);
            dto.setModeloCount(Integer.parseInt(data[1]));
            tarjetaModeloDTOS.add(dto);
        }

        return tarjetaModeloDTOS;
    }
}
