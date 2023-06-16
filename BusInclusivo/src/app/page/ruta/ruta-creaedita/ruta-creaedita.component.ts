import { Component } from '@angular/core';
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';
import { Ruta } from 'src/app/model/Ruta';
import { RutaService } from 'src/app/service/ruta.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Coordenada } from 'src/app/model/Coordenada';
import { CoordenadaService } from 'src/app/service/coordenada.service';



@Component({
  selector: 'app-ruta-creaedita',
  templateUrl: './ruta-creaedita.component.html',
  styleUrls: ['./ruta-creaedita.component.css']
})
export class RutaCreaeditaComponent {
  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({})
  entidad: Ruta = new Ruta();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();

  listaCoordenada: Coordenada[] = [];
  //listaColor: Color[] = [];


  idCoordenadaSTsele: number = 0;
  idCoordenadaEDsele: number = 0;
 

  constructor(
    private servi: RutaService, 
    private router: Router,
    private route: ActivatedRoute,

    private ServicioCoord: CoordenadaService,
   // private ServicioMarca: MarcaService,
  ) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    
    this.ServicioCoord.list().subscribe(data => {this.listaCoordenada = data})
   // this.ServicioMarca.list().subscribe(data => {this.listaMarca = data})

    this.form = new FormGroup({
      id: new FormControl(),
      StartCoordenada: new FormControl(),
      EndCoordenada :new FormControl(),
      descripcion :new FormControl()
    })
  }

  aceptar(): void {
    this.entidad.idRuta = this.form.value['id'];
    this.entidad.startCoordenada.referencia = this.form.value['StartCoordenada.referencia'];
    this.entidad.endCoordenada.referencia=this.form.value['EndCoordenada.referencia'];
    this.entidad.descripcion=this.form.value['descripcion'];


    let CoordeInde = new Coordenada();
    CoordeInde.idCoordenada = this.idCoordenadaSTsele;
    this.entidad.startCoordenada = CoordeInde ;

    let CoordeInde2 = new Coordenada();
    CoordeInde2.idCoordenada = this.idCoordenadaEDsele;
    this.entidad.endCoordenada = CoordeInde2 ;

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

      console.log(this.entidad)
      

      this.router.navigate(['rutas']);

    } else {
      this.mensaje = "Ingrese todos los datos"
    }
  }
  init() {
    if (this.edicion) {
      this.servi.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({       
          id: new FormControl(data.idRuta),
          StartCoordenada: new FormControl(data.startCoordenada),
          EndCoordenada :new FormControl(data.endCoordenada),
          descripcion :new FormControl(data.descripcion)
        });
      });
    }
  }
}
