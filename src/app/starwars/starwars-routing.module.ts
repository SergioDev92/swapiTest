import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { FilmInfoComponent } from './pages/film-info/film-info.component';
import { FormPageComponent } from '../form/pages/form-page/form-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //rutas hijas delHomeComponent y por eso necesitamos otro router-outlet
    children: [
      {
        path: 'listado',
        component:ListadoComponent 
      },
      {
        path: ':id',
        component: FilmInfoComponent 
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StarwarsRoutingModule { }
