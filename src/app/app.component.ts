import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  navbar: object = {
    id: 'navbarSupportedContent',
    links:[{
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
    }]
  };
  title = 'app';
}
