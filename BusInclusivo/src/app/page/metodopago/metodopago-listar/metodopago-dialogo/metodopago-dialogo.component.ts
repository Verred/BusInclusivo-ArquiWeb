import { Component, OnInit } from '@angular/core';
import { MetodopagoService } from 'src/app/service/metodopago.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-metodopago-dialogo',
  templateUrl: './metodopago-dialogo.component.html',
  styleUrls: ['./metodopago-dialogo.component.css']
})
export class MetodopagoDialogoComponent implements OnInit {
  constructor(private pS: MetodopagoService,
    private dialogRef: MatDialogRef<MetodopagoDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.pS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }

}
