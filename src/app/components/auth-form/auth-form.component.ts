import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.sass']
})
export class AuthFormComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) { }
  @Input() config: object = {};
  ngOnInit() {
    console.log(this.config);
  }
}
