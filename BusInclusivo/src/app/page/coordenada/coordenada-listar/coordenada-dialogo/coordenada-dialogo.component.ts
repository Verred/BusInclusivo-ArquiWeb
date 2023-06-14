import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CoordenadaService } from 'src/app/service/coordenada.service';

@Component({
  selector: 'app-coordenada-dialogo',
  templateUrl: './coordenada-dialogo.component.html',
  styleUrls: ['./coordenada-dialogo.component.css']
})
export class CoordenadaDialogoComponent implements OnInit {
  constructor(private cS: CoordenadaService,
    private dialogRef: MatDialogRef<CoordenadaDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.cS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
