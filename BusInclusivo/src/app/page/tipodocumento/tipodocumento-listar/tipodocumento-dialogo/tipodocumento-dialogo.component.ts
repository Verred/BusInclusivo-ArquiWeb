import { Component,OnInit } from '@angular/core';
import { TipoDocumentoService } from 'src/app/service/tipodocumento.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-estadovehiculo-dialogo',
  templateUrl: './tipodocumento-dialogo.component.html',
  styleUrls: ['./tipodocumento-dialogo.component.css']
})
export class TipoDocumentoDialogoComponent implements OnInit {
constructor(private pS: TipoDocumentoService,
  private dialogRef: MatDialogRef<TipoDocumentoDialogoComponent>){  }
  ngOnInit(): void { }
  confirmar(estado: boolean) {
    this.pS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
