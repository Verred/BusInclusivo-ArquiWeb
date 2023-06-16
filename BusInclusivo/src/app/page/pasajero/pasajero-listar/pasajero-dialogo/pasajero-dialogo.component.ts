import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PasajeroService } from 'src/app/service/pasajero.service';

@Component({
  selector: 'app-pasajero-dialogo',
  templateUrl: './pasajero-dialogo.component.html',
  styleUrls: ['./pasajero-dialogo.component.css']
})
export class PasajeroDialogoComponent {
  constructor(private servi : PasajeroService,
    private dialogRef: MatDialogRef<PasajeroDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.servi.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
