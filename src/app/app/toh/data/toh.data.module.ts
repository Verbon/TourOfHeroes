import { NgModule } from '@angular/core';

import { TourOfHeroesUnitOfWorkFactory } from './repositories/tour-of-heroes-unit-of-work-factory.service';


@NgModule({
    providers: [
        TourOfHeroesUnitOfWorkFactory
    ]
})
export class TohDataModule {

}