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

  studies: object = {
    title: {
      content: 'Formation',
      tag: 'h2'
    },
    list: [{
      content: '2016: IFOCOP, Développeur-Intégrateur Web FullStack JavaScript',
      events: {
        click: () => this.selectBlocked('ifocopBlock'),
        mouseenter: () => this.show('ifocopBlock')
      },
      classes: ['bold'],
    }, {
      content: '2015: Openclassrooms, Certificats Html et Css, Git/GitHub, Php-MySql, Symfony2',
      events: {
        click: () => this.selectBlocked('openclassroomsBlock'),
        mouseenter: () => this.show('openclassroomsBlock')
      },
      classes: ['bold']
    }, {
      content: '2006: Lycée St Denis, BTS Banque, option marché des particulier'
    }, {
      content: '2003: Lycée Madeleine Michelis, Baccalauréat Littéraire, spécialisation Allemand'
    }]
  };

  professionalCourse: object = {
    title: {
      content: 'Parcours professionnel',
      tag: 'h2'
    },
    list: [{
      content: 'Juin 2017 à ce jour: Développeur FullStack - Abbeal, Paris',
      events: {
        click: () => this.selectBlocked('abbealBlock'),
        mouseenter: () => this.show('abbealBlock')
      },
      classes: ['bold']
    }, {
      content: 'Janvier 2017 à Juin 2017: Développeur FullStack – Umanlife, Paris',
      events: {
        click: () => this.selectBlocked('umanlifeBlock'),
        mouseenter: () => this.show('umanlifeBlock')
      },
      classes: ['bold']
    }, {
      content: '2016 à décembre 2017: Développeur FullStack – NilObstat, Amiens',
      events: {
        click: () => this.selectBlocked('nilobstatBlock'),
        mouseenter: () => this.show('nilobstatBlock')
      },
      classes: ['bold']
    }, {
      content: '2009 à 2016: Conseiller clientèle - BNP Paribas, Saint Germain en Laye'
    }, {
      content: '2007 à 2008: Accueil - Crédit Mutuel, Paris Montparnasse'
    }]
  };

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

  show(item: string) {
    if(!this.blockedItem.length) this.selectedItem = item;
  }

  selectBlocked(item: string) {
    if(this.selectedItem === item && this.blockedItem.length) this.count++;
    if(this.count === 1) return this.reset();
    this.selectedItem = item;
    this.blockedItem = item;
  };

  reset() {
    this.count = 0;
    this.blockedItem = '';
  }

  ngOnInit() {
  }
}
