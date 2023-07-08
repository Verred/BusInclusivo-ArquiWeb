import { Conductor } from "./Conductor";
import { Vehiculo } from "./Vehiculo";
import { Pasajero } from "./Pasajero";
import { Pago } from "./Pago";
import { Ruta } from "./Ruta";


export class Viaje{
    idViaje :number=0
    ruta: Ruta= new Ruta();
    conductor: Conductor= new Conductor();
    vehiculo: Vehiculo= new Vehiculo();
    pasajero: Pasajero = new Pasajero();
    pago: Pago = new Pago();
    fechaViaje: Date=new Date(Date.now());
    horasViaje: number=0;
}