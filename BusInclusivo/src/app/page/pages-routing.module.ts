import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../service/guard.service';

import { MarcaComponent } from './marca/marca.component'; 
import { MarcaCreaeditaComponent } from './marca/marca-creaedita/marca-creaedita.component'; 

const routes: Routes = [

    {
        path: 'marcas', component: MarcaComponent, children: [
          { path: 'marcaEditar', component: MarcaCreaeditaComponent },
          { path: 'edicion/:id', component: MarcaCreaeditaComponent },
        ],canActivate:[GuardService]
    },
        
          
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }

