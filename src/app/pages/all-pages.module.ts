import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPagesRoutingModule } from './all-pages-routing.module';
import { AllPagesComponent } from './all-pages.component';
import { SidemenuModule } from './shared/sidemenu/sidemenu.module';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    AllPagesComponent
  ],
  imports: [
    CommonModule,
    SidemenuModule,
    AllPagesRoutingModule,
    MaterialModule
  ]
})
export class AllPagesModule { }
