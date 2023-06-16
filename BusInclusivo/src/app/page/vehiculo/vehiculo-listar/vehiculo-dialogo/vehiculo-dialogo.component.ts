import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-vehiculo-dialogo',
  templateUrl: './vehiculo-dialogo.component.html',
  styleUrls: ['./vehiculo-dialogo.component.css']
})
export class VehiculoDialogoComponent {
  constructor(private servi : VehiculoService,
    private dialogRef: MatDialogRef<VehiculoDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.servi.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
