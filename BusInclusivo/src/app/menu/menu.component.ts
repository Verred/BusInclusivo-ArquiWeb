import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems?:any[];
  usuario:any;
  user:any;
  userImgGoogle:any;
  role:string="";


  constructor( private router:Router, private authSvc:LoginService) {

   } 
  
  ngOnInit() {
 
    // this.obtenerUsuario();
    // $('[data-widget="treeview"]').Treeview('init');
    this.verificar()
   }


  cerrar() {
    sessionStorage.clear();
  }

  verificar() {
    this.role=this.authSvc.showRole();
    return this.authSvc.verificar();
  }
  validarRol(){
    if(this.role=='ADMIN'|| this.role=='USER' || this.role=='PASAJERO' || this.role=='CONDUCTOR'|| this.role=='MODERADOR'){
      return true;
    }else{
      return false;
    }
  }

}
