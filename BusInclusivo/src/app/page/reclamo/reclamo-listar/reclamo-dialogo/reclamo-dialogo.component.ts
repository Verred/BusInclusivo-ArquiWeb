import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ReclamoService } from 'src/app/service/reclamo.service';

@Component({
  selector: 'app-reclamo-dialogo',
  templateUrl: './reclamo-dialogo.component.html',
  styleUrls: ['./reclamo-dialogo.component.css']
})
export class ReclamoDialogoComponent {
  constructor(private servi : ReclamoService,
    private dialogRef: MatDialogRef<ReclamoDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.servi.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
