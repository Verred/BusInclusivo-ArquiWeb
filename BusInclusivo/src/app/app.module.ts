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

import { ModeloComponent } from './page/modelo/modelo.component';
import { ModeloCreaeditaComponent } from './page/modelo/modelo-creaedita/modelo-creaedita.component';
import { ModeloDialogoComponent } from './page/modelo/modelo-listar/modelo-dialogo/modelo-dialogo.component';
import { ModeloListarComponent } from './page/modelo/modelo-listar/modelo-listar.component';

import { ColorListarComponent } from './page/color/color-listar/color-listar.component';
import { ColorCreaeditaComponent } from './page/color/color-creaedita/color-creaedita.component';
import { ColorDialogoComponent } from './page/color/color-listar/color-dialogo/color-dialogo.component'
import { ColorComponent } from './page/color/color.component';
import { MetodopagoListarComponent } from './page/metodopago/metodopago-listar/metodopago-listar.component';
import { MetodopagoComponent } from './page/metodopago/metodopago.component';
import { MetodopagoDialogoComponent } from './page/metodopago/metodopago-listar/metodopago-dialogo/metodopago-dialogo.component';
import { MetodopagoCreaeditaComponent } from './page/metodopago/metodopago-creaedita/metodopago-creaedita.component';
import { PagoComponent } from './page/pago/pago.component';
import { PagoListarComponent } from './page/pago/pago-listar/pago-listar.component';
import { PagoCreaeditaComponent } from './page/pago/pago-creaedita/pago-creaedita.component';
import { PagoDialogoComponent } from './page/pago/pago-listar/pago-dialogo/pago-dialogo.component';
import { TarjetapropiedadComponent } from './page/tarjetapropiedad/tarjetapropiedad.component';
import { TarjetapropiedadListarComponent } from './page/tarjetapropiedad/tarjetapropiedad-listar/tarjetapropiedad-listar.component';
import { TarjetapropiedadCreaeditaComponent } from './page/tarjetapropiedad/tarjetapropiedad-creaedita/tarjetapropiedad-creaedita.component';
import { TarjetaPropiedadDialogoComponent } from './page/tarjetapropiedad/tarjetapropiedad-listar/tarjetapropiedad-dialogo/tarjetapropiedad-dialogo.component';

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
    ModeloComponent,
    ModeloCreaeditaComponent,
    ModeloListarComponent,
    ModeloDialogoComponent,
    ColorComponent,
    ColorListarComponent,
    ColorCreaeditaComponent,
    ColorDialogoComponent,
    MetodopagoComponent,
    MetodopagoCreaeditaComponent,
    MetodopagoDialogoComponent,
    MetodopagoListarComponent,
    PagoComponent,
    PagoListarComponent,
    PagoCreaeditaComponent,
    PagoDialogoComponent,
    TarjetapropiedadComponent,
    TarjetapropiedadListarComponent,
    TarjetapropiedadCreaeditaComponent,
    TarjetaPropiedadDialogoComponent

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
