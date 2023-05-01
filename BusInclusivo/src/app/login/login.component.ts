import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 
  constructor(private router: Router) {
   

  }

  ngOnInit(): void {
    
  }
  onSubmit() {
    // Aquí se debe agregar el código para procesar el formulario de inicio de sesión.
    // Si el inicio de sesión es exitoso, se puede redirigir al usuario al menú principal:
    
    this.router.navigate(['/menu']);
   
   
  }
 
}