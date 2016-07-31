import  {Injectable} from '@angular/core';
import  {Hero} from './Hero';
import  {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {

    // console.log("heroes",HEROES);

    getHeroes() {
        // return HEROES;
        return Promise.resolve(HEROES);
    }
}