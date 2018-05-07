import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth/auth.service';


@Component({
  selector: 'app-auth-section',
  templateUrl: './auth-section.component.html',
  styleUrls: ['./auth-section.component.sass']
})
export class AuthSectionComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) { }

  confLoginForm = {
    title: 'Se connecter',
    inputs: [{
      tag: 'input',
      type: 'text',
      name: 'mail',
      placeholder: 'Votre email',
      required: true
    }, {
      tag: 'input',
      type: 'password',
      name: 'mdp',
      placeholder: 'Votre mot de passe',
      required: true
    }],
    small: {
      title: 'mot de passe oublié',
      content: 'mot de passe oublié',
      link: ''
    },
    button: {
      content: 'login'
    },
    manager: {},
    onError: false,
    message: 'Mail ou mot de passe incorrecte',
    onSubmit: () => this.formSubmit('Login')
  }

  confRegisterForm = {
    title: 'Créer un compte',
    inputs: [{
      tag: 'input',
      type: 'text',
      name: 'mail',
      placeholder: 'Votre email',
      required: true
    }, {
      tag: 'input',
      type: 'password',
      name: 'mdp',
      placeholder: 'Votre mot de passe',
      required: true
    }, {
      tag: 'input',
      type: 'password',
      name: 'confirm',
      placeholder: 'Confirmez mot de passe',
      required: true
    }],
    button: {
      content: 'créer',
      confirm: true
    },
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
