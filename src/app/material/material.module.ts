import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatSidenavModule, MatToolbarModule } from '@angular/material';


@NgModule({

  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
