import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import {
  MatButtonModule,
  MatMenuTrigger,
  MatDialogModule,
  MatIconModule,
  MatMenuModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatExpansionModule

} from '@angular/material';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatProgressSpinnerModule,

    AppRoutingModule
  ],
  declarations: [
    ToolbarComponent,
    MenuComponent
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    ToolbarComponent,
    MatGridListModule,
    MenuComponent,
    MatProgressSpinnerModule,

  ]
})
export class SharedModule { }
