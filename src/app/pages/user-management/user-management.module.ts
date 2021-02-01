import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserDialogue, UserManagementComponent } from "./user-management.component";
import { UserManagementRoutingModule } from './user-management-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserManagementComponent,
  AddUserDialogue],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class UserManagementModule { }
