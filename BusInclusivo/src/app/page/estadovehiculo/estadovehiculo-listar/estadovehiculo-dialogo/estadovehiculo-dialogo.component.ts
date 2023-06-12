import { Component,OnInit } from '@angular/core';
import { EstadoVehiculoService } from 'src/app/service/estadovehiculo.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-estadovehiculo-dialogo',
  templateUrl: './estadovehiculo-dialogo.component.html',
  styleUrls: ['./estadovehiculo-dialogo.component.css']
})
export class EstadoVehiculoDialogoComponent implements OnInit {
constructor(private pS: EstadoVehiculoService,
  private dialogRef: MatDialogRef<EstadoVehiculoDialogoComponent>){  }
  ngOnInit(): void { }
  confirmar(estado: boolean) {
    this.pS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
