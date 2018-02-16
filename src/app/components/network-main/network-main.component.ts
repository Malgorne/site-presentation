import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-network-main',
  templateUrl: './network-main.component.html',
  styleUrls: ['./network-main.component.sass']
})

export class NetworkMainComponent {
  constructor(public authService: AuthService, public router: Router) {}
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth-section']);
  }
}
