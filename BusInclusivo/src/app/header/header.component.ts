import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  userName: string = ''
  userRol: string = ''
  constructor(private router: Router, private serv: LoginService) {}
  ngOnInit(): void {
    this.userRol = this.serv.showRole();
    this.userName = this.serv.showName();
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
    
  }
  cerrar() {
    sessionStorage.clear();
  }
}
