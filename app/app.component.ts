import {Component} from '@angular/core';
import {Hero} from './Hero';

@Component({
    selector: 'my-app',
    template: `
    
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div>
        <label>id: </label>{{hero.id}}</div>
        <div>
        <label>name: </label>
        <!--{{hero.name}}-->
        <!--<input value="{{hero.name}}"  placeholder="name"/>-->
        <input [(ngModel)]="hero.name"  placeholder="name"/>
    </div>

<!--<h1>{{title}}</h1>-->
<!--<h2>{{hero.name}} details!</h2>-->
`
})
export class AppComponent {
    title = 'Tour of Heroes';

    /*;
     hero = 'Windstorm';*/

    hero:Hero = {
        id: 1,
        name: 'Windstorm'
    };

}
