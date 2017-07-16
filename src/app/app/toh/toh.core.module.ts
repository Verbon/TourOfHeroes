import { NgModule } from '@angular/core';

import { CoreModule } from './../core/core.module';

import { TourOfHeroesUnitOfWorkFactory } from "./repositories/tour-of-heroes-unit-of-work-factory.service";
import { AuthenticationDemoService } from "./foundation/authentication/authentication-demo.service";
import { CrisisService } from "./foundation/crisis/crisis.service";
import { HeroesService } from "./foundation/heroes/heroes.service";
import { HeroSearchService } from "./foundation/heroes/hero-search/hero-search.service";


@NgModule({
    imports: [
        CoreModule
    ],
    providers: [
        TourOfHeroesUnitOfWorkFactory,

        AuthenticationDemoService,

        CrisisService,

        HeroesService,
        HeroSearchService,
    ]
})
export class TohCoreModule {

}