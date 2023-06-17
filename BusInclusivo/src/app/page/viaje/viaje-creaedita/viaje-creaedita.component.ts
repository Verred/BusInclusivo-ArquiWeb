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
  listacalificacion: Calificacion[] = [];
  listapago: Pago[] = [];


  idMarcaSele: number = 0;
  idModeloSele: number = 0;
  idColorSele: number = 0;

  idRutaSele: number  = 0;
  idConductoSele: number = 0;
  idVehicuSele: number = 0;
  idPasajero: number = 0;
  idCalificacion: number =0;
  idPago: number = 0;

  constructor(
    private servi: ViajeService, 
    private router: Router,
    private route: ActivatedRoute,

    private ServRuta: RutaService,
    private ServConductor: ConductorService,
    private ServVehiculo: VehiculoService,
    private ServPasaj: PasajeroService,
    private ServCalif: CalificacionService,
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

    this.form = new FormGroup({
      id: new FormControl(),
      placa: new FormControl(),
      modelo :new FormControl(),
      marca :new FormControl(),
      color :new FormControl(),
      tarjeta :new FormControl(),
      descripcion :new FormControl(),
      cantidad :new FormControl(),
      anio :new FormControl()
    })
  }

  aceptar(): void {
    this.entidad.idTarjetaPropiedad = this.form.value['id'];
    this.entidad.placa = this.form.value['placa'];
    this.entidad.modelo.descripcion=this.form.value['modelo.descripcion'];
    this.entidad.marca.descripcion=this.form.value['marca.descripcion'];
    this.entidad.color.descripcion=this.form.value['color.descripcion'];
    this.entidad.tarjetaNumero = this.form.value['tarjeta'];
    this.entidad.descripcion = this.form.value['descripcion'];
    this.entidad.cantidadAsientos = this.form.value['cantidad'];
    this.entidad.anio = this.form.value['anio'];


    let MarcaIndepe = new Marca();
    MarcaIndepe.idMarca = this.idMarcaSele;
    this.entidad.marca = MarcaIndepe ;

    let ModeloIndepe = new Modelo();
    ModeloIndepe.idModelo = this.idModeloSele;
    this.entidad.modelo = ModeloIndepe ;

    let ColorIndepe = new Color();
    ColorIndepe.idColor = this.idColorSele;
    this.entidad.color = ColorIndepe ;
   

    if ( /*this.form.value['placa'].lenght > 0 && */ this.idColorSele > 0 && this.idMarcaSele > 0 && this.idModeloSele > 0 ) {

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

      this.router.navigate(['tarjetapropiedades']);

    } else {
      this.mensaje = "Ingrese todos los datos"
    }
  }
  init() {
    if (this.edicion) {
      this.servi.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({       
          id: new FormControl(data.idTarjetaPropiedad),
          placa: new FormControl(data.placa),
          modelo :new FormControl(data.modelo),
          marca :new FormControl(data.marca),
          color :new FormControl(data.color),
          tarjeta :new FormControl(data.tarjetaNumero),
          descripcion :new FormControl(data.descripcion),
          cantidad :new FormControl(data.cantidadAsientos),
          anio :new FormControl(data.anio)
        });
      });
    }
  }

}
