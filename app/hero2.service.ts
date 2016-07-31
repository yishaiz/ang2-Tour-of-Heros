import  {Injectable} from '@angular/core';
import  {Hero} from './Hero';
// import  {HEROES} from './mock-heroes';


//this comment cause nothing is being displayed !!!
/*
 export const heroes: Hero[] =
 [
 {id: 11, name: 'Mr. Nice'},
 {id: 12, name: 'Narco'},
 {id: 13, name: 'Bombasto'},
 {id: 14, name: 'Celeritas'},
 {id: 15, name: 'Magneta'},
 {id: 16, name: 'RubberMan'},
 {id: 17, name: 'Dynama'},
 {id: 18, name: 'Dr IQ'},
 {id: 19, name: 'Magma'},
 {id: 20, name: 'Tornado'}
 ];
 */

@Injectable()
export class Hero2Service {

    HEROES1: Hero[] =
        [
            {id: 11, name: 'Mr. Nice'},
            {id: 12, name: 'Narco'},
            {id: 13, name: 'Bombasto'},
            {id: 14, name: 'Celeritas'},
            {id: 15, name: 'Magneta'},
            {id: 16, name: 'RubberMan'},
            {id: 17, name: 'Dynama'},
            {id: 18, name: 'Dr IQ'},
            {id: 19, name: 'Magma'},
            {id: 20, name: 'Tornado'}
        ];

    getHeroes() {
        console.log("heroes",this.HEROES1);
        return this.HEROES1;
    }
}