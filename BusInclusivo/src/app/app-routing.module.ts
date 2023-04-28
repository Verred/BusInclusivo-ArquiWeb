import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorCreaeditaComponent } from './page/color/color-creaedita/color-creaedita.component';
import { ColorComponent } from './page/color/color.component';

const routes: Routes = [
  {
    path: 'color', component:ColorComponent, children:[
      {path:'coloreditar',component:ColorCreaeditaComponent},
      {path:'edicion/:id', component:ColorCreaeditaComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
