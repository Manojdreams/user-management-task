import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DeleteUserAction, AddUserAction, LoginAction } from '../../store/actions/users.action';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   loginForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private store: Store<any>) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  login(){
    console.log(this.loginForm.valid);
    console.log(this.loginForm)
    if(this.loginForm.valid){
      this.store.dispatch(new LoginAction(this.loginForm.value));
    }
  }
}
