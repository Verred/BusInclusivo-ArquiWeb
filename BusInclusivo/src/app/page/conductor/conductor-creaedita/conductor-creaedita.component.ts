import { Component } from '@angular/core';
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';
import { Conductor } from 'src/app/model/Conductor';
import { ConductorService } from 'src/app/service/conductor.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Users';
import { UsuarioService } from 'src/app/service/usuario.service';
@Component({
  selector: 'app-conductor-creaedita',
  templateUrl: './conductor-creaedita.component.html',
  styleUrls: ['./conductor-creaedita.component.css']
})
export class ConductorCreaeditaComponent {
  
  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({})
  entidad: Conductor = new Conductor();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();

  listaUser: Usuario[] = [];

  idUserSele: number = 0;

  constructor(
    private servi: ConductorService, 
    private router: Router,
    private route: ActivatedRoute,

    private ServicioUsuario: UsuarioService,
  
  ) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    
    this.ServicioUsuario.list().subscribe(data => {this.listaUser = data})

    this.form = new FormGroup({
      id: new FormControl(),
      user: new FormControl(),
      licencia :new FormControl(),
      horas :new FormControl(),
    })
  }

  aceptar(): void {
    this.entidad.idConductor = this.form.value['id'];
    this.entidad.usuario = this.form.value['user'];
    this.entidad.licencia =this.form.value['licencia'];
    this.entidad.horasViaje =this.form.value['horas'];
   

    let UserIndepe = new Usuario();
    UserIndepe.idUsuario = this.idUserSele;
    this.entidad.usuario = UserIndepe ;
   

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

      this.router.navigate(['pages/conductores']);

    } else {
      this.mensaje = "Ingrese todos los datos"
    }
  }
  init() {
    if (this.edicion) {
      this.servi.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({       
          id: new FormControl(data.idConductor),
          user: new FormControl(data.usuario),
          licencia :new FormControl(data.licencia),
          horas :new FormControl(data.horasViaje),
        });
      });
    }
  }
}
