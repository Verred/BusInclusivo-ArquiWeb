import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetodopagoService } from 'src/app/service/metodopago.service'
@Component({
  selector: 'app-metodopago',
  templateUrl: './metodopago.component.html',
  styleUrls: ['./metodopago.component.css']
})
export class MetodopagoComponent implements OnInit{
  constructor(public route: ActivatedRoute){};
  ngOnInit(): void {}
}
