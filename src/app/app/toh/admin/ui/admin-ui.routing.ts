import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';


const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
                children: [
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: 'crises', component: ManageCrisesComponent },
                    { path: 'heroes', component: ManageHeroesComponent },
                    { path: 'dashboard', component: AdminDashboardComponent }
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
export class AdminRoutingModule {

}