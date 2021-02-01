import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, tap } from 'rxjs/operators';
import * as userActions from '../actions/users.action';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service';

@Injectable()
export class UserActionsEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    public dService : DataService
  ) { }

  signUp$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.UserActionTypes.SIGNUP),
        switchMap(async (data) => this.dService.signUp(data)),
        tap((action) => this.dService.getUsersData())),
    { dispatch: false }
  );

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.UserActionTypes.LOGIN),
        switchMap(async (data) => this.dService.login(data)),
        tap((action) => this.dService.getUsersData())),
    { dispatch: false }
  );

  adduser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.UserActionTypes.ADD_USER),
        switchMap(async (data) => this.dService.addUser(data)),
        tap((action) => this.dService.getUsersData())),
    { dispatch: false }
  );

  deleteuser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.UserActionTypes.DELETE_USER),
        switchMap(async (data) => this.dService.deleteUser(data)),
        tap((action) => this.dService.getUsersData())),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.UserActionTypes.LOGOUT),
        switchMap(async (data) => this.dService.logout()),
        tap((action) => this.dService.getUsersData())),
    { dispatch: false }
  );
}