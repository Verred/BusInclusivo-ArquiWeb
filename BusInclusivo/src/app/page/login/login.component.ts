import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/service/login.service';
import { JwtRequest } from 'src/app/model/jwtRequest';
import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router, /*private snackBar: MatSnackBar*/) { }
  username: string = ""
  password: string = ""
  mensaje: string = ""
  oculto: boolean = false;
  ngOnInit(): void {
    //visible= false;
  }
  login() {
    let request = new JwtRequest();
    request.username = this.username;
    request.password = this.password;
    this.loginService.login(request).subscribe((data: any) => {
      sessionStorage.setItem("token", data.jwttoken);
      this.router.navigate(['/pages/viajes']);
      this.oculto = true;
    }, error => {
      this.mensaje = "Credenciales incorrectas!!!"
      //this.snackBar.open(this.mensaje, "Aviso",{duration:2000});
    });
  }

  abrir() {
    this.router.navigate(['/registro']);
  }
  
  @Output() abrirRegister = new EventEmitter<void>();

  abrirRegisterComponent() {
    this.abrirRegister.emit();
  }
}
