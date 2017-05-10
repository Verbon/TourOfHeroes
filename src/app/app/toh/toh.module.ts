import { NgModule } from '@angular/core';

import { TohDataAccessModule } from './data-access/toh.data-access.module';
import { TohHeroesModule } from './heroes/toh.heroes.module';


@NgModule({
    exports: [
        TohDataAccessModule,
        TohHeroesModule
    ]
})
export class TohModule {

}