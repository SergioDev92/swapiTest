import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatProgressSpinnerModule, MatSidenavModule, MatToolbarModule } from '@angular/material';


@NgModule({

  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MaterialModule { }
