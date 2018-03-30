import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent implements OnInit {
  constructor() { }

  tardis = {
    top: Math.random() * (75 - 25) + 25,
    left: Math.random() * (90 - 10) + 10
  }

  animateY() {
    console.log('Vertical');
    return this.tardis.top;
  }

  animateX() {
    console.log('Horizontal');
    return this.tardis.left;
  }

  ngOnInit() {

  };

}
