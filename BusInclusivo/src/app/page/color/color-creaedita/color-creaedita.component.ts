import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { Color } from 'src/app/model/Color';
import { ColorService } from 'src/app/service/color.service';
import * as moment from 'moment';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-color-creaedita',
  templateUrl: './color-creaedita.component.html',
  styleUrls: ['./color-creaedita.component.css']
})
export class ColorCreaeditaComponent implements OnInit {
  id:number=0;
  edicion:boolean=false;
  form: FormGroup = new FormGroup({});
  color: Color = new Color()
  mensaje: string = ""
  constructor(private cS: ColorService, private router: Router, private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.subscribe ((data:Params)=> {
this.id=data['id'];
this.edicion=data['id']!=null
  this.init();
    })
      //.pipe(map(params => params.get('id')), tap(id => (this.id = +id)))
      //.subscribe(id => {});

    this.form = new FormGroup({
      idColor: new FormControl(),
      nameColor: new FormControl(),
    });
  }
  aceptar(): void {
    this.color.id = this.form.value['id'];
    this.color.nameColor = this.form.value['nameColor'];

    //this.form.value['nameColor'].length > 0

    if (this.form.value['nameColor'].length > 0 ) {
      if(this.edicion) {
      this.cS.update(this.color).subscribe(data => {
        this.cS.list().subscribe(data => {
          this.cS.setList(data);
        })
      })
    } else {
      this.cS.insert(this.color).subscribe((data)=> {
        this.cS.list().subscribe((data) => {
          this.cS.setList(data);
      })
    })
  }
  this.router.navigate(['color']);
  } else {
    this.mensaje="Ingrese el color";

  }
}

  init(){
    if(this.edicion){
      this.cS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.id),
          nameColor:new FormControl(data.nameColor),

        })
      })

    }
  }
}
