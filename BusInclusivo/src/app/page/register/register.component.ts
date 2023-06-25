import { Component } from '@angular/core';
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Users';
import { EventEmitter, Output } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({})
  entidad: Usuario = new Usuario();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();


  constructor(
    private servi: RegisterService, 
    private router: Router,
    private route: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    
    this.form = new FormGroup({
      id: new FormControl(),
      email: new FormControl(),
      direccion :new FormControl(),
      nombre :new FormControl(),
      telefono :new FormControl(),
      fechaNacimiento :new FormControl(),
      pass :new FormControl(),
    })
  }

  aceptar(): void {
    this.entidad.id = this.form.value['id'];
    this.entidad.email = this.form.value['email'];
    this.entidad.direccion = this.form.value['direccion'];
    this.entidad.username = this.form.value['nombre'];
    this.entidad.telefono = this.form.value['telefono'];
    this.entidad.fechaNacimiento = this.form.value['fechaNacimiento'];
    this.entidad.password = this.form.value['pass'];

    if ( this.form.value['nombre'].lenght > 0) {

        
        console.log(this.servi.insert(this.entidad))

      this.router.navigate(['/login']);

    } else {
      this.mensaje = "Ingrese todos los datos"
    }
  }
  @Output() abrirLogin = new EventEmitter<void>();

  // Otro código del componente...

  abrirLoginComponent() {
    this.abrirLogin.emit();
  }
}
