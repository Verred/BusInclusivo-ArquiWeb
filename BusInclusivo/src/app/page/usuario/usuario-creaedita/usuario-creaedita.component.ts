import { Component } from '@angular/core';
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Users';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-creaedita',
  templateUrl: './usuario-creaedita.component.html',
  styleUrls: ['./usuario-creaedita.component.css']
})
export class UsuarioCreaeditaComponent {
  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({})
  entidad: Usuario = new Usuario();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();


  constructor(
    private servi: UsuarioService, 
    private router: Router,
    private route: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      email: new FormControl(),
      direccion :new FormControl(),
      nombre :new FormControl(),
      telefono :new FormControl(),
      fechaNacimiento :new FormControl(),
    })
  }

  aceptar(): void {
    this.entidad.idUsuario = this.form.value['id'];
    this.entidad.email = this.form.value['email'];
    this.entidad.direccion = this.form.value['direccion'];
    this.entidad.nombre = this.form.value['nombre'];
    this.entidad.telefono = this.form.value['telefono'];
    this.entidad.fechaNacimiento = this.form.value['fechaNacimiento'];


    if ( /*this.form.value['placa'].lenght > 0 && */ 1 ) {

      if (this.edicion){
        this.servi.update(this.entidad).subscribe(() => {
          this.servi.list().subscribe(data => {
            this.servi.setList(data);
          });
        });
      } else{
        this.servi.insert(this.entidad).subscribe(data => {
          this.servi.list().subscribe(data => {
            this.servi.setList(data);
          });
        });
      }

      this.router.navigate(['pages/usuarios']);

    } else {
      this.mensaje = "Ingrese todos los datos"
    }
  }
  init() {
    if (this.edicion) {
      this.servi.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({       

          id: new FormControl(data.idUsuario),
          email: new FormControl(data.email),
          direccion :new FormControl(data.direccion),
          nombre :new FormControl(data.nombre),
          telefono :new FormControl(data.telefono),
          fechaNacimiento :new FormControl(data.fechaNacimiento)

        });
      });
    }
  }
}
