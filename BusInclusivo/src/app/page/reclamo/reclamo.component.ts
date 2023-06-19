import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reclamo',
  templateUrl: './reclamo.component.html',
  styleUrls: ['./reclamo.component.css']
})
export class ReclamoComponent implements OnInit{
  ngOnInit(): void {}
  constructor(public route: ActivatedRoute){};
}
