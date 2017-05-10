import { NgModule } from '@angular/core';

import { HeroesServicesModule } from './foundation/heroes-services.module';
import { HeroesUiModule } from './ui/heroes-ui.module';


@NgModule({
    exports: [
        HeroesServicesModule,
        HeroesUiModule
    ]
})
export class TohHeroesModule {

}