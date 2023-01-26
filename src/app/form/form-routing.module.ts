import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'form',
        component: FormPageComponent
      },
      {
        path: '**',
        redirectTo: 'form'
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
export class FormRoutingModule { }
