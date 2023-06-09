import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Marca } from 'src/app/model/Marca';
import * as moment from 'moment';
import { MarcaService } from 'src/app/service/marca.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-marca-creaedita',
  templateUrl: './marca-creaedita.component.html',
  styleUrls: ['./marca-creaedita.component.css']
})
export class MarcaCreaeditaComponent implements OnInit{
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({})
  marca: Marca = new Marca();
  mensaje: string = ""

  constructor(
    private mS: MarcaService, 
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
    this.marca.idMarca = this.form.value['id'];
    this.marca.descripcion = this.form.value['descripcion'];

    if (this.form.value['descripcion'].length > 0) {
      if (this.edicion){
        this.mS.update(this.marca).subscribe(() => {
          this.mS.list().subscribe(data => {
            this.mS.setList(data);
          });
        });
      } else{
        this.mS.insert(this.marca).subscribe(data => {
          this.mS.list().subscribe(data => {
            this.mS.setList(data);
          });
        });
      }

      this.router.navigate(['marcas']);

    } else {
      this.mensaje = "Ingrese la descripcion"
    }
  }
  init() {
    if (this.edicion) {
      this.mS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.idMarca),
          descripcion: new FormControl(data.descripcion)
        });

      });
    }
  }
}
