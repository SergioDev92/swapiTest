import { NgModule } from '@angular/core';

import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';


@NgModule({

  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
