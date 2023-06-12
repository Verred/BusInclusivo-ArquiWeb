import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { TipoDocumento } from 'src/app/model/TipoDocumento';
import { TipoDocumentoService } from 'src/app/service/tipodocumento.service';
import {ActivatedRoute,Params,Router} from '@angular/router';

@Component({
  selector: 'app-tipodocumento-creadita',
  templateUrl: './tipodocumento-creadita.component.html',
  styleUrls: ['./tipodocumento-creadita.component.css']
})
export class TipoDocumentoCreaditaComponent implements OnInit {

  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({});
  calificacion: TipoDocumento = new TipoDocumento();
  mensaje: string = "";

  constructor(private pS: TipoDocumentoService, private router: Router, private route: ActivatedRoute) { }

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
  this.calificacion.idTipoDocumento=this.form.value['id'];
  this.calificacion.descripcion=this.form.value['descripcion'];
  if(this.form.value['descripcion'].length>0){
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
  this.router.navigate(['tipodocumento']);
} else {
  this.mensaje = "Ingrese el nombre!!!";
}
}
init() {
if (this.edicion) {

  this.pS.listID(this.id).subscribe(data => {
    this.form = new FormGroup({
      id: new FormControl(data.idTipoDocumento),
      descripcion: new FormControl(data.descripcion),
    });

  });
}

}

}
