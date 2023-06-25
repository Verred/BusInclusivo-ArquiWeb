import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';
import { Pago } from 'src/app/model/Pago';
import { PagoService } from 'src/app/service/pago.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MetodoPago } from 'src/app/model/MetodoPago';
import { MetodopagoService } from 'src/app/service/metodopago.service';


@Component({
  selector: 'app-pago-creaedita',
  templateUrl: './pago-creaedita.component.html',
  styleUrls: ['./pago-creaedita.component.css']
})
export class PagoCreaeditaComponent {

  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({})
  entidad: Pago = new Pago();
  mensaje: string = "";
  lista: MetodoPago[] = [];
  idEntidadSele: number = 0;

  constructor(
    private servi: PagoService, 
    private router: Router,
    private route: ActivatedRoute,
    private independienteSer: MetodopagoService
  ) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    
    this.independienteSer.list().subscribe(data => {this.lista = data})

    this.form = new FormGroup({
      id: new FormControl(),
      precio: new FormControl(),
      metodo :new FormControl()
    })
  }

  aceptar(): void {
    this.entidad.idPago = this.form.value['id'];
    this.entidad.precioKM = this.form.value['precio'];
    this.entidad.metodoPago.descripcion=this.form.value['metodo.descripcion'];

    let entidadIndepe = new MetodoPago();
    entidadIndepe.idMetodoPago = this.idEntidadSele;
    this.entidad.metodoPago = entidadIndepe ;
   

    if (this.form.value['precio'] > 0 && this.idEntidadSele > 0) {


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

      this.router.navigate(['pages/pagos']);

    } else {
      this.mensaje = "Ingrese todos los datos"
    }
  }
  init() {
    if (this.edicion) {
      this.servi.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.idPago),
          precio: new FormControl(data.precioKM),
          metodo : new FormControl(data.metodoPago)

        });
      });
    }
  }

}
