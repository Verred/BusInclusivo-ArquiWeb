import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-user-dialogo',
  templateUrl: './user-dialogo.component.html',
  styleUrls: ['./user-dialogo.component.css']
})
export class UserDialogoComponent {
  constructor(private servi : UserService,
    private dialogRef: MatDialogRef<UserDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      //this.servi.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
