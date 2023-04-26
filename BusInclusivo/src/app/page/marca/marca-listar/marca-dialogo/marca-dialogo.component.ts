import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/service/marca.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-marca-dialogo',
  templateUrl: './marca-dialogo.component.html',
  styleUrls: ['./marca-dialogo.component.css']
})
export class MarcaDialogoComponent implements OnInit {
  constructor(private mS: MarcaService,
    private dialogRef: MatDialogRef<MarcaDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.mS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
