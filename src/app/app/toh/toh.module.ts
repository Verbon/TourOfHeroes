import { NgModule } from '@angular/core';

import { TohCoreModule } from './toh.core.module';

import { TohHeroesModule } from './ui/heroes/toh.heroes.module';
import { TohCrisisCenterModule } from './ui/crisis/toh.crisis-center.module';
import { TohAdminModule } from './ui/admin/toh.admin.module';
import { TohSupportModule } from './ui/support/toh.support.module';


@NgModule({
    exports: [
        TohCoreModule,

        TohHeroesModule,
        TohCrisisCenterModule,
        TohAdminModule,
        TohSupportModule
    ]
})
export class TohModule {

}