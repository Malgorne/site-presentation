import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { forEach } from 'lodash';

@Component({
  selector: 'app-list-generator',
  templateUrl: './list-generator.component.html',
  styleUrls: ['./list-generator.component.sass', '../resume/resume.component.sass']
})
export class ListGeneratorComponent implements OnInit {
  @Input() list: object = {};
  title: string = '';

  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit() {
    this.buildHtml();
  }

  buildTitle({ tag, content }) {
    const renderedTag = this.renderer.createElement(tag);
    this.renderer.appendChild(renderedTag, this.renderer.createText(content));
    return this.renderer.appendChild(this.el.nativeElement, renderedTag);
  }

  buildList(inputs) {
    const ulNode = this.renderer.createElement('ul');
    forEach(inputs, el => {
      const liNode = this.renderer.createElement('li');
      this.renderer.appendChild(liNode, this.renderer.createText(el.content));
      this.renderer.appendChild(ulNode, liNode);
      if(el.events) forEach(el.events, (action, event) => this.renderer.listen(liNode, event, action));
      if(el.ngClass) forEach(el.ngClass, nClass => this.renderer.addClass(liNode, nClass));
    });
    return this.renderer.appendChild(this.el.nativeElement, ulNode);
  }

  buildHtml() {
    forEach(this.list, (el, key) => {
      if (key === 'title') return this.buildTitle(el);
      this.buildList(el);
    });
  }
}
