import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-network-main',
  templateUrl: './network-main.component.html',
  styleUrls: ['./network-main.component.sass']
})

export class NetworkMainComponent implements OnInit {
  constructor(private authService: AuthService) {}
  isLogged: boolean = false;


  ngOnInit() {
    this.isLogged = this.authService.isLoggedIn;
  }

  logout(): void {
    this.authService.logout();
  }
}
