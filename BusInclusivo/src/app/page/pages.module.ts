import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PagesRoutingModule } from './pages-routing.module';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserModule } from '@angular/platform-browser';


import { FormGroup, FormBuilder } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';


import { MarcaComponent } from './marca/marca.component';
import { MarcaCreaeditaComponent } from './marca/marca-creaedita/marca-creaedita.component';
import { MarcaDialogoComponent } from './marca/marca-listar/marca-dialogo/marca-dialogo.component';
import { MarcaListarComponent } from './marca/marca-listar/marca-listar.component';

import { UserComponent } from './user/user.component';
import { UserListarComponent } from './user/user-listar/user-listar.component';
import { UserCreaeditaComponent } from './user/user-creaedita/user-creaedita.component';
import { UserDialogoComponent } from './user/user-listar/user-dialogo/user-dialogo.component';

import { RoleComponent } from './role/role.component';
import { RoleListarComponent } from './role/role-listar/role-listar.component';
import { RoleCreaeditaComponent } from './role/role-creaedita/role-creaedita.component';
import { RoleDialogoComponent } from './role/role-listar/role-dialogo/role-dialogo.component';

import { ModeloComponent } from './modelo/modelo.component';
import { ModeloCreaeditaComponent } from './modelo/modelo-creaedita/modelo-creaedita.component';
import { ModeloDialogoComponent } from './modelo/modelo-listar/modelo-dialogo/modelo-dialogo.component';
import { ModeloListarComponent } from './modelo/modelo-listar/modelo-listar.component';

import { ColorListarComponent } from './color/color-listar/color-listar.component';
import { ColorCreaeditaComponent } from './color/color-creaedita/color-creaedita.component';
import { ColorDialogoComponent } from './color/color-listar/color-dialogo/color-dialogo.component'
import { ColorComponent } from './color/color.component';

import { MetodopagoListarComponent } from './metodopago/metodopago-listar/metodopago-listar.component';
import { MetodopagoComponent } from './metodopago/metodopago.component';
import { MetodopagoDialogoComponent } from './metodopago/metodopago-listar/metodopago-dialogo/metodopago-dialogo.component';
import { MetodopagoCreaeditaComponent } from './metodopago/metodopago-creaedita/metodopago-creaedita.component';

import { PagoComponent } from './pago/pago.component';
import { PagoListarComponent } from './pago/pago-listar/pago-listar.component';
import { PagoCreaeditaComponent } from './pago/pago-creaedita/pago-creaedita.component';
import { PagoDialogoComponent } from './pago/pago-listar/pago-dialogo/pago-dialogo.component';

import { TarjetapropiedadComponent } from './tarjetapropiedad/tarjetapropiedad.component';
import { TarjetapropiedadListarComponent } from './tarjetapropiedad/tarjetapropiedad-listar/tarjetapropiedad-listar.component';
import { TarjetapropiedadCreaeditaComponent } from './tarjetapropiedad/tarjetapropiedad-creaedita/tarjetapropiedad-creaedita.component';
import { TarjetaPropiedadDialogoComponent } from './tarjetapropiedad/tarjetapropiedad-listar/tarjetapropiedad-dialogo/tarjetapropiedad-dialogo.component';

import { EstadoVehiculoCreaditaComponent } from './estadovehiculo/estadovehiculo-creadita/estadovehiculo-creadita.component';
import { EstadoVehiculoListarComponent } from './estadovehiculo/estadovehiculo-listar/estadovehiculo-listar.component';
import { EstadoVehiculoDialogoComponent } from './estadovehiculo/estadovehiculo-listar/estadovehiculo-dialogo/estadovehiculo-dialogo.component';
import { EstadoVehiculoComponent } from './estadovehiculo/estadovehiculo.component';

import { TipoDocumentoComponent } from './tipodocumento/tipodocumento.component';
import { TipoDocumentoCreaditaComponent } from './tipodocumento/tipodocumento-creadita/tipodocumento-creadita.component';
import { TipoDocumentoDialogoComponent } from './tipodocumento/tipodocumento-listar/tipodocumento-dialogo/tipodocumento-dialogo.component';
import { TipoDocumentoListarComponent } from './tipodocumento/tipodocumento-listar/tipodocumento-listar.component';

import { CoordenadaComponent } from './coordenada/coordenada.component';
import { CoordenadaListarComponent } from './coordenada/coordenada-listar/coordenada-listar.component';
import { CoordenadaCreaeditaComponent } from './coordenada/coordenada-creaedita/coordenada-creaedita.component';
import { CoordenadaDialogoComponent } from './coordenada/coordenada-listar/coordenada-dialogo/coordenada-dialogo.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { UsuarioCreaeditaComponent } from './usuario/usuario-creaedita/usuario-creaedita.component';
import { UsuarioDialogoComponent } from './usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';

import { RutaComponent } from './ruta/ruta.component';
import { RutaListarComponent } from './ruta/ruta-listar/ruta-listar.component';
import { RutaCreaeditaComponent } from './ruta/ruta-creaedita/ruta-creaedita.component';
import { RutaDialogoComponent } from './ruta/ruta-listar/ruta-dialogo/ruta-dialogo.component';

import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { VehiculoListarComponent } from './vehiculo/vehiculo-listar/vehiculo-listar.component';
import { VehiculoCreaeditaComponent } from './vehiculo/vehiculo-creaedita/vehiculo-creaedita.component';
import { VehiculoDialogoComponent } from './vehiculo/vehiculo-listar/vehiculo-dialogo/vehiculo-dialogo.component';

import { IdentificacionComponent } from './identificacion/identificacion.component';
import { IdentificacionListarComponent } from './identificacion/identificacion-listar/identificacion-listar.component';
import { IdentificacionCreaeditaComponent } from './identificacion/identificacion-creaedita/identificacion-creaedita.component';
import { IdentificacionDialogoComponent } from './identificacion/identificacion-listar/identificacion-dialogo/identificacion-dialogo.component';

import { ConductorComponent } from './conductor/conductor.component';
import { ConductorListarComponent } from './conductor/conductor-listar/conductor-listar.component';
import { ConductorCreaeditaComponent } from './conductor/conductor-creaedita/conductor-creaedita.component';
import { ConductorDialogoComponent } from './conductor/conductor-listar/conductor-dialogo/conductor-dialogo.component';

import { PasajeroComponent } from './pasajero/pasajero.component';
import { PasajeroCreaeditaComponent } from './pasajero/pasajero-creaedita/pasajero-creaedita.component';
import { PasajeroDialogoComponent } from './pasajero/pasajero-listar/pasajero-dialogo/pasajero-dialogo.component';
import { PasajeroListarComponent } from './pasajero/pasajero-listar/pasajero-listar.component';

import { ViajeComponent } from './viaje/viaje.component';
import { ViajeListarComponent } from './viaje/viaje-listar/viaje-listar.component';
import { ViajeCreaeditaComponent } from './viaje/viaje-creaedita/viaje-creaedita.component';
import { ViajeDialogoComponent } from './viaje/viaje-listar/viaje-dialogo/viaje-dialogo.component';

import { ReclamoComponent } from './reclamo/reclamo.component';
import { ReclamoListarComponent } from './reclamo/reclamo-listar/reclamo-listar.component';
import { ReclamoCreaeditaComponent } from './reclamo/reclamo-creaedita/reclamo-creaedita.component';
import { ReclamoDialogoComponent } from './reclamo/reclamo-listar/reclamo-dialogo/reclamo-dialogo.component';

import { CalificacionComponent } from './calificacion/calificacion.component';
import { CalificacionDialogoComponent } from './calificacion/calificacion-listar/calificacion-dialogo/calificacion-dialogo.component';
import { CalificacionListarComponent } from './calificacion/calificacion-listar/calificacion-listar.component';
import { CalificacionCreaditaComponent } from './calificacion/calificacion-creadita/calificacion-creadita.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ReporteModeloComponent } from './reportes/reporte-modelo/reporte-modelo.component';

@NgModule({
  declarations: [
    
    MarcaComponent,
    MarcaCreaeditaComponent,
    MarcaDialogoComponent,
    MarcaListarComponent,
    UserComponent,
    UserListarComponent,
    UserCreaeditaComponent,
    UserDialogoComponent,
    RoleComponent,
    RoleListarComponent,
    RoleCreaeditaComponent,
    RoleDialogoComponent,

    CalificacionListarComponent,
    CalificacionComponent,
    CalificacionCreaditaComponent,
    CalificacionDialogoComponent,

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
    ReclamoDialogoComponent,
    ReportesComponent,
    ReporteModeloComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    PagesRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatSnackBarModule,
    ReactiveFormsModule,
   // BrowserModule,
    // BrowserAnimationsModule,
    NgxPaginationModule,
    MatPaginatorModule,
    // MatSidenavModule,
    // MatDividerModule,
    // MatListModule,
    // MatMenuModule,

  ],
  exports: [
    MatFormFieldModule
  ]
})
export class PagesModule { }
