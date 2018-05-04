import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network-navbar',
  templateUrl: './network-navbar.component.html',
  styleUrls: ['./network-navbar.component.sass']
})
export class NetworkNavbarComponent implements OnInit {
  linksMenu:object[] = [{
    link: '#',
    title: 'Chat'
  }, {
    link: '#',
    title: 'Mes posts'
  }, {
    link: '#',
    title: 'Mes mails'
  }, {
    link: '#',
    title: 'Mon compte'
  }, {
    link: '#',
    title: 'Déconnexion'
  }]

  constructor() { }

  ngOnInit() {}

}
