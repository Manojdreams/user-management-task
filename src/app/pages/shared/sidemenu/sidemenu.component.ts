import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogoutAction } from '../../../store/actions/users.action';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  logout(){
    this.store.dispatch(new LogoutAction());
  }

}
