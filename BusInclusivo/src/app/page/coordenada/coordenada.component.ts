import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coordenada',
  templateUrl: './coordenada.component.html',
  styleUrls: ['./coordenada.component.css']
})
export class CoordenadaComponent implements OnInit{
  constructor(public route: ActivatedRoute) { }
  ngOnInit(): void {
  }   
}
