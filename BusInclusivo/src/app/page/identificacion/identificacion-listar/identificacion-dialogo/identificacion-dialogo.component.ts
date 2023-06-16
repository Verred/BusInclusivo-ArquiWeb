import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IdentificacionService } from 'src/app/service/identificacion.service';

@Component({
  selector: 'app-identificacion-dialogo',
  templateUrl: './identificacion-dialogo.component.html',
  styleUrls: ['./identificacion-dialogo.component.css']
})
export class IdentificacionDialogoComponent {
  constructor(private servi : IdentificacionService,
    private dialogRef: MatDialogRef<IdentificacionDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.servi.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
