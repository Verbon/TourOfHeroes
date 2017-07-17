import { NgModule } from '@angular/core';

import { SharedModule } from './../../../shared/shared.module';
import { TohSupportRoutingModule } from './toh.support.routing';

import { ContactSupportComponent } from './contact-support.component';


@NgModule({
    imports: [
        SharedModule,
        TohSupportRoutingModule
    ],
    declarations: [
        ContactSupportComponent
    ]
})
export class TohSupportModule {

}