import { Component  } from '@angular/core';
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';
import { Coordenada } from 'src/app/model/Coordenada';
import { CoordenadaService } from 'src/app/service/coordenada.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-coordenada-creaedita',
  templateUrl: './coordenada-creaedita.component.html',
  styleUrls: ['./coordenada-creaedita.component.css']
})
export class CoordenadaCreaeditaComponent {
  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({})
  entidad: Coordenada = new Coordenada();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();


  constructor(
    private servi: CoordenadaService, 
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
      longitud: new FormControl(),
      latitud :new FormControl(),
      referencia :new FormControl(),
    })
  }

  aceptar(): void {
    this.entidad.idCoordenada = this.form.value['id'];
    this.entidad.longitud = this.form.value['longitud'];
    this.entidad.latitud=this.form.value['latitud'];
    this.entidad.referencia=this.form.value['referencia'];


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

      this.router.navigate(['pages/coordenadas']);

    } else {
      this.mensaje = "Ingrese todos los datos"
    }
  }
  init() {
    if (this.edicion) {
      this.servi.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({       
          id: new FormControl(data.idCoordenada ),
          longitud: new FormControl(data.longitud),
          latitud :new FormControl(data.latitud),
          referencia :new FormControl(data.referencia),
        });
      });
    }
  }
}
