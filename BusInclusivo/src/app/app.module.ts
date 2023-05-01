import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CalificacionComponent } from './page/calificacion/calificacion.component';
import { CalificacionListarComponent } from './page/calificacion/calificacion-listar/calificacion-listar.component';
import { CalificacionCreaditaComponent } from './page/calificacion/calificacion-creadita/calificacion-creadita.component';

import { MarcaComponent } from './page/marca/marca.component';
import { MarcaListarComponent } from './page/marca/marca-listar/marca-listar.component';
import { MatTableModule } from '@angular/material/table';
import { MarcaCreaeditaComponent } from './page/marca/marca-creaedita/marca-creaedita.component'

import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CalificacionDialogoComponent } from './page/calificacion/calificacion-listar/calificacion-dialogo/calificacion-dialogo.component';

import { MarcaDialogoComponent } from './page/marca/marca-listar/marca-dialogo/marca-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CalificacionListarComponent,
    CalificacionComponent,
    CalificacionCreaditaComponent,
    CalificacionDialogoComponent,
    MarcaComponent,
    MarcaListarComponent,
    MarcaCreaeditaComponent,
    MarcaDialogoComponent,
    MenuComponent,
    LoginComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    NgxPaginationModule,
    MatPaginatorModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
