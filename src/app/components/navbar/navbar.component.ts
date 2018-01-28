import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  linksMenu: object[] = [{
    link: '/',
    type: 'img',
    alt: 'Accueil',
    src: '../../../assets/img/pictos/home.ico'
  }, {
    link: '/resume',
    title: 'Résumé'
  }, {
    link: '/projects',
    title: 'Mes projets'
  }, {
    link: '/network-main',
    title: 'Réseau social'
  }];
  constructor() { }

  ngOnInit() {
  }

}
