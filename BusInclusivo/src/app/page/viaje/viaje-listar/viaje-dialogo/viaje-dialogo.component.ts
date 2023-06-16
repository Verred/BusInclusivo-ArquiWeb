import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ViajeService } from 'src/app/service/viaje.service';
@Component({
  selector: 'app-viaje-dialogo',
  templateUrl: './viaje-dialogo.component.html',
  styleUrls: ['./viaje-dialogo.component.css']
})
export class ViajeDialogoComponent {
  constructor(private servi : ViajeService,
    private dialogRef: MatDialogRef<ViajeDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.servi.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
