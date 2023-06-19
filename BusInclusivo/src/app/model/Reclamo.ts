import { Viaje } from "./Viaje"

export class Reclamo{
  idReclamo:number=0
  evidencia:number=0
  comentario: string=""
  horaFecha: Date=new Date(Date.now());
  viaje: Viaje = new Viaje();
}
