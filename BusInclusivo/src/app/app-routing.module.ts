import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaComponent } from './page/marca/marca.component';
import { MarcaCreaeditaComponent } from './page/marca/marca-creaedita/marca-creaedita.component';
import { CalificacionComponent } from './page/calificacion/calificacion.component';
import { CalificacionCreaditaComponent } from './page/calificacion/calificacion-creadita/calificacion-creadita.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './page/login/login.component';
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
  // {
  //   path: 'marcas', component: MarcaComponent, children: [
  //     { path: 'marcaEditar', component: MarcaCreaeditaComponent },
  //     { path: 'edicion/:id', component: MarcaCreaeditaComponent },
  //   ]
  // },
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
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'pages',
    loadChildren: () => import('./page/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
