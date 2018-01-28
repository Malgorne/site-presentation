import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-network-register',
  templateUrl: './network-register.component.html',
  styleUrls: ['./network-register.component.sass']
})

export class NetworkRegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(): void {
    this.authService.login();
  }
}
