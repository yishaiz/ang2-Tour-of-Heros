"use strict";
var heroes_component_1 = require('./heroes.component');
var heroes_orderby_component_1 = require('./heroes.orderby.component');
var hero_detail_component_1 = require('./hero-detail.component');
exports.heroesRoutes = [
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'heroes-orderby', component: heroes_orderby_component_1.HeroesOrderByComponent },
    { path: 'hero/:id', component: hero_detail_component_1.HeroDetailComponent }
];
//# sourceMappingURL=heroes.routes.js.map