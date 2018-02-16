import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthService {
  constructor() {}
  isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    console.log('dans le click du service');
    this.isLoggedIn = true;
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    console.log('dans le logout ');
    this.isLoggedIn = false;
  }
}
