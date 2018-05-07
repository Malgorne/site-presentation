import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable()
export class GithubService {
  constructor(private http: HttpClient) { }
  getRepos() {
    console.log('environment', environment);
    console.log('do something');
  }
}
