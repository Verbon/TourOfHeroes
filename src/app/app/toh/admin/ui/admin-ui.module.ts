import { NgModule } from '@angular/core';

import { CommonUiModule } from './../../../common/ui/common-ui.module';
import { AdminRoutingModule } from './admin-ui.routing';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';


@NgModule({
    imports: [
        CommonUiModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        ManageCrisesComponent,
        ManageHeroesComponent
    ]
})
export class AdminUiModule {

}