import { NgModule } from '@angular/core';

import { SharedModule } from './../../../shared/shared.module';
import { TohHeroesRoutingModule } from './toh.heroes.routing';

import { HeroesContentComponent } from './heroes-content/heroes-content.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { HeroesComponent } from "./heroes.component";


@NgModule({
    imports: [
        SharedModule,
        TohHeroesRoutingModule
    ],
    declarations: [
        HeroesComponent,
        HeroesContentComponent,
        HeroesListComponent,
        HeroesDashboardComponent,
        HeroDetailComponent,
        HeroSearchComponent
    ]
})
export class TohHeroesModule {

}