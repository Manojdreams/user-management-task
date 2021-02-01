import { UserAdd} from '../models/users.model';
import {UserActions, UserActionTypes} from '../actions/users.action';
import { AppState, FeatureState } from '../models/app.model';
import { createSelector } from '@ngrx/store';


let usersArray;

if (localStorage.getItem('users')) {
  usersArray = localStorage.getItem('users');
}
else {
  localStorage.setItem('users','[]');
  usersArray = localStorage.getItem('users');
}


export const selectFeature = (state: AppState) => state.feature;

export const getUserList = createSelector(
  selectFeature,
  (state: FeatureState) => state.users
);


const initialState: Array<UserAdd> = JSON.parse(usersArray);

export function UserReducer(state: Array<UserAdd> = initialState,action :UserActions){
  switch(action.type) {
    case UserActionTypes.SIGNUP: {
        return [...state, action.payload];
    }

    case UserActionTypes.LOGIN: {
      return [...state, action.payload];
    }

    case UserActionTypes.ADD_USER : {
        return [...state, action.payload];
    } 

    case UserActionTypes.GET_USERS: {
      usersArray = localStorage.getItem('users');
      state = JSON.parse(usersArray);
      return state;
    }

    case UserActionTypes.LOGOUT: {
      return state;
    }

    case UserActionTypes.DELETE_USER:
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
    }
};

