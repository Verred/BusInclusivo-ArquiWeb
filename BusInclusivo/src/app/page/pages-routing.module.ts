import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../service/guard.service';

import { MarcaComponent } from './marca/marca.component';
import { MarcaCreaeditaComponent } from './marca/marca-creaedita/marca-creaedita.component';

import { CalificacionComponent } from './calificacion/calificacion.component';
import { CalificacionCreaditaComponent } from './calificacion/calificacion-creadita/calificacion-creadita.component';

import { ModeloComponent } from './modelo/modelo.component';
import { ModeloCreaeditaComponent } from './modelo/modelo-creaedita/modelo-creaedita.component';

import { ColorCreaeditaComponent } from './color/color-creaedita/color-creaedita.component';
import { ColorComponent } from './color/color.component';

import { MetodopagoComponent } from './metodopago/metodopago.component';
import { MetodopagoCreaeditaComponent } from './metodopago/metodopago-creaedita/metodopago-creaedita.component';

import { PagoComponent } from './pago/pago.component';
import { PagoCreaeditaComponent } from './pago/pago-creaedita/pago-creaedita.component';

import { TarjetapropiedadComponent } from './tarjetapropiedad/tarjetapropiedad.component';
import { TarjetapropiedadCreaeditaComponent } from './tarjetapropiedad/tarjetapropiedad-creaedita/tarjetapropiedad-creaedita.component';

import { EstadoVehiculoCreaditaComponent } from './estadovehiculo/estadovehiculo-creadita/estadovehiculo-creadita.component';
import { EstadoVehiculoComponent } from './estadovehiculo/estadovehiculo.component';

import { TipoDocumentoComponent } from './tipodocumento/tipodocumento.component';
import { TipoDocumentoCreaditaComponent } from './tipodocumento/tipodocumento-creadita/tipodocumento-creadita.component';

import { CoordenadaComponent } from './coordenada/coordenada.component';
import { CoordenadaCreaeditaComponent } from './coordenada/coordenada-creaedita/coordenada-creaedita.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './usuario/usuario-creaedita/usuario-creaedita.component';

import { RutaComponent } from './ruta/ruta.component';
import { RutaCreaeditaComponent } from './ruta/ruta-creaedita/ruta-creaedita.component';

import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { VehiculoCreaeditaComponent } from './vehiculo/vehiculo-creaedita/vehiculo-creaedita.component';

import { IdentificacionComponent } from './identificacion/identificacion.component';
import { IdentificacionCreaeditaComponent } from './identificacion/identificacion-creaedita/identificacion-creaedita.component';

import { ConductorComponent } from './conductor/conductor.component';
import { ConductorCreaeditaComponent } from './conductor/conductor-creaedita/conductor-creaedita.component';

import { PasajeroComponent } from './pasajero/pasajero.component';
import { PasajeroCreaeditaComponent } from './pasajero/pasajero-creaedita/pasajero-creaedita.component';

import { ViajeComponent } from './viaje/viaje.component';
import { ViajeCreaeditaComponent } from './viaje/viaje-creaedita/viaje-creaedita.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ReporteModeloComponent } from './reportes/reporte-modelo/reporte-modelo.component';
import { ReporteColorComponent } from './reportes/reporte-color/reporte-color.component';
import { ReporteMarcaComponent } from './reportes/reporte-marca/reporte-marca.component';
import { ReporteConductoresComponent } from './reportes/reporte-conductores/reporte-conductores.component';

