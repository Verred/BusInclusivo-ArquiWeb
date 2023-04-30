import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaComponent } from './page/marca/marca.component';
import { MarcaCreaeditaComponent } from './page/marca/marca-creaedita/marca-creaedita.component';
import { CalificacionComponent } from './page/calificacion/calificacion.component';
import { CalificacionCreaditaComponent } from './page/calificacion/calificacion-creadita/calificacion-creadita.component';
const routes: Routes = [
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
