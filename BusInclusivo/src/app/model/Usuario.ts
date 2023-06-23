import { Users } from "./Users";

export class Usuario{
    idUsuario:number=0
    email:string=""
    direccion:string=""
    nombre:string=""
    telefono: number = 0
    fechaNacimiento :Date = new Date(Date.now());
    users: Users= new Users();
}