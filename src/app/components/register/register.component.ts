import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

export class RegisterComponent {
  constructor(public authService: AuthService, public router: Router) { }
  loginForm: object= {};
  onError: boolean = false;
  message: string = 'Cet email est déjà pris'
  register() {
    this.authService.register().subscribe(() => {
      if(this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/network-main';
        return this.router.navigate([redirect]);
      }
      this.onError = true;
    });
  }
}
