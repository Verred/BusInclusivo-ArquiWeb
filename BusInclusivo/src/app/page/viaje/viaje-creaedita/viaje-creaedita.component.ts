import { Component } from '@angular/core';
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';
import { Viaje } from 'src/app/model/Viaje';
import { ViajeService } from 'src/app/service/viaje.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pasajero } from 'src/app/model/Pasajero';
import { Calificacion } from 'src/app/model/calificacion';
import { Pago } from 'src/app/model/Pago';
import { Vehiculo } from 'src/app/model/Vehiculo';
import { Conductor } from 'src/app/model/Conductor';
import { Ruta } from 'src/app/model/Ruta';
import { PasajeroService } from 'src/app/service/pasajero.service';
import { CalificacionService } from 'src/app/service/calificacion.service';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { ConductorService } from 'src/app/service/conductor.service';
import { RutaService } from 'src/app/service/ruta.service';
import { PagoService } from 'src/app/service/pago.service';


@Component({
  selector: 'app-viaje-creaedita',
  templateUrl: './viaje-creaedita.component.html',
  styleUrls: ['./viaje-creaedita.component.css']
})
export class ViajeCreaeditaComponent {
  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({})
  entidad: Viaje = new Viaje();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();

  listaRuta: Ruta[] = [];
  listaConductor: Conductor[] = [];
  listaVehiculo: Vehiculo[] = [];
  listaPasajero: Pasajero[] = [];
  listaPago: Pago[] = [];


  idRutaSele: number  = 0;
  idConductoSele: number = 0;
  idVehicuSele: number = 0;
  idPasajeroSele: number = 0;
  idPagoSele: number = 0;

  constructor(
    private servi: ViajeService, 
    private router: Router,
    private route: ActivatedRoute,

    private ServRuta: RutaService,
    private ServConductor: ConductorService,
    private ServVehiculo: VehiculoService,
    private ServPasajero: PasajeroService,
    private ServPago: PagoService

  ) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    
    this.ServRuta.list().subscribe(data => {this.listaRuta = data})
    this.ServConductor.list().subscribe(data => {this.listaConductor = data})
    this.ServVehiculo.list().subscribe(data => {this.listaVehiculo = data})
    this.ServPasajero.list().subscribe(data => {this.listaPasajero = data})
    this.ServPago.list().subscribe(data => {this.listaPago = data})



    this.form = new FormGroup({
      id: new FormControl(),
      conductor: new FormControl(),
      vehiculo :new FormControl(),
      pasajero :new FormControl(),
      pago :new FormControl(),
      ruta :new FormControl(),
      fecha :new FormControl(),
    })
  }

  aceptar(): void {
    this.entidad.idViaje = this.form.value['id'];
    this.entidad.conductor.usuario.nombre = this.form.value['conductor.usuario.nombre'];
    this.entidad.vehiculo.tarjetaPropiedad.tarjetaNumero =this.form.value['vehiculo.tarjetaPropiedad.tarjetaNumero'];
    this.entidad.pasajero.usuario.nombre =this.form.value['pasajero.usuario.nombre'];
    this.entidad.pago.precioKM =this.form.value['pago.precioKM'];
    this.entidad.ruta.descripcion = this.form.value['ruta.descripcion'];
    this.entidad.fechaViaje = this.form.value['fecha'];

    let ConductorIndepe = new Conductor();
    ConductorIndepe.idConductor = this.idConductoSele;
    this.entidad.conductor = ConductorIndepe;

    let VehiculoIndepe = new Vehiculo();
    VehiculoIndepe.idVehiculo = this.idVehicuSele;
    this.entidad.vehiculo = VehiculoIndepe;

    let PasajeroIndepe = new Pasajero();
    PasajeroIndepe.idPasajero = this.idPasajeroSele;
    this.entidad.pasajero = PasajeroIndepe;

    let PagoIndepe = new Pago();
    PagoIndepe.idPago = this.idPagoSele;
    this.entidad.pago = PagoIndepe;

    let RutaIndepe = new Ruta();
    RutaIndepe.idRuta = this.idRutaSele;
    this.entidad.ruta = RutaIndepe;

    if ( /*this.form.value['placa'].lenght > 0 && */ 1 ) {

      console.log(this.entidad)

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

      this.router.navigate(['viajes']);

    } else {
      this.mensaje = "Ingrese todos los datos"
    }
  }
  init() {
    if (this.edicion) {
      this.servi.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({       
          id: new FormControl(data.idViaje),
          conductor: new FormControl(data.conductor),
          vehiculo :new FormControl(data.vehiculo),
          pasajero :new FormControl(data.pasajero),
          pago :new FormControl(data.pago),
          ruta :new FormControl(data.ruta),
          fecha :new FormControl(data.fechaViaje),

        });
      });
    }
  }

}
