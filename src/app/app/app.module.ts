import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './heroes/details/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { HeroService } from './heroes/hero.service';
import { HeroSearchComponent } from './heroes/search/hero-search.component';
import { TourOfHeroesUnitOfWorkFactory } from './repositories/tour-of-heroes-unit-of-work-factory';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService,
        TourOfHeroesUnitOfWorkFactory
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}