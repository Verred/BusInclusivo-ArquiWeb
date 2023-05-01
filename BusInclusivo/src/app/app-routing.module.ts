import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloComponent } from './page/modelo/modelo.component';
import { ModeloCreaeditaComponent } from './page/modelo/modelo-creaedita/modelo-creaedita.component';
const routes: Routes = [
{
  path:'modelos',component:ModeloComponent,children:[
    { path: 'modeloEditar',component: ModeloCreaeditaComponent },
    { path: 'edicion/:id',component:ModeloCreaeditaComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
