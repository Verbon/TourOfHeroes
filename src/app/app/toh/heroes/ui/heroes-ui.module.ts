import { NgModule } from '@angular/core';

import { CommonUiModule } from './../../../common/ui/common-ui.module';
import { HeroesRoutingModule } from './heroes-ui.routing';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroesContentComponent } from './heroes-content/heroes-content.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';


@NgModule({
    imports: [
        CommonUiModule,
        HeroesRoutingModule
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
export class HeroesUiModule {

}