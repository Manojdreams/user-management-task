import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DeleteUserAction, AddUserAction, SignupAction } from '../../store/actions/users.action';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  gender: string = 'male';
  userslist: {};

  constructor(private formBuilder: FormBuilder, private store: Store<any>) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('male', [Validators.required]),
      id: new FormControl(uuid())
    });
    this.store.select('state').subscribe(data => {this.userslist = data
    console.log(this.userslist)});
    this.userslist = this.store.select('state')
  }

  save(){
    this.store.dispatch(new SignupAction(this.signupForm.value));
  }

}



