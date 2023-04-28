import { Component,OnInit } from '@angular/core';
import { CalificacionService } from 'src/app/service/calificacion.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-calificacion-dialogo',
  templateUrl: './calificacion-dialogo.component.html',
  styleUrls: ['./calificacion-dialogo.component.css']
})
export class CalificacionDialogoComponent implements OnInit {
constructor(private pS: CalificacionService,
  private dialogRef: MatDialogRef<CalificacionDialogoComponent>){  }
  ngOnInit(): void { }
  confirmar(estado: boolean) {
    this.pS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
