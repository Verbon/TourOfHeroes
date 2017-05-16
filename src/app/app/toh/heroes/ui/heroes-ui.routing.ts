import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent,
        children: [
            { path: '', component: HeroesDashboardComponent },
            { path: 'list', component: HeroesListComponent },
            { path: ':id', component: HeroDetailComponent }
        ]
    }
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