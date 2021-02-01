import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from "@ngrx/store";
import { UserReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserActionsEffects } from "./store/effects/user.effect";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      users: UserReducer
    }),
    EffectsModule.forRoot([UserActionsEffects]),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
