import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { MenuComponent } from './menu/menu.component';
import { UserCreaeditaComponent } from './page/user/user-creaedita/user-creaedita.component';
import { RegisterComponent } from './page/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full',
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'pages',
    loadChildren: () => import('./page/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'registro', component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
