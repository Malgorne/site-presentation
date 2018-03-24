import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-auth-section',
  templateUrl: './auth-section.component.html',
  styleUrls: ['./auth-section.component.sass']
})
export class AuthSectionComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) { }
  confLoginForm = {
    manager: {},
    onError: false,
    message: 'Cet email est déjà pris',
    onSubmit: () => this.formSubmit('Login')
  }
  
  confRegisterForm = {
    manager: {},
    onError: false,
    message: 'Cet email est déjà pris',
    onSubmit: () => this.formSubmit('Register')
  }

  formSubmit(method) {
    this.authService[method.toLowerCase()]().subscribe(() => {
      if(this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/network-main';
        return this.router.navigate([redirect]);
      }
      this[`conf${method}Form`].onError = true;
    })
  }
  ngOnInit() {
  }
}
