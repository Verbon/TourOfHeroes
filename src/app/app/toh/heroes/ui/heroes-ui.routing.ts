import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroesContentComponent } from './heroes-content/heroes-content.component';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent,
        children: [
            { path: '', redirectTo: 'content', pathMatch: 'full' },
            {
                path: 'content',
                component: HeroesContentComponent,
                children: [
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: 'dashboard', component: HeroesDashboardComponent },
                    { path: 'list', component: HeroesListComponent }
                ]
            },
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