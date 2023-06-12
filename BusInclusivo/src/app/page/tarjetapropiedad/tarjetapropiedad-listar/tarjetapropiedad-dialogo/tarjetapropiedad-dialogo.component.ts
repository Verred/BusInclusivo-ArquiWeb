import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TarjetapropiedadService } from 'src/app/service/tarjetapropiedad.service';
@Component({
  selector: 'app-tarjetapropiedad-dialogo',
  templateUrl: './tarjetapropiedad-dialogo.component.html',
  styleUrls: ['./tarjetapropiedad-dialogo.component.css']
})
export class TarjetaPropiedadDialogoComponent {
  constructor(private servi : TarjetapropiedadService,
    private dialogRef: MatDialogRef<TarjetaPropiedadDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.servi.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
