import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RoleService } from 'src/app/service/role.service';
@Component({
  selector: 'app-role-dialogo',
  templateUrl: './role-dialogo.component.html',
  styleUrls: ['./role-dialogo.component.css']
})
export class RoleDialogoComponent {
  constructor(private servi : RoleService,
    private dialogRef: MatDialogRef<RoleDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      //this.servi.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
