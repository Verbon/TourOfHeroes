import { Injectable } from '@angular/core';

import { Hero } from './domain-model/hero';
import { Heroes } from './mock-heroes';

@Injectable()
export class HeroService {
    public getHeroes(): Hero[] {
        return Heroes;
    }
}