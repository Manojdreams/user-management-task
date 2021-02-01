import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserAdd } from 'src/app/store/models/users.model';
import { GetUserAction } from '../store/actions/users.action';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users$: Observable<UserAdd[]> = this.store.select(state => state.users);
  userList: any = [];
  
  constructor(
    private router: Router, private store: Store<{ users: UserAdd[] }>,
    ) { 
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', '[]');
    }
    }

  signUp(action) {
    this.userList = JSON.parse(localStorage.getItem('users'));
    const index = this.userList.findIndex((element) => element.email === action.payload.email);
    if (index === -1) {
      localStorage.setItem('users', JSON.stringify([...this.userList, action.payload]));
      localStorage.setItem('login', 'true');
      this.router.navigate(['/home'])
    }
    else{
     alert('User Already Exits');
    }
  }

  addUser(action) {
    this.userList = JSON.parse(localStorage.getItem('users'));
    const index = this.userList.findIndex((element) => element.email === action.payload.email);
    if (index === -1) {
      localStorage.setItem('users', JSON.stringify([...this.userList, action.payload]));
      alert('Added Successfully');
    }
    else {
      alert('User Already Exits');
    }
  }

  deleteUser(action) {
    this.userList = JSON.parse(localStorage.getItem('users'));
    const index = this.userList.findIndex((element) => element.id === action.payload);
    if (index !== -1) {
      this.userList.splice(index,1)
      localStorage.setItem('users', JSON.stringify(this.userList));
      alert('Removed Successfully');
    }
  }

  getUsersData() {
    this.store.dispatch(new GetUserAction());
  }

  login(action){
    this.userList = JSON.parse(localStorage.getItem('users'));
    const index = this.userList.findIndex((element) => element.email === action.payload.email);
    if (index === -1) {
      alert('Email not found signup and the continue');
    }
    else {
      if ((this.userList[index].email === action.payload.email) && (this.userList[index].password === action.payload.password)){
        localStorage.setItem('login', 'true');
        this.router.navigate(['/home'])
      }
      else{
        alert('Email and password did not match');
      } 
    }
  }

  logout(){
    localStorage.setItem('login','false');
    this.router.navigate(['/login'])
  }

}

        
