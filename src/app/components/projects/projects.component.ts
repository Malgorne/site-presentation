import { Component, OnInit } from '@angular/core';


import { GithubService } from '../../services/github/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  constructor(public github: GithubService) { }

  ngOnInit() {
    console.log('this.github', this.github);
    console.log('this.github.getRepos()', this.github.getRepos());
  }

}
