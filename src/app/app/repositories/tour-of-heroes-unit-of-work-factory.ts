import { TourOfHeroesUnitOfWork } from './tour-of-heroes-unit-of-work';


export class TourOfHeroesUnitOfWorkFactory { 
    public create(): TourOfHeroesUnitOfWork {
        return new TourOfHeroesUnitOfWork();
    }
}