import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatMenuTrigger,
  MatDialogModule,
  MatIconModule,
  MatMenuModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatChipsModule
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
    MatChipsModule
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
    MenuComponent
  ]
})
export class SharedModule { }
