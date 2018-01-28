import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-network-login',
  templateUrl: './network-login.component.html',
  styleUrls: ['./network-login.component.sass']
})
export class NetworkLoginComponent implements OnInit {
  constructor(private authService: AuthService) { }
  login(): void {
    this.authService.login();
  }
  ngOnInit() {
  }
}
