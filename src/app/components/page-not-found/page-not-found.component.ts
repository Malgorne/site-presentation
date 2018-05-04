import { Component, OnInit } from '@angular/core';

// The component is realy light, so we don't use a .html file.
@Component({
  selector: 'app-page-not-found',
  template: `<div id= "not-found">
    <h2>404 - page not found</h2>
    <p>Woops, you are lost in a temporal space fault</p>
    <div id="tardisContent">
      <div id="tardis" appMoveBox >
        <a href="/" title="follow me to go back to the reality!"><img src="../../../assets/img/404/tardis.gif" alt="benj" class="circle"></a>
      </div>
    </div>
  </div>`,
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent implements OnInit {
  constructor() { }

  ngOnInit() {};

}
