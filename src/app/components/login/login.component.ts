import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  constructor(public authService: AuthService, public router: Router) { }
  loginForm: object= {};
  onError: boolean = false;
  message: string = 'Email ou mot de passe incorrecte'
  login(loginForm) {
    this.authService.login().subscribe(() => {
      if(this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/network-main';
        this.router.navigate([redirect]);
      }
    });
  }
}