const routes: Routes = [
    {
        path: 'marcas', component: MarcaComponent, children: [
            { path: 'marcaEditar', component: MarcaCreaeditaComponent },
            { path: 'edicion/:id', component: MarcaCreaeditaComponent },
        ], canActivate: [GuardService]
    },
    {
        path: 'modelos', component: ModeloComponent, children: [
            { path: 'modeloEditar', component: ModeloCreaeditaComponent },
            { path: 'edicion/:id', component: ModeloCreaeditaComponent },
        ], canActivate: [GuardService]
    },
    {
        path: 'colores', component: ColorComponent, children: [
            { path: 'coloreditar', component: ColorCreaeditaComponent },
            { path: 'edicion/:id', component: ColorCreaeditaComponent },
        ], canActivate: [GuardService]
    },
    {
        path: 'metodopagos', component: MetodopagoComponent, children: [
            { path: 'metopagoEditar', component: MetodopagoCreaeditaComponent },
            { path: 'edicion/:id', component: MetodopagoCreaeditaComponent },
        ], canActivate: [GuardService]
    },
    {
        path: 'pagos', component: PagoComponent, children: [
            { path: 'pagoEditar', component: PagoCreaeditaComponent },
            { path: 'edicion/:id', component: PagoCreaeditaComponent },
        ], canActivate: [GuardService]
    },
    {
        path: 'tarjetapropiedades', component: TarjetapropiedadComponent, children: [
            { path: 'tarjetapropiedadEditar', component: TarjetapropiedadCreaeditaComponent },
            { path: 'edicion/:id', component: TarjetapropiedadCreaeditaComponent }
        ], canActivate: [GuardService]

    },
    {
        path: 'coordenadas', component: CoordenadaComponent, children: [
            { path: 'coordenadaEditar', component: CoordenadaCreaeditaComponent },
            { path: 'edicion/:id', component: CoordenadaCreaeditaComponent }
        ], canActivate: [GuardService]

    },

    {
        path: 'usuarios', component: UsuarioComponent, children: [
            { path: 'usuarioEditar', component: UsuarioCreaeditaComponent },
            { path: 'edicion/:id', component: UsuarioCreaeditaComponent }
        ], canActivate: [GuardService]

    },
    {
        path: 'rutas', component: RutaComponent, children: [
            { path: 'rutaEditar', component: RutaCreaeditaComponent },
            { path: 'edicion/:id', component: RutaCreaeditaComponent }
        ], canActivate: [GuardService]
    },
    {
        path: 'vehiculos', component: VehiculoComponent, children: [
            { path: 'vehiculoEditar', component: VehiculoCreaeditaComponent },
            { path: 'edicion/:id', component: VehiculoCreaeditaComponent }
        ], canActivate: [GuardService]
    },
    {
        path: 'estadovehiculos', component: EstadoVehiculoComponent, children: [
            { path: 'estadovehiculoEditar', component: EstadoVehiculoCreaditaComponent },
            { path: 'edicion/:id', component: EstadoVehiculoCreaditaComponent }
        ], canActivate: [GuardService]
    },
    {
        path: 'identificaciones', component: IdentificacionComponent, children: [
            { path: 'identificacionEditar', component: IdentificacionCreaeditaComponent },
            { path: 'edicion/:id', component: IdentificacionCreaeditaComponent }
        ], canActivate: [GuardService]
    },
    {
        path: 'conductores', component: ConductorComponent, children: [
            { path: 'conductorEditar', component: ConductorCreaeditaComponent },
            { path: 'edicion/:id', component: ConductorCreaeditaComponent }
        ], canActivate: [GuardService]
    },
    {
        path: 'pasajeros', component: PasajeroComponent, children: [
            { path: 'pasajeroEditar', component: PasajeroCreaeditaComponent },
            { path: 'edicion/:id', component: PasajeroCreaeditaComponent }
        ], canActivate: [GuardService]
    },
    {
        path: 'viajes', component: ViajeComponent, children: [
            { path: 'viajeEditar', component: ViajeCreaeditaComponent },
            { path: 'edicion/:id', component: ViajeCreaeditaComponent }
        ], canActivate: [GuardService]
    },
    {
        path: 'tipodocumento', component: TipoDocumentoComponent, children: [
            { path: 'tipodocumentoEditar', component: TipoDocumentoCreaditaComponent },
            { path: 'edicion/:id', component: TipoDocumentoCreaditaComponent }
        ], canActivate: [GuardService]

    },
    {
        path: 'estadovehiculo', component: EstadoVehiculoComponent, children: [
            { path: 'estadovehiculoEditar', component: EstadoVehiculoCreaditaComponent },
            { path: 'edicion/:id', component: EstadoVehiculoCreaditaComponent }
        ], canActivate: [GuardService]

    },
    {
        path: 'calificaciones', component: CalificacionComponent, children: [
            { path: 'calificacionEditar', component: CalificacionCreaditaComponent },
            { path: 'edicion/:id', component: CalificacionCreaditaComponent }
        ], canActivate: [GuardService]
    },
    {
        path:'reportes',component:ReportesComponent,children:[
    
        { path: 'model-count', component: ReporteModeloComponent },
        { path: 'color-count', component: ReporteColorComponent },
        { path: 'marca-count', component: ReporteMarcaComponent },
        { path: 'conductor-count', component: ReporteConductoresComponent },

      ], canActivate: [GuardService]
    }



]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }

