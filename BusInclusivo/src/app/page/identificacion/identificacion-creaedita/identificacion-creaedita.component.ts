import { Component  } from '@angular/core';
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';
import { Identificacion } from 'src/app/model/Identificacion';
import { IdentificacionService } from 'src/app/service/identificacion.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TipoDocumento } from 'src/app/model/TipoDocumento';
import { Usuario } from 'src/app/model/Users';
import { TipoDocumentoService } from 'src/app/service/tipodocumento.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-identificacion-creaedita',
  templateUrl: './identificacion-creaedita.component.html',
  styleUrls: ['./identificacion-creaedita.component.css']
})
export class IdentificacionCreaeditaComponent {

  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({})
  entidad: Identificacion = new Identificacion();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();

  listaUser: Usuario[] = [];
  listaTipos: TipoDocumento[] = [];


  idUserSele: number = 0;
  idTipoSele: number = 0;

  constructor(
    private servi: IdentificacionService, 
    private router: Router,
    private route: ActivatedRoute,

    private ServicioUser: UsuarioService,
    private ServicioTipo: TipoDocumentoService,
  ) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    
    this.ServicioTipo.list().subscribe(data => {this.listaTipos = data})
    this.ServicioUser.list().subscribe(data => {this.listaUser = data})

    this.form = new FormGroup({
      id: new FormControl(),
      tipo: new FormControl(),
      user :new FormControl(),
      num :new FormControl(),
      fecha :new FormControl(),
    })
  }

  aceptar(): void {
    this.entidad.idIdentificacion = this.form.value['id'];
    this.entidad.numDocumento = this.form.value['num'];
    this.entidad.tipoDocumento.descripcion=this.form.value['tipo.descripcion'];
    this.entidad.usuario.nombre=this.form.value['user'];
    this.entidad.fechaVencimiento =this.form.value['fecha'];


    let UserIndepe = new Usuario();
    UserIndepe.idUsuario = this.idUserSele;
    this.entidad.usuario = UserIndepe ;

    let TipoIndepe = new TipoDocumento();
    TipoIndepe.idTipoDocumento = this.idTipoSele;
    this.entidad.tipoDocumento = TipoIndepe ;
   

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

      this.router.navigate(['pages/identificaciones']);

    } else {
      this.mensaje = "Ingrese todos los datos"
    }
  }
  init() {
    if (this.edicion) {
      this.servi.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({       

          id: new FormControl(data.idIdentificacion),
          tipo: new FormControl(data.tipoDocumento),
          user :new FormControl(data.usuario),
          num :new FormControl(data.numDocumento),
          fecha :new FormControl(data.fechaVencimiento),
        });
      });
    }
  }

}
