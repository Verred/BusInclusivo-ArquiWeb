import { Marca } from "./Marca";
import { Modelo } from "./Modelo";
import { Color } from "./Color";

export class TarjetaPropiedad{
    idTarjetaPropiedad:number=0
    marca: Marca= new Marca();
    modelo: Modelo= new Modelo();
    color: Color= new Color();
    placa: string="";
    tarjetaNumero:number=0
    anio: Date=new Date(Date.now());
    descripcion: string="";
    cantidadAsientos:number=0;
}