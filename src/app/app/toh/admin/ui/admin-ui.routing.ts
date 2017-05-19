import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { AuthenticationGuard } from './../../../common/foundation/authentication/authentication.guard';


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
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {

}