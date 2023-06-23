import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';
import { TarjetaPropiedad } from 'src/app/model/TarjetaPropiedad';
import { TarjetapropiedadService } from 'src/app/service/tarjetapropiedad.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Marca } from 'src/app/model/Marca';
import { MarcaService } from 'src/app/service/marca.service';
import { Modelo } from 'src/app/model/Modelo';
import { ModeloService } from 'src/app/service/modelo.service';
import { Color } from 'src/app/model/Color';
import { ColorService } from 'src/app/service/color.service';
@Component({
  selector: 'app-tarjetapropiedad-creaedita',
  templateUrl: './tarjetapropiedad-creaedita.component.html',
  styleUrls: ['./tarjetapropiedad-creaedita.component.css']
})
export class TarjetapropiedadCreaeditaComponent {
  
  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({})
  entidad: TarjetaPropiedad = new TarjetaPropiedad();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();

  listaModelo: Modelo[] = [];
  listaColor: Color[] = [];
  listaMarca: Marca[] = [];

  idMarcaSele: number = 0;
  idModeloSele: number = 0;
  idColorSele: number = 0;

  constructor(
    private servi: TarjetapropiedadService, 
    private router: Router,
    private route: ActivatedRoute,

    private ServicioModelo: ModeloService,
    private ServicioMarca: MarcaService,
    private ServicioColor: ColorService,
  ) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    
    this.ServicioColor.list().subscribe(data => {this.listaColor = data})
    this.ServicioMarca.list().subscribe(data => {this.listaMarca = data})
    this.ServicioModelo.list().subscribe(data => {this.listaModelo = data})

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

      this.router.navigate(['pages/tarjetapropiedades']);

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
