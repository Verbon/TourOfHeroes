import { AuthenticationDemoService } from './authentication/authentication-demo.service';
import { NgModule } from '@angular/core';

import { AuthenticationGuard } from './authentication/authentication.guard';


@NgModule({
    providers: [
        AuthenticationGuard,
        AuthenticationDemoService
    ]
})
export class CommonServicesModule {

}