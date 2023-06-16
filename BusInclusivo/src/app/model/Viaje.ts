import { Conductor } from "./Conductor";
import { Vehiculo } from "./Vehiculo";
import { Calificacion } from "./calificacion";
import { Pasajero } from "./Pasajero";
import { Pago } from "./Pago";
import { Ruta } from "./Ruta";


export class Viaje{
    idViaje :number=0
    ruta: Ruta= new Ruta();
    conductor: Conductor= new Conductor();
    vehiculo: Vehiculo= new Vehiculo();
    pasajero: Pasajero = new Pasajero();
    calificacion: Calificacion = new Calificacion();
    pago: Pago = new Pago();
    fechaViaje: Date=new Date(Date.now());
}