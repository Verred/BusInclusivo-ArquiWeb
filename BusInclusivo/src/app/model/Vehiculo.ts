import { EstadoVehiculo } from "./EstadoVehiculo";
import { TarjetaPropiedad } from "./TarjetaPropiedad";

export class Vehiculo {
    idVehiculo :number=0
    tarjetaPropiedad: TarjetaPropiedad= new TarjetaPropiedad();
    estadoVehiculo: EstadoVehiculo = new EstadoVehiculo();
}