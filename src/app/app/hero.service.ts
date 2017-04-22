import { Injectable } from '@angular/core';

import { Hero } from './domain-model/hero';
import { Heroes } from './mock-heroes';

@Injectable()
export class HeroService {
    public async getHeroAsync(id: number): Promise<Hero> {
        let heroes = await this.getHeroesAsync();

        return heroes.find(hero => hero.id === id);
    }

    public getHeroesAsync(): Promise<Hero[]> {
        return Promise.resolve(Heroes);
    }
}