import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/service/color.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-color-dialogo',
  templateUrl: './color-dialogo.component.html',
  styleUrls: ['./color-dialogo.component.css']
})
export class ColorDialogoComponent implements OnInit {
  constructor(private cS: ColorService,
    private dialogRef: MatDialogRef<ColorDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.cS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
  }
