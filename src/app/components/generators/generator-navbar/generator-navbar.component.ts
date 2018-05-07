import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generator-navbar',
  templateUrl: './generator-navbar.component.html'
})
export class GeneratorNavbarComponent implements OnInit {
  constructor() { }
  @Input() navbar: object = {};

  ngOnInit() {
    console.log('this.navbar', this.navbar);
  }

}
