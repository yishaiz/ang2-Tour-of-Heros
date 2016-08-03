import {RouterConfig} from '@angular/router';

import {HeroBirthdayComponent    } from './hero-birthday1.component';


export const pipesRoutes:RouterConfig = [
    {path: 'hero-birthday', component: HeroBirthdayComponent}
    // ,
    // {path: 'hero/:id', component: HeroDetailComponent}
];
