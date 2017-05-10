import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    createRoute('dashboard', DashboardComponent),
    createRoute('detail/:id', HeroDetailComponent),
    createRoute('heroes', HeroesListComponent)
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HeroesRoutingModule {

}


function createRoute(path: string, component: any): Route {
    return {
        path: path,
        component: component
    };
}