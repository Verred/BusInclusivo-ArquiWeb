import { Role } from "./Role"
export class Usuario2{

    username: string=""
    password: string=""
    enabled:boolean=true
    id: number = 0
   
    roles : Role[] = [];

    email:string=""
    direccion:string=""
    telefono: number = 0
    fechaNacimiento :Date = new Date(Date.now());
}