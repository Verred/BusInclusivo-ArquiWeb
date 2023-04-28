import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { ColorService } from 'src/app/service/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  constructor(public route: ActivatedRoute) { }
  ngOnInit(): void {
  }    }

