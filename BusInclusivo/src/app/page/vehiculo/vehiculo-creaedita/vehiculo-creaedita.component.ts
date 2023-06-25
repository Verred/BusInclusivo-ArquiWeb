import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';
import { Vehiculo } from 'src/app/model/Vehiculo';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TarjetaPropiedad } from 'src/app/model/TarjetaPropiedad';
import { TarjetapropiedadService } from 'src/app/service/tarjetapropiedad.service';
import { EstadoVehiculo } from 'src/app/model/EstadoVehiculo';
import { EstadoVehiculoService } from 'src/app/service/estadovehiculo.service';

@Component({
  selector: 'app-vehiculo-creaedita',
  templateUrl: './vehiculo-creaedita.component.html',
  styleUrls: ['./vehiculo-creaedita.component.css']
})
export class VehiculoCreaeditaComponent {
  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({})
  entidad: Vehiculo = new Vehiculo();
  mensaje: string = "";


  listaEstado: EstadoVehiculo[] = [];
  listaTarjeta: TarjetaPropiedad[] = [];

  idEstadoSele: number = 0;
  idTarjetaSele: number = 0;

  constructor(
    private servi: VehiculoService, 
    private router: Router,
    private route: ActivatedRoute,

    private ServicioTarjeta: TarjetapropiedadService,
    private ServicioEstado: EstadoVehiculoService,
  ) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    
    this.ServicioEstado.list().subscribe(data => {this.listaEstado = data})
    this.ServicioTarjeta.list().subscribe(data => {this.listaTarjeta = data})

    this.form = new FormGroup({
      id: new FormControl(),
      estado: new FormControl(),
      tarjeta :new FormControl(),
    })
  }

  aceptar(): void {
    this.entidad.idVehiculo = this.form.value['id'];
    this.entidad.estadoVehiculo.situacion =this.form.value['estadoVehiculo.situacion'];
    this.entidad.tarjetaPropiedad.tarjetaNumero=this.form.value['tarjeta.tarjetaNumero']


    let EstadoIndepe = new EstadoVehiculo();
    EstadoIndepe.idEstadoVehiculo = this.idEstadoSele;
    this.entidad.estadoVehiculo = EstadoIndepe ;

    let TarjetaIndepe = new TarjetaPropiedad();
    TarjetaIndepe.idTarjetaPropiedad = this.idTarjetaSele;
    this.entidad.tarjetaPropiedad = TarjetaIndepe ;

   

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

      this.router.navigate(['pages/vehiculos']);

    } else {
      this.mensaje = "Ingrese todos los datos"
    }
  }
  init() {
    if (this.edicion) {
      this.servi.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({       
          id: new FormControl(data.idVehiculo),
          estado: new FormControl(data.estadoVehiculo),
          tarjeta :new FormControl(data.tarjetaPropiedad),
        });
      });
    }
  }
}
