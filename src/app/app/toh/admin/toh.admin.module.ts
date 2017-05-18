import { NgModule } from '@angular/core';

import { AdminServicesModule } from './foundation/admin-services.module';
import { AdminUiModule } from './ui/admin-ui.module';


@NgModule({
    exports: [
        AdminServicesModule,
        AdminUiModule
    ]
})
export class TohAdminModule {

}