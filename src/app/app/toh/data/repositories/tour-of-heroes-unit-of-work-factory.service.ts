import { Injectable } from '@angular/core';

import { TourOfHeroesUnitOfWork } from './tour-of-heroes-unit-of-work';


@Injectable()
export class TourOfHeroesUnitOfWorkFactory { 
    public create(): TourOfHeroesUnitOfWork {
        return new TourOfHeroesUnitOfWork();
    }
}