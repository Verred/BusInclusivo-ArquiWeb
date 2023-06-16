import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ConductorService } from 'src/app/service/conductor.service';
@Component({
  selector: 'app-conductor-dialogo',
  templateUrl: './conductor-dialogo.component.html',
  styleUrls: ['./conductor-dialogo.component.css']
})
export class ConductorDialogoComponent {
  constructor(private servi : ConductorService,
    private dialogRef: MatDialogRef<ConductorDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.servi.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
