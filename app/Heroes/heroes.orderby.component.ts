import {Component, OnInit} from '@angular/core';
import {Hero} from './Hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

import {OrderByPipe} from '../Pipes/hero.orderby.name.pipe';

import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    pipes: [OrderByPipe],
    directives: [HeroDetailComponent],
    providers: [HeroService],
    styleUrls: ['heroes.style.css'],
    template: `
    
<h2>My Heroes - using orderBy</h2>

<div>
<h3>Order by (name, !name, id, !id)</h3>
    <input type="text" [(ngModel)] ="orderbyField" />
</div>



<ul class="heroes">
    <!--<li *ngFor="let hero of heroes | orderby: '!name'; trackBy:hero?.id"-->
    <!--<li *ngFor="let hero of heroes | orderby: 'name'; trackBy:hero?.id"-->
    
    <li *ngFor="let hero of heroes | orderby: orderbyField; trackBy:hero?.id"
    
        (click)="onSelect(hero)">
         
        <span class="badge">{{hero.id}}</span>{{hero.name}}
    </li>        
</ul>
 

`
})
export class HeroesOrderByComponent implements OnInit {

    heroes: Hero[];
    orderbyField: string;

    constructor(private router: Router, private heroesService: HeroService) {

    }

    ngOnInit() {
        this.orderbyField = 'name';

        this.getHeroes();
    }

    getHeroes() {
        this.heroesService.getHeroes().then(
            heroes => this.heroes = heroes
        );
    }

    onSelect(hero: Hero) {
        console.log(hero);

        this.router.navigate(['/hero', hero.id]);
    }

}
