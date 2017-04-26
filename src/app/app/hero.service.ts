import { Injectable } from '@angular/core';

import { Hero } from './domain-model/hero';
import { Heroes } from './mock-heroes';

@Injectable()
export class HeroService {
    public async getHeroAsync(id: number): Promise<Hero> {
        let heroes = await this.getHeroesAsync();

        return heroes.find(hero => hero.id === id);
    }

    public async getHeroesAsync(predicate?: (hero: Hero) => boolean): Promise<Hero[]> {
        let heroes = await Promise.resolve(Heroes);
        if(predicate) {
            heroes = heroes.filter(predicate);
        }

        return heroes;
    }

    public create(name: string): Promise<Hero> {
        let heroesIds = Heroes.map(h => h.id);
        let maxId = Math.max(...heroesIds);
        let hero = new Hero(++maxId, name);

        Heroes.push(hero);

        return Promise.resolve(hero);
    }

    public delete(id: number): Promise<void> {
        for(let i = 0; i < Heroes.length; ) {
            if(Heroes[i].id === id) {
                Heroes.splice(i, 1);
            }
            else {
                i++;
            }
        }

        return Promise.resolve();
    }
}