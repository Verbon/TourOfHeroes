import { NgModule } from '@angular/core';

import { SharedModule } from './../../../shared/shared.module';
import { TohCrisisCenterRoutingModule } from "./toh.crisis-center.routing";

import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisListComponent } from './crises-list/crises-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisesCenterComponent } from "./crises-center.component";


@NgModule({
    imports: [
        SharedModule,
        TohCrisisCenterRoutingModule
    ],
    declarations: [
        CrisisListComponent,
        CrisesCenterComponent,
        CrisisCenterHomeComponent,
        CrisisDetailComponent
    ]
})
export class TohCrisisCenterModule {

}