import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass']
})
export class ResumeComponent implements OnInit {
  constructor() { }
  imgFolder: string = '../../../assets/img/resume';
  count: number = 0;
  blockedItem: string = '';
  selectedItem: string = 'abbealBlock';
  listImgSkills: object[] = [
    { src: `${this.imgFolder}/babel.png`, alt: 'babel' },
    { src: `${this.imgFolder}/angular.png`, alt: 'angular' },
    { src: `${this.imgFolder}/sass.svg`, alt: 'sass' },
    { src: `${this.imgFolder}/bootstrap.svg`, alt: 'bootstrap' },
    { src: `${this.imgFolder}/es6.png`, alt: 'es6' },
    { src: `${this.imgFolder}/gulp.png`, alt: 'gulp' },
    { src: `${this.imgFolder}/html-css.png`, alt: 'html-css' },
    { src: `${this.imgFolder}/linux.svg`, alt: 'linux' },
    { src: `${this.imgFolder}/mac.svg`, alt: 'mac' },
    { src: `${this.imgFolder}/windows.jpg`, alt: 'windows' },
    { src: `${this.imgFolder}/sinon.png`, alt: 'sinon' },
    { src: `${this.imgFolder}/node.png`, alt: 'node' },
    { src: `${this.imgFolder}/typescript.png`, alt: 'typescript' },
    { src: `${this.imgFolder}/less.png`, alt: 'less' },
    { src: `${this.imgFolder}/github.png`, alt: 'github' },
    { src: `${this.imgFolder}/bitbucket.png`, alt: 'bitbucket' }
  ];

  selectItem(item: string) {
    this.selectedItem = item;
  }

  selectBlocked(item: string) {
    if(this.selectedItem === item && this.blockedItem.length) this.count++;
    if(this.count === 1) return this.reset();
    this.selectItem(item);
    this.blockedItem = item;
  };

  reset() {
    this.count = 0;
    this.blockedItem = '';
  }

  show(item: string) {
    if(!this.blockedItem.length) this.selectItem(item);
  }
  ngOnInit() {
  }
}
