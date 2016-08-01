import {Component} from '@angular/core';

import {HeroesComponent} from './Heroes/heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './Heroes/hero.service';

import {ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, HeroesComponent, DashboardComponent],
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  
  .heroes li.selected {
  background-color: #85b0c9 !important;
  color: white;
}
  
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
    providers: [HeroService],

    template: `

<h1>{{title}}</h1>

<h2>Component Router</h2>
<nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    <a routerLink="/hero/13" routerLinkActive="active">Specific Hero</a>
    <a routerLink="/movies" routerLinkActive="active">Movies</a>
    <a routerLink="/movies/about" routerLinkActive="active">About Movies</a>
    <a routerLink="/xxxx" routerLinkActive="active">Not found page</a>
</nav>

<!-- Routed views go here -->
<router-outlet></router-outlet>
   
`
})
export class AppComponent {
    title = 'Tour of Heroes';

    ngOnInit() {
        // this.getHeroes();
    }

}
