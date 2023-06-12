import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PagoService } from 'src/app/service/pago.service';

@Component({
  selector: 'app-pago-dialogo',
  templateUrl: './pago-dialogo.component.html',
  styleUrls: ['./pago-dialogo.component.css']
})
export class PagoDialogoComponent {
  constructor(private servi : PagoService,
    private dialogRef: MatDialogRef<PagoDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.servi.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
