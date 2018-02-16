import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-header',
  templateUrl: './footer-header.component.html',
  styleUrls: ['./footer-header.component.sass']
})
export class FooterHeaderComponent implements OnInit {

  constructor() { }
  imgPath: '../../../assets/img/';
  linksList: object[] = [{
    link: 'https://www.linkedin.com/in/benjamin-fritz-069929102/',
    type: 'img',
    alt: 'LinkedIn',
    src: `${this.imgPath}footer/icone-linkedin.png`
  }, {
    link: '/path/to/twitter',
    type: 'img',
    alt: 'Twitter',
    src: `${this.imgPath}footer/twitter.png`
  }];

  ngOnInit() {
  }

}
