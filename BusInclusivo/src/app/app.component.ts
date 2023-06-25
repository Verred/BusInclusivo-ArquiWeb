import { Component } from '@angular/core';
import { LoginService } from './service/login.service';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string="";
  role:string="";
  constructor(private loginService: LoginService) {
  }

  cerrar() {
    sessionStorage.clear();
  }

  verificar() {
    this.role=this.loginService.showRole();
    return this.loginService.verificar();
  }
  validarRol(){
    if(this.role=='ADMIN'|| this.role=='USER' || this.role=='PASAJERO' || this.role=='CONDUCTOR'|| this.role=='MODERADOR'){
      return true;
    }else{
      return false;
    }
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  loginVisible: boolean = true;

  abrirRegisterComponent() {
    this.loginVisible = false;
  }

  abrirLoginComponent() {
    this.loginVisible = true;
  }
  
}
