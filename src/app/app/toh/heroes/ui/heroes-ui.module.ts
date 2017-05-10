import { NgModule } from '@angular/core';

import { CommonUiModule } from './../../../common/ui/common.ui.module';
import { HeroesRoutingModule } from './heroes-ui.routing';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';


@NgModule({
    imports: [
        CommonUiModule,
        HeroesRoutingModule
    ],
    declarations: [
        HeroesListComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroSearchComponent
    ]
})
export class HeroesUiModule {

}