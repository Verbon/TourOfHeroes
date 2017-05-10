import { NgModule } from '@angular/core';

import { HeroesService } from './heroes.service';
import { HeroSearchService } from './hero-search/hero-search.service';


@NgModule({
    providers: [
        HeroesService,
        HeroSearchService
    ]
})
export class HeroesServicesModule {

}