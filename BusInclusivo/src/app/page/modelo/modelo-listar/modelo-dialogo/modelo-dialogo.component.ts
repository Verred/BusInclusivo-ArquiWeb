import { Component, OnInit } from '@angular/core';
import { ModeloService } from 'src/app/service/modelo.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modelo-dialogo',
  templateUrl: './modelo-dialogo.component.html',
  styleUrls: ['./modelo-dialogo.component.css']
})
export class ModeloDialogoComponent implements OnInit{
  constructor(private mS: ModeloService,
    private dialogRef: MatDialogRef<ModeloDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.mS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
