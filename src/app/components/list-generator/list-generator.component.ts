import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { forEach } from 'lodash';

@Component({
  selector: 'app-list-generator',
  templateUrl: './list-generator.component.html',
  styleUrls: ['./list-generator.component.sass']
})
export class ListGeneratorComponent implements OnInit {
  @Input() config: object = {};
  title: string = '';

  constructor() { }

  ngOnInit() {
    this.buildHtml()
  }
  buildHtml() {
    console.log('config', this.config)
    forEach(this.config, (element, key) => {
      console.log('element', element);
      if (key === 'title') this.title += `<${element.tag}>${element.content}</${element.tag}>`
    })
  }
}
