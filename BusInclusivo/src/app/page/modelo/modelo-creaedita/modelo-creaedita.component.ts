import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Modelo } from 'src/app/model/Modelo';
import * as moment from 'moment';
import { ModeloService } from 'src/app/service/modelo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-modelo-creaedita',
  templateUrl: './modelo-creaedita.component.html',
  styleUrls: ['./modelo-creaedita.component.css']
})
export class ModeloCreaeditaComponent implements OnInit{
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({})
  modelo: Modelo = new Modelo();
  mensaje: string = ""

  constructor(
    private mS: ModeloService, 
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
    this.modelo.id = this.form.value['id'];
    this.modelo.descripcion = this.form.value['descripcion'];

    if (this.form.value['descripcion'].length > 0) {
      if (this.edicion){
        this.mS.update(this.modelo).subscribe(() => {
          this.mS.list().subscribe(data => {
            this.mS.setList(data);
          });
        });
      } else{
        this.mS.insert(this.modelo).subscribe(data => {
          this.mS.list().subscribe(data => {
            this.mS.setList(data);
          });
        });
      }

      this.router.navigate(['modelos']);

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
