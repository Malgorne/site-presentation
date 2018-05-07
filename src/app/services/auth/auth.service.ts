import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    console.log('dans le login du service');
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }
  register(): Observable<boolean> {
    console.log('dans le register du service');
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = false);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
