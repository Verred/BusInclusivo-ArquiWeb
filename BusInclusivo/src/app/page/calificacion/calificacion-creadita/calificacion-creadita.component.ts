import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Calificacion } from 'src/app/model/calificacion';
import { CalificacionService } from 'src/app/service/calificacion.service';
import {ActivatedRoute,Params,Router} from '@angular/router';
import { Viaje } from 'src/app/model/Viaje';
import { ViajeService } from 'src/app/service/viaje.service';

@Component({
  selector: 'app-calificacion-creadita',
  templateUrl: './calificacion-creadita.component.html',
  styleUrls: ['./calificacion-creadita.component.css']
})
export class CalificacionCreaditaComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({});
  calificacion: Calificacion = new Calificacion();
  mensaje: string = "";

  listaViaje: Viaje[] = [];
  idViajeSele: number = 0;

  constructor(
    private pS: CalificacionService, private router: Router, private route: ActivatedRoute,
    private ServicioViaje: ViajeService,
    
    ) {}

ngOnInit():void{
  this.route.params.subscribe((data: Params) => {
    this.id = data['id'];
    this.edicion = data['id'] != null;
    this.init();
  })

  this.ServicioViaje.list().subscribe(data => {this.listaViaje = data})

  this.form=new FormGroup ({
    id:new FormControl(),
    comentario:new FormControl(),
    valoracion:new FormControl(),
    viaje: new FormControl()
  })
}

aceptar():void{
  this.calificacion.idCalificacion=this.form.value['id'];
  this.calificacion.comentario=this.form.value['comentario'];
  this.calificacion.valoracion=this.form.value['valoracion'];
  this.calificacion.viaje.idViaje=this.form.value['viaje.idViaje'];

  if(this.form.value['comentario'].length>0){
    if (this.edicion){
      this.pS.update(this.calificacion).subscribe(() => {
        this.pS.list().subscribe((data) => {
          this.pS.setList(data);
        })
    })
  }else{
    this.pS.insert(this.calificacion).subscribe(data => {
      this.pS.list().subscribe((data) => {
        this.pS.setList(data);
      })
    })
 }
  this.router.navigate(['pages/calificaciones']);
} else {
  this.mensaje = "Ingrese el nombre!!!";
}
}
init() {
if (this.edicion) {

  this.pS.listID(this.id).subscribe(data => {
    this.form = new FormGroup({
      id: new FormControl(data.idCalificacion),
      comentario: new FormControl(data.comentario),
      valoracion: new FormControl(data.valoracion),
      viaje: new FormControl(data.viaje)

    });
  
  });
}

}

}

