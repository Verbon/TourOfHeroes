import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from "./authentication.guard";
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';


const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthenticationGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthenticationGuard],
                children: [
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: 'crises', component: ManageCrisesComponent },
                    { path: 'heroes', component: ManageHeroesComponent },
                    { path: 'dashboard', component: AdminDashboardComponent }
                ]
            }
        ]
    },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [
        AuthenticationGuard
    ],
    exports: [
        RouterModule
    ]
})
export class TohAdminRoutingModule {

}