import { NgModule } from '@angular/core';

import { CrisisCenterServicesModule } from './foundation/crisis-center-services.module';
import { CrisisCenterUiModule } from './ui/crisis-center-ui.module';


@NgModule({
    exports: [
        CrisisCenterServicesModule,
        CrisisCenterUiModule
    ]
})
export class TohCrisisCenterModule {

}