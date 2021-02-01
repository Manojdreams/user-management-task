import { Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { DeleteUserAction, AddUserAction, SignupAction } from '../../store/actions/users.action';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { UserAdd } from 'src/app/store/models/users.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  users$: Observable<UserAdd[]> = this.store.select(state => state.users);
  showadd = false;
  userList :any =[];
  displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'delete'];
  

  userslist: {};

  constructor(private store: Store<{ users: UserAdd[] }>, public dialog: MatDialog) { }


  ngOnInit(): void {
   
    this.users$.subscribe(data => {
      this.userList = new MatTableDataSource(data);
    })
  }

    addUser(): void {
      const dialogRef = this.dialog.open(AddUserDialogue, {
        width: '400px',
        data: { }
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }

  deleteUser(id) {
    this.store.dispatch(new DeleteUserAction(id));
  }
}


@Component({
  selector: 'add-user-dialog',
  templateUrl: 'add-user-dialog.html',
})
export class AddUserDialogue implements OnInit {
  userForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddUserDialogue>, private store: Store<{ users: UserAdd[] }>, private formBuilder: FormBuilder,) { }

  close(): void {
    this.dialogRef.close();
  }
  ngOnInit() : void {
    this.userForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('male', [Validators.required]),
      id: new FormControl(uuid())
    });
  }
  saveUser() {
    this.store.dispatch(new AddUserAction(this.userForm.value));
    this.dialogRef.close();
  }

}