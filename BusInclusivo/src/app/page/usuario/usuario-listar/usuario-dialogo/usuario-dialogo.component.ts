import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TarjetapropiedadService } from 'src/app/service/tarjetapropiedad.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-dialogo',
  templateUrl: './usuario-dialogo.component.html',
  styleUrls: ['./usuario-dialogo.component.css']
})
export class UsuarioDialogoComponent {
  constructor(private servi : UsuarioService,
    private dialogRef: MatDialogRef<UsuarioDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.servi.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
