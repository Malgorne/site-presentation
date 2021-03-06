import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { forEach } from 'lodash';

@Component({
  selector: 'app-generator-list',
  template: ''
})
export class GeneratorListComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) { }
  @Input() list: object = {};
  ngOnInit() {
    this.buildHtml();
  }

  buildTitle({ tag, content }) {
    const output = this.renderer.createElement(tag);
    this.renderer.appendChild(output, this.renderer.createText(content));
    return this.renderer.appendChild(this.el.nativeElement, output);
  }

  buildList(inputs) {
    const ulNode = this.renderer.createElement('ul');
    forEach(inputs, el => {
      const liNode = this.renderer.createElement('li');
      this.renderer.appendChild(liNode, this.renderer.createText(el.content));
      this.renderer.appendChild(ulNode, liNode);
      if(el.events) forEach(el.events, (action, event) => this.renderer.listen(liNode, event, action));
      if(el.classes) forEach(el.classes, aClass => this.renderer.addClass(liNode, aClass));
      if(el.ngClasses) console.log('untruc');
    });
    return this.renderer.appendChild(this.el.nativeElement, ulNode);
  }

  buildHtml() {
    forEach(this.list, (el, key) => {
      if (key === 'title') return this.buildTitle(el);
      return this.buildList(el);
    });
  }
}
