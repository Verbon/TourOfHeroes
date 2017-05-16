import { NgModule } from '@angular/core';

import { CommonUiModule } from './../../../common/ui/common.ui.module';
import { CrisisCenterRoutingModule } from './crisis-center-ui.routing';

import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisListComponent } from './crises-list/crises-list.component';
import { CrisesCenterComponent } from './crises-center/crises-center.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';


@NgModule({
    imports: [
        CommonUiModule,
        CrisisCenterRoutingModule
    ],
    declarations: [
        CrisisListComponent,
        CrisesCenterComponent,
        CrisisCenterHomeComponent,
        CrisisDetailComponent
    ]
})
export class CrisisCenterUiModule {

}