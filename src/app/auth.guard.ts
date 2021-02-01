import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthorizationGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const loginStatus = localStorage.getItem('login');
    if (loginStatus === 'false') {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
