import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { Hero } from './domain-model/hero';
import { HeroService } from './hero.service';

@Injectable()
export class HeroSearchService {
    constructor(private heroService: HeroService) {

    }


    public search(term: string): Observable<Hero[]> {
        let getHeroesPromise = this.heroService.getHeroesAsync(hero => hero.name.includes(term));

        return Observable.fromPromise(getHeroesPromise);
    }
}