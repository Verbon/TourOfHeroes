import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crises-list/crises-list.component';
import { CrisesCenterComponent } from './crises-center/crises-center.component';


const routes: Routes = [
    {
        path: 'crisis-center',
        component: CrisesCenterComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            {
                path: 'list',
                component: CrisisListComponent,
                children: [
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: CrisisCenterHomeComponent },
                    { path: ':id', component: CrisisDetailComponent }
                ]
            }
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
export class CrisisCenterRoutingModule {

}