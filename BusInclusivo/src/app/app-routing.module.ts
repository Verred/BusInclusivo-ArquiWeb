import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaComponent } from './page/marca/marca.component';
import { MarcaCreaeditaComponent } from './page/marca/marca-creaedita/marca-creaedita.component';
import { CalificacionComponent } from './page/calificacion/calificacion.component';
import { CalificacionCreaditaComponent } from './page/calificacion/calificacion-creadita/calificacion-creadita.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ModeloComponent } from './page/modelo/modelo.component';
import { ModeloCreaeditaComponent } from './page/modelo/modelo-creaedita/modelo-creaedita.component';
import { ColorCreaeditaComponent } from './page/color/color-creaedita/color-creaedita.component';
import { ColorComponent } from './page/color/color.component';
import { MetodopagoComponent } from './page/metodopago/metodopago.component';
import { MetodopagoCreaeditaComponent } from './page/metodopago/metodopago-creaedita/metodopago-creaedita.component';

import { PagoComponent } from './page/pago/pago.component';
import { PagoCreaeditaComponent } from './page/pago/pago-creaedita/pago-creaedita.component';
import { TarjetapropiedadComponent } from './page/tarjetapropiedad/tarjetapropiedad.component';
import { TarjetapropiedadCreaeditaComponent } from './page/tarjetapropiedad/tarjetapropiedad-creaedita/tarjetapropiedad-creaedita.component';

import { EstadoVehiculo } from './model/EstadoVehiculo';
import { EstadoVehiculoCreaditaComponent } from './page/estadovehiculo/estadovehiculo-creadita/estadovehiculo-creadita.component';
import { EstadoVehiculoComponent } from './page/estadovehiculo/estadovehiculo.component';
import { TipoDocumentoComponent } from './page/tipodocumento/tipodocumento.component';
import { TipoDocumentoCreaditaComponent } from './page/tipodocumento/tipodocumento-creadita/tipodocumento-creadita.component';
import { CoordenadaComponent } from './page/coordenada/coordenada.component';
import { CoordenadaCreaeditaComponent } from './page/coordenada/coordenada-creaedita/coordenada-creaedita.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './page/usuario/usuario-creaedita/usuario-creaedita.component';
import { RutaComponent } from './page/ruta/ruta.component';
import { RutaCreaeditaComponent } from './page/ruta/ruta-creaedita/ruta-creaedita.component';
import { VehiculoComponent } from './page/vehiculo/vehiculo.component';
import { VehiculoCreaeditaComponent } from './page/vehiculo/vehiculo-creaedita/vehiculo-creaedita.component';
import { IdentificacionComponent } from './page/identificacion/identificacion.component';
import { IdentificacionCreaeditaComponent } from './page/identificacion/identificacion-creaedita/identificacion-creaedita.component';
import { ConductorComponent } from './page/conductor/conductor.component';
import { ConductorCreaeditaComponent } from './page/conductor/conductor-creaedita/conductor-creaedita.component';
import { PasajeroComponent } from './page/pasajero/pasajero.component';
import { PasajeroCreaeditaComponent } from './page/pasajero/pasajero-creaedita/pasajero-creaedita.component';
import { ViajeComponent } from './page/viaje/viaje.component';
import { ViajeCreaeditaComponent } from './page/viaje/viaje-creaedita/viaje-creaedita.component';

const routes: Routes = [
  {
    path: 'tipodocumento', component: TipoDocumentoComponent, children: [
      { path: 'tipodocumentoEditar', component: TipoDocumentoCreaditaComponent },
      { path: 'edicion/:id', component: TipoDocumentoCreaditaComponent }
    ]

  },



  {
    path: 'estadovehiculo', component: EstadoVehiculoComponent, children: [
      { path: 'estadovehiculoEditar', component: EstadoVehiculoCreaditaComponent },
      { path: 'edicion/:id', component: EstadoVehiculoCreaditaComponent }
    ]

  },
  {
    path: 'calificaciones', component: CalificacionComponent, children: [
      { path: 'calificacionEditar', component: CalificacionCreaditaComponent },
      { path: 'edicion/:id', component: CalificacionCreaditaComponent }
    ]

  },
  {
    path: 'marcas', component: MarcaComponent, children: [
      { path: 'marcaEditar', component: MarcaCreaeditaComponent },
      { path: 'edicion/:id', component: MarcaCreaeditaComponent },
    ]
  },
  {
    path:'modelos',component:ModeloComponent,children:[
      { path: 'modeloEditar',component: ModeloCreaeditaComponent },
      { path: 'edicion/:id',component:ModeloCreaeditaComponent },
    ]
  },
  {
    path: 'colores', component:ColorComponent, children:[
      {path:'coloreditar',component:ColorCreaeditaComponent},
      {path:'edicion/:id', component:ColorCreaeditaComponent},
    ]
  },
  {
    path:'metodopagos',component:MetodopagoComponent,children:[
      { path: 'metopagoEditar',component: MetodopagoCreaeditaComponent },
      { path: 'edicion/:id',component:MetodopagoCreaeditaComponent },
    ]
  },
  {
    path: 'menu', component: MenuComponent
  },
  { path: 'landing', component: HomePageComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'pagos',component:PagoComponent,children:[
      { path: 'pagoEditar',component: PagoCreaeditaComponent },
      { path: 'edicion/:id',component:PagoCreaeditaComponent },
    ]
  },
  {
    path: 'tarjetapropiedades', component: TarjetapropiedadComponent, children: [
      { path: 'tarjetapropiedadEditar', component: TarjetapropiedadCreaeditaComponent },
      { path: 'edicion/:id', component: TarjetapropiedadCreaeditaComponent }
    ]
    
  },
  {
    path: 'coordenadas', component: CoordenadaComponent, children: [
      { path: 'coordenadaEditar', component: CoordenadaCreaeditaComponent },
      { path: 'edicion/:id', component: CoordenadaCreaeditaComponent }
    ]
    
  },

  {
    path: 'usuarios', component: UsuarioComponent, children: [
      { path: 'usuarioEditar', component: UsuarioCreaeditaComponent },
      { path: 'edicion/:id', component: UsuarioCreaeditaComponent }
    ]
    
  },
  {
    path: 'rutas', component: RutaComponent, children: [
      { path: 'rutaEditar', component: RutaCreaeditaComponent },
      { path: 'edicion/:id', component: RutaCreaeditaComponent }
    ]
  },
  {
    path: 'vehiculos', component: VehiculoComponent, children: [
      { path: 'vehiculoEditar', component: VehiculoCreaeditaComponent },
      { path: 'edicion/:id', component: VehiculoCreaeditaComponent }
    ]
  },
  {
    path: 'estadovehiculos', component: EstadoVehiculoComponent, children: [
      { path: 'estadovehiculoEditar', component: EstadoVehiculoCreaditaComponent },
      { path: 'edicion/:id', component: EstadoVehiculoCreaditaComponent }
    ]
  },
  {
    path: 'identificaciones', component: IdentificacionComponent, children: [
      { path: 'identificacionEditar', component: IdentificacionCreaeditaComponent },
      { path: 'edicion/:id', component: IdentificacionCreaeditaComponent }
    ]
  },
  {
    path: 'conductores', component: ConductorComponent, children: [
      { path: 'conductorEditar', component: ConductorCreaeditaComponent },
      { path: 'edicion/:id', component: ConductorCreaeditaComponent }
    ]
  },
  {
    path: 'pasajeros', component: PasajeroComponent, children: [
      { path: 'pasajeroEditar', component: PasajeroCreaeditaComponent },
      { path: 'edicion/:id', component: PasajeroCreaeditaComponent }
    ]
  },
  {
    path: 'viajes', component: ViajeComponent, children: [
      { path: 'viajeEditar', component: ViajeCreaeditaComponent },
      { path: 'edicion/:id', component: ViajeCreaeditaComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
