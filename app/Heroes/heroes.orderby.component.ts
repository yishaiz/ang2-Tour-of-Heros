import {Component, OnInit} from '@angular/core';
import {Hero} from './Hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    providers: [HeroService],
    styleUrls: ['heroes.style.css'],
    // styleUrls: ['/app/Heroes/heros.style.css'],
    template: `
    
<h2>My Heroes</h2>
<ul class="heroes">
    <li *ngFor="let hero of heroes; trackBy:hero?.id"
        (click)="onSelect(hero)">
         
        <span class="badge">{{hero.id}}</span>{{hero.name}}
    </li>        
</ul>
 

`
})
export class HeroesOrderByComponent implements OnInit {

    heroes:Hero[];

    constructor(private router:Router, private heroesService:HeroService) {

    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroesService.getHeroes().then(
            heroes => this.heroes = heroes
        );
    }

    onSelect(hero:Hero) {
        console.log(hero);

        this.router.navigate(['/hero', hero.id]);
    }

}
