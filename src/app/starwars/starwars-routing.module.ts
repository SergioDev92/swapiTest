import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';

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
        component: PeliculaComponent 
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
