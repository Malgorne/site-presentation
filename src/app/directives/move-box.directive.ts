import { Directive, ElementRef } from '@angular/core';
import { random } from 'lodash';

@Directive({
  selector: '[appMoveBox]'
})
export class MoveBoxDirective {
  constructor(el: ElementRef) {
    this.el = el;
  }
  // contains the native
  el;
  maxWidth: number;
  maxHeight: number;
  leftToRightOnUp: boolean;
  speed: number;
  ngOnInit() {
    this.maxWidth = this.el.nativeElement.parentElement.clientWidth;
    this.maxHeight = this.el.nativeElement.parentElement.clientHeight;
    this.leftToRightOnUp = (Math.round(Math.random() * (1 - 0) + 0)) === 0 ? false : true;
    this.speed = 5;
    this.move();
  };


  /**
   * move - Select a random animation.
   *
   * @return {type}  Select a random animation.
   */
  move() {
    const ANIMATIONS: {} = [
      'leftToRight',
      'fromCenter'
    ];
    const index = random(1);
    this[ANIMATIONS[index]]();
  };


  /**
   * leftToRight - Move box left to right
   *
   * @return {type}  Moves the box.
   */
  leftToRight() {
    let elStyle = this.el.nativeElement.style;
    const top: number = parseInt(elStyle.top, 10);
    const left: number = parseInt(elStyle.left, 10);
    elStyle.left = `${elStyle.left ? left : 0}px`;
    elStyle.top = `${elStyle.top ? top : 250}px`;
    const minTop = 300;
    const maxTop = 50;
    window.requestAnimationFrame(() => {
      // Move left to right
      if (this.maxWidth > left) elStyle.left = `${left + this.speed}px`;
      // Move bottom to up
      if (top > maxTop && this.leftToRightOnUp) elStyle.top = `${parseInt(elStyle.top, 10) - this.speed}px`;
      // Select up to bottom
      else if (top <= maxTop && this.leftToRightOnUp) this.leftToRightOnUp = false;
      // Move up to bottom
      if (top < minTop && !this.leftToRightOnUp) elStyle.top = `${top + this.speed}px`;
      // Select bottom to top
      else if (top >= minTop && !this.leftToRightOnUp) this.leftToRightOnUp = true;
      // Stop this animation
      if (this.maxWidth <= left) {
        elStyle.left = 0;
        return this.move();
      }
      return this.leftToRight();
    });
  }


  /**
   * fromCenter - Move the box from the center.
   *
   * @return {type}  Move the box from the center to the user with circular movements.
   */
  fromCenter() {
    setTimeout(() => {
      return this.move();
    }, 1000);
  }
}
