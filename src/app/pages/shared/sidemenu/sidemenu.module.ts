import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidemenuRoutingModule } from './sidemenu-routing.module';
import { SidemenuComponent } from './sidemenu.component';


@NgModule({
  declarations: [SidemenuComponent],
  imports: [
    CommonModule,
    SidemenuRoutingModule
  ],
  exports:[
    SidemenuComponent
  ]
})
export class SidemenuModule { }
