import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalificacionComponent } from './page/calificacion/calificacion.component';
import { CalificacionCreaditaComponent } from './page/calificacion/calificacion-creadita/calificacion-creadita.component';
const routes: Routes = [{
  path:'calificaciones',component:CalificacionComponent,children:[
    {path: 'calificacionEditar',component:CalificacionCreaditaComponent }, 
  {path:'edicion/:id',component:CalificacionCreaditaComponent}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
