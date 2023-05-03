import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MetodoPago } from 'src/app/model/MetodoPago';
import { MetodopagoService } from 'src/app/service/metodopago.service';
@Component({
  selector: 'app-metodopago-creaedita',
  templateUrl: './metodopago-creaedita.component.html',
  styleUrls: ['./metodopago-creaedita.component.css']
})
export class MetodopagoCreaeditaComponent implements OnInit{
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({})
  metodoPago: MetodoPago = new MetodoPago();
  mensaje: string = ""

  constructor(
    private mS: MetodopagoService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    
    this.form = new FormGroup({
      id: new FormControl(),
      descripcion: new FormControl(),
    })
  }

  aceptar(): void {
    this.metodoPago.id = this.form.value['id'];
    this.metodoPago.descripcion = this.form.value['descripcion'];

    if (this.form.value['descripcion'].length > 0) {
      if (this.edicion){
        this.mS.update(this.metodoPago).subscribe(() => {
          this.mS.list().subscribe(data => {
            this.mS.setList(data);
          });
        });
      } else{
        this.mS.insert(this.metodoPago).subscribe(data => {
          this.mS.list().subscribe(data => {
            this.mS.setList(data);
          });
        });
      }

      this.router.navigate(['metodopagos']);

    } else {
      this.mensaje = "Ingrese la descripcion"
    }
  }
  init() {
    if (this.edicion) {
      this.mS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          descripcion: new FormControl(data.descripcion)
        });

      });
    }
  }
}
