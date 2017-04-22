import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            createRoute('detail/:id', HeroDetailComponent),
            createRoute('heroes', HeroesComponent),
            createRoute('dashboard', DashboardComponent),
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }
        ],
        {
            useHash: true
        })
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}

function createRoute(path: string, component: any): Route {
    return {
        path: path,
        component: component
    };
}