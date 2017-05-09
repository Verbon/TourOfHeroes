import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

import { DashboardComponent } from "./ui/dashboard/dashboard.component";
import { HeroDetailComponent } from "./ui/hero-detail/hero-detail.component";
import { HeroesComponent } from "./ui/heroes/heroes.component";


const routes: Routes = [
    createRoute('dashboard', DashboardComponent),
    createRoute('detail/:id', HeroDetailComponent),
    createRoute('heroes', HeroesComponent)
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