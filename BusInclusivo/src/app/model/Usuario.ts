export class Usuario{
    idUsuario:number=0
    email:string=""
    direccion:string=""
    nombre:string=""
    contraseña:string=""
    salt:string=""
    telefono: number = 0
    fechaNacimiento :Date = new Date(Date.now());

}