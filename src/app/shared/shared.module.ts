import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatIconModule, MatMenuModule, MatInputModule, MatToolbarModule, MatCardModule, MatChipsModule } from "@angular/material";

import { ToolbarComponent } from './toolbar/toolbar.component';

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
    ToolbarComponent
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
    ToolbarComponent
  ]
})
export class SharedModule { }
