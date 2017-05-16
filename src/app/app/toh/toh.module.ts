import { NgModule } from '@angular/core';

import { TohDataAccessModule } from './data-access/toh.data-access.module';
import { TohHeroesModule } from './heroes/toh.heroes.module';
import { TohCrisisCenterModule } from './crisis/toh.crisis-center.module';


@NgModule({
    exports: [
        TohDataAccessModule,
        TohHeroesModule,
        TohCrisisCenterModule
    ]
})
export class TohModule {

}