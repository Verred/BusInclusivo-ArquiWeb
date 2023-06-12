import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tarjetapropiedad',
  templateUrl: './tarjetapropiedad.component.html',
  styleUrls: ['./tarjetapropiedad.component.css']
})
export class TarjetapropiedadComponent implements OnInit{
  ngOnInit(): void {}
  constructor(public route: ActivatedRoute){};
}
