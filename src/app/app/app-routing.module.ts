import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

import { HeroDetailComponent } from './heroes/details/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    createRoute('dashboard', DashboardComponent),
    createRoute('detail/:id', HeroDetailComponent),
    createRoute('heroes', HeroesComponent)
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

function createRoute(path: string, component: any): Route {
    return {
        path: path,
        component: component
    };
}