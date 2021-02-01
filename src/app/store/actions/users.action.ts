import { Action } from '@ngrx/store';
import { UserAdd } from '../models/users.model';

export enum UserActionTypes  {
  SIGNUP = '[USER] SIGNUP',
  ADD_USER = '[USER] ADD',
  DELETE_USER = '[USER] DELETE',
  GET_USERS = '[USER] GET',
  LOGIN = '[USER] LOGIN',
  LOGOUT = '[USER] LOGOUT'
}
export class SignupAction implements Action {
  readonly type = UserActionTypes.SIGNUP;
  constructor(public payload : UserAdd) {
  }
}
export class LoginAction implements Action {
  readonly type = UserActionTypes.LOGIN;
  constructor(public payload: UserAdd) {
  }
}
export class LogoutAction implements Action {
  readonly type = UserActionTypes.LOGOUT;
  constructor() {
  }
}
export class GetUserAction implements Action {
  readonly type = UserActionTypes.GET_USERS;
  constructor() {
  }
}

export class AddUserAction implements Action {
  readonly type = UserActionTypes.ADD_USER;
  constructor(public payload: UserAdd) {
  }
}

export class DeleteUserAction implements Action {
  readonly type = UserActionTypes.DELETE_USER;
  constructor(public payload : string) {}
}

export type UserActions = SignupAction | LoginAction | AddUserAction | DeleteUserAction | GetUserAction | LogoutAction;
