import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { HeroesRoutingModule } from "./heroes.routing";
import { HeroesService } from "./foundation/heroes/heroes.service";
import { HeroSearchService } from "./foundation/hero-search/hero-search.service";
import { HeroesComponent } from "./ui/heroes/heroes.component";
import { DashboardComponent } from "./ui/dashboard/dashboard.component";
import { HeroDetailComponent } from "./ui/hero-detail/hero-detail.component";
import { HeroSearchComponent } from "./ui/hero-search/hero-search.component";


@NgModule({
    imports: [
        SharedModule,
        HeroesRoutingModule
    ],
    declarations: [
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroesService,
        HeroSearchService
    ]
})
export class HeroesModule {

}