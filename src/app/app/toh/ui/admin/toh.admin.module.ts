import { NgModule } from '@angular/core';

import { SharedModule } from './../../../shared/shared.module';
import { TohAdminRoutingModule } from './toh.admin.routing';

import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';


@NgModule({
    imports: [
        SharedModule,
        TohAdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        ManageCrisesComponent,
        ManageHeroesComponent,
        LoginComponent
    ]
})
export class TohAdminModule {

}