import { NgModule } from '@angular/core';

import { TohDataAccessModule } from './data-access/toh.data-access.module';
import { TohHeroesModule } from './heroes/toh.heroes.module';
import { TohCrisisCenterModule } from './crisis/toh.crisis-center.module';
import { TohAdminModule } from './admin/toh.admin.module';


@NgModule({
    exports: [
        TohDataAccessModule,
        TohHeroesModule,
        TohCrisisCenterModule,
        TohAdminModule
    ]
})
export class TohModule {

}