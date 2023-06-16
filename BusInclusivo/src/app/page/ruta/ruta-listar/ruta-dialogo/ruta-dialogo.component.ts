import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RutaService } from 'src/app/service/ruta.service';
@Component({
  selector: 'app-ruta-dialogo',
  templateUrl: './ruta-dialogo.component.html',
  styleUrls: ['./ruta-dialogo.component.css']
})
export class RutaDialogoComponent {
  constructor(private servi : RutaService,
    private dialogRef: MatDialogRef<RutaDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.servi.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
