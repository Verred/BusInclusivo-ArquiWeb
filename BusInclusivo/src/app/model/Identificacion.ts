import { TipoDocumento } from "./TipoDocumento";
import { Usuario } from "./Usuario";

export class Identificacion{
    idIdentificacion:number=0
    numDocumento: string=""
    tipoDocumento: TipoDocumento= new TipoDocumento();
    usuario: Usuario= new Usuario();
    fechaVencimiento: Date=new Date(Date.now());
}