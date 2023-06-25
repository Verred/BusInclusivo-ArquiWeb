import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { EstadoVehiculo } from 'src/app/model/EstadoVehiculo';
import { EstadoVehiculoService } from 'src/app/service/estadovehiculo.service';
import {ActivatedRoute,Params,Router} from '@angular/router';

@Component({
  selector: 'app-estadovehiculo-creadita',
  templateUrl: './estadovehiculo-creadita.component.html',
  styleUrls: ['./estadovehiculo-creadita.component.css']
})
export class EstadoVehiculoCreaditaComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({});
  calificacion: EstadoVehiculo = new EstadoVehiculo();
  mensaje: string = "";

  constructor(private pS: EstadoVehiculoService, private router: Router, private route: ActivatedRoute) { }

ngOnInit():void{
  this.route.params.subscribe((data: Params) => {
    this.id = data['id'];
    this.edicion = data['id'] != null;
    this.init();
  })
  this.form=new FormGroup ({
    id:new FormControl(),
    situacion:new FormControl(),
    descripcion:new FormControl(),
  })
}

aceptar():void{
  this.calificacion.idEstadoVehiculo=this.form.value['id'];
  this.calificacion.situacion=this.form.value['situacion'];
  this.calificacion.descripcion=this.form.value['descripcion'];
  if(this.form.value['situacion'].length>0){
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
  this.router.navigate(['pages/estadovehiculos']);
} else {
  this.mensaje = "Ingrese el nombre!!!";
}
}
init() {
if (this.edicion) {

  this.pS.listID(this.id).subscribe(data => {
    this.form = new FormGroup({
      id: new FormControl(data.idEstadoVehiculo),
      situacion: new FormControl(data.situacion),
      descripcion: new FormControl(data.descripcion),
    });

  });
}

}

}
