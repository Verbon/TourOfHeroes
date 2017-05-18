import { NgModule } from '@angular/core';

import { AuthenticationGuard } from './authentication/authentication.guard';


@NgModule({
    providers: [
        AuthenticationGuard
    ]
})
export class CommonServicesModule {

}