import { Directive, ElementRef } from '@angular/core';
import { random } from 'lodash';

@Directive({
  selector: '[appMoveBox]'
})

export class MoveBoxDirective {
  constructor(el: ElementRef) {
    this.el = el;
  }
  el;
  maxWidth: number;
  maxHeight: number;
  ngOnInit() {
    this.maxWidth = this.el.nativeElement.parentElement.clientWidth;
    this.maxHeight = this.el.nativeElement.parentElement.clientHeight;
    this.move();
  };

  /**
   * move - Select a random animation.
   *
   * @return {Function}  Select a random animation.
   */
  move() {
    const ANIMATIONS: string[] = [
      'leftToRight',
      'fromCenter'
    ];
    const index = random(1);
    setTimeout(() => this[ANIMATIONS[index]](), 2000);
  };

  /**
   * leftToRight - Move box left to right
   *
   * @return {Void}  Moves the box.
   */
  leftToRight() {
    let elStyle = this.el.nativeElement.style;
    const speed: number = 5;
    elStyle.top = '250px';
    elStyle.left = '0px';
    const minTop = 300;
    const maxTop = 50;
    let myReq;
    let leftToRightOnUp = (Math.round(Math.random() * (1 - 0) + 0)) === 0 ? false : true;
    const animation =  () => {
      const top = parseInt(elStyle.top, 10);
      const left = parseInt(elStyle.left, 10);
      // Move left to right
      if (this.maxWidth > left) elStyle.left = `${parseInt(elStyle.left, 10) + speed}px`;
      // Move bottom to up
      if (top > maxTop && leftToRightOnUp) elStyle.top = `${parseInt(elStyle.top, 10) - speed}px`;
      // Select up to bottom
      else if (top <= maxTop && leftToRightOnUp) leftToRightOnUp = false;
      // Move up to bottom
      if (top < minTop && !leftToRightOnUp) elStyle.top = `${parseInt(elStyle.top, 10) + speed}px`;
      // Select bottom to top
      else if (top >= minTop && !leftToRightOnUp) leftToRightOnUp = true;
      // Stop this animation
      if (this.maxWidth <= left) {
        elStyle.left = '-100px';
        cancelAnimationFrame(myReq);
        return this.move();
      }
      myReq = requestAnimationFrame(animation);
    };
    myReq = requestAnimationFrame(animation);
  }

  /**
   * fromCenter - Move the box from the center.
   *
   * @return {Void}  Move the box from the center to the user with circular movements.
   */
  fromCenter() {
    let elStyle = this.el.nativeElement.style;
    elStyle.top = '200px';
    elStyle.left = '500px';
    let scale = 0.01;
    let rotate = 0;
    let myReq;
    const animation = () => {
      elStyle.transform = `rotateZ(${rotate}deg) translate(${rotate/1.5}px) scaleX(${scale}) scaleY(${scale})`;
      if (scale < 3.2) {
        scale += 0.01;
        rotate += 2;
      } else {
        // End of animation, we reset styles, infos & animation.
        elStyle.transform = 'rotateZ(0deg) translate(0px) scaleX(1) scaleY(1)';
        elStyle.left = '-100px';
        scale = 0;
        rotate = 0;
        cancelAnimationFrame(myReq);
        return this.move();
      };
      myReq = requestAnimationFrame(animation);
    };
    myReq = requestAnimationFrame(animation);
  }
}
