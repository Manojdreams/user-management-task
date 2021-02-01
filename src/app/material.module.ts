import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatTableModule,
  MatDialogModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
