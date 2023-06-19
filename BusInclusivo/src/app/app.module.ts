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

import { EstadoVehiculo } from './model/EstadoVehiculo';
import { EstadoVehiculoService } from './service/estadovehiculo.service';
import { EstadoVehiculoCreaditaComponent } from './page/estadovehiculo/estadovehiculo-creadita/estadovehiculo-creadita.component';
import { EstadoVehiculoListarComponent } from './page/estadovehiculo/estadovehiculo-listar/estadovehiculo-listar.component';
import { EstadoVehiculoDialogoComponent } from './page/estadovehiculo/estadovehiculo-listar/estadovehiculo-dialogo/estadovehiculo-dialogo.component';
import { EstadoVehiculoComponent } from './page/estadovehiculo/estadovehiculo.component';
import { TipoDocumentoComponent } from './page/tipodocumento/tipodocumento.component';
import { TipoDocumentoCreaditaComponent } from './page/tipodocumento/tipodocumento-creadita/tipodocumento-creadita.component';
import { TipoDocumentoService } from './service/tipodocumento.service';
import { TipoDocumentoDialogoComponent } from './page/tipodocumento/tipodocumento-listar/tipodocumento-dialogo/tipodocumento-dialogo.component';
import { TipoDocumentoListarComponent } from './page/tipodocumento/tipodocumento-listar/tipodocumento-listar.component';
import { CoordenadaComponent } from './page/coordenada/coordenada.component';
import { CoordenadaListarComponent } from './page/coordenada/coordenada-listar/coordenada-listar.component';
import { CoordenadaCreaeditaComponent } from './page/coordenada/coordenada-creaedita/coordenada-creaedita.component';
import { CoordenadaDialogoComponent } from './page/coordenada/coordenada-listar/coordenada-dialogo/coordenada-dialogo.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { UsuarioListarComponent } from './page/usuario/usuario-listar/usuario-listar.component';
import { UsuarioCreaeditaComponent } from './page/usuario/usuario-creaedita/usuario-creaedita.component';
import { UsuarioDialogoComponent } from './page/usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';
import { RutaComponent } from './page/ruta/ruta.component';
import { RutaListarComponent } from './page/ruta/ruta-listar/ruta-listar.component';
import { RutaCreaeditaComponent } from './page/ruta/ruta-creaedita/ruta-creaedita.component';
import { RutaDialogoComponent } from './page/ruta/ruta-listar/ruta-dialogo/ruta-dialogo.component';
import { VehiculoComponent } from './page/vehiculo/vehiculo.component';
import { VehiculoListarComponent } from './page/vehiculo/vehiculo-listar/vehiculo-listar.component';
import { VehiculoCreaeditaComponent } from './page/vehiculo/vehiculo-creaedita/vehiculo-creaedita.component';
import { VehiculoDialogoComponent } from './page/vehiculo/vehiculo-listar/vehiculo-dialogo/vehiculo-dialogo.component';
import { IdentificacionComponent } from './page/identificacion/identificacion.component';
import { IdentificacionListarComponent } from './page/identificacion/identificacion-listar/identificacion-listar.component';
import { IdentificacionCreaeditaComponent } from './page/identificacion/identificacion-creaedita/identificacion-creaedita.component';
import { IdentificacionDialogoComponent } from './page/identificacion/identificacion-listar/identificacion-dialogo/identificacion-dialogo.component';
import { ConductorComponent } from './page/conductor/conductor.component';
import { ConductorListarComponent } from './page/conductor/conductor-listar/conductor-listar.component';
import { ConductorCreaeditaComponent } from './page/conductor/conductor-creaedita/conductor-creaedita.component';
import { ConductorDialogoComponent } from './page/conductor/conductor-listar/conductor-dialogo/conductor-dialogo.component';
import { PasajeroComponent } from './page/pasajero/pasajero.component';
import { PasajeroCreaeditaComponent } from './page/pasajero/pasajero-creaedita/pasajero-creaedita.component';
import { PasajeroDialogoComponent } from './page/pasajero/pasajero-listar/pasajero-dialogo/pasajero-dialogo.component';
import { PasajeroListarComponent } from './page/pasajero/pasajero-listar/pasajero-listar.component';
import { ViajeComponent } from './page/viaje/viaje.component';
import { ViajeListarComponent } from './page/viaje/viaje-listar/viaje-listar.component';
import { ViajeCreaeditaComponent } from './page/viaje/viaje-creaedita/viaje-creaedita.component';
import { ViajeDialogoComponent } from './page/viaje/viaje-listar/viaje-dialogo/viaje-dialogo.component';
import { ReclamoComponent } from './page/reclamo/reclamo.component';
import { ReclamoListarComponent } from './page/reclamo/reclamo-listar/reclamo-listar.component';
import { ReclamoCreaeditaComponent } from './page/reclamo/reclamo-creaedita/reclamo-creaedita.component';
import { ReclamoDialogoComponent } from './page/reclamo/reclamo-listar/reclamo-dialogo/reclamo-dialogo.component';



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
    TarjetaPropiedadDialogoComponent,

    EstadoVehiculoComponent,
    EstadoVehiculoCreaditaComponent,
    EstadoVehiculoListarComponent,
    EstadoVehiculoDialogoComponent,
    TipoDocumentoComponent,
    TipoDocumentoCreaditaComponent,
    TipoDocumentoDialogoComponent,
   TipoDocumentoListarComponent,
   CoordenadaComponent,
   CoordenadaListarComponent,
   CoordenadaCreaeditaComponent,
   CoordenadaDialogoComponent,
   UsuarioComponent,
   UsuarioListarComponent,
   UsuarioCreaeditaComponent,
   UsuarioDialogoComponent,
   RutaComponent,
   RutaListarComponent,
   RutaCreaeditaComponent,
   RutaDialogoComponent,
   VehiculoComponent,
   VehiculoListarComponent,
   VehiculoCreaeditaComponent,
   VehiculoDialogoComponent,
   IdentificacionComponent,
   IdentificacionListarComponent,
   IdentificacionCreaeditaComponent,
   IdentificacionDialogoComponent,
   ConductorComponent,
   ConductorListarComponent,
   ConductorCreaeditaComponent,
   ConductorDialogoComponent,
   PasajeroComponent,
   PasajeroCreaeditaComponent,
   PasajeroDialogoComponent,
   PasajeroListarComponent,
   ViajeComponent,
   ViajeListarComponent,
   ViajeCreaeditaComponent,
   ViajeDialogoComponent,
   ReclamoComponent,
   ReclamoListarComponent,
   ReclamoCreaeditaComponent,
   ReclamoDialogoComponent


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
