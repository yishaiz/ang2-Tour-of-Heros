import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import { PageNotFoundComponent} from './page-not-found.component';

import {provideRouter, RouterConfig} from '@angular/router';

// import { ROUTER_DIRECTIVES} from '@angular/router';

const routes:RouterConfig = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'hero/:id', component: HeroDetailComponent},
    {path: '**', component: PageNotFoundComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];