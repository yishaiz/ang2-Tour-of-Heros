import {RouterConfig} from '@angular/router';

import {HeroesComponent} from './heroes.component';
import { HeroesOrderByComponent} from './heroes.orderby.component';
import {HeroDetailComponent} from './hero-detail.component';

export const heroesRoutes:RouterConfig = [
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroes-orderby', component: HeroesOrderByComponent},
    {path: 'hero/:id', component: HeroDetailComponent}
];
