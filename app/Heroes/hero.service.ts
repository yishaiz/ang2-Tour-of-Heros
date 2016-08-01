import  {Injectable} from '@angular/core';
import  {Hero} from './Hero';
import  {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {

    getHeroes() {
        // return HEROES;
        return Promise.resolve(HEROES);
    }

    getHero(id : number) {
        return Promise.resolve(
            HEROES.find(hero => hero.id == id)
        );
    }

    getHeroesSlowly() {
      // return Promise.resolve(HEROES);

      return new Promise<Hero[]>(
          resolve => setTimeout( () => resolve(HEROES) , 2000)
      );
    }

}