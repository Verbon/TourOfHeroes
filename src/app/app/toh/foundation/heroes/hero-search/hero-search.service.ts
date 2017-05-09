import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';


import { Hero } from "../../../core/domain-model/hero";
import { HeroesService } from "../heroes/heroes.service";


@Injectable()
export class HeroSearchService {
    constructor(
        private readonly heroService: HeroesService) {

    }


    public search(term: string): Observable<Hero[]> {
        let getHeroesPromise = this.heroService.getHeroesAsync(hero => hero.name.toLowerCase().includes(term.toLowerCase()));

        return Observable.fromPromise(getHeroesPromise);
    }
}