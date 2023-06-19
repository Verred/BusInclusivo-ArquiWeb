import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';
import { Reclamo } from 'src/app/model/Reclamo';
import { ReclamoService } from 'src/app/service/reclamo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Viaje } from 'src/app/model/Viaje';
import { ViajeService } from 'src/app/service/viaje.service';

@Component({
  selector: 'app-reclamo-creaedita',
  templateUrl: './reclamo-creaedita.component.html',
  styleUrls: ['./reclamo-creaedita.component.css']
})
export class ReclamoCreaeditaComponent {
  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({})
  entidad: Reclamo = new Reclamo();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();

  listaViajes: Viaje[] = [];

  idViajeSele: number = 0;

  constructor(
    private servi: ReclamoService, 
    private router: Router,
    private route: ActivatedRoute,

    private ServicioViaje: ViajeService,

  ) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    
    this.ServicioViaje.list().subscribe(data => {this.listaViajes = data})
    this.form = new FormGroup({
      id: new FormControl(),
      evidencia: new FormControl(),
      comentario :new FormControl(),
      fecha :new FormControl(),
      viaje :new FormControl(),
    })
  }

  aceptar(): void {
    this.entidad.idReclamo = this.form.value['id'];
    this.entidad.evidencia = this.form.value['evidencia'];
    this.entidad.comentario=this.form.value['comentario'];
    this.entidad.horaFecha=this.form.value['fecha'];
    this.entidad.viaje.idViaje=this.form.value['viaje.idViaje'];


    let ViajeIndepe = new Viaje();
    ViajeIndepe.idViaje = this.idViajeSele;
    this.entidad.viaje = ViajeIndepe ;


    if ( /*this.form.value['placa'].lenght > 0 && */1) {

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

      this.router.navigate(['reclamos']);

    } else {
      this.mensaje = "Ingrese todos los datos"
    }
  }
  init() {
    if (this.edicion) {
      this.servi.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({      
          id: new FormControl(data.idReclamo),
          evidencia: new FormControl(data.evidencia),
          comentario :new FormControl(data.comentario),
          fecha :new FormControl(data.horaFecha),
          viaje :new FormControl(data.viaje.idViaje),
        });
      });
    }
  }


}
