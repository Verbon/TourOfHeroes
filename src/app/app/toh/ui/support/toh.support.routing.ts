import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactSupportComponent } from "./contact-support.component";


const routes: Routes = [
    { path: 'contact-support', component: ContactSupportComponent, outlet: 'support' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class TohSupportRoutingModule {

}
