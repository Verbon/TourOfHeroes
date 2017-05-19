import { NgModule } from '@angular/core';

import { DialogService } from './dialogs/dialog.service';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { CanDeactivateGuard } from './navigation/can-deactivate.guard';


@NgModule({
    providers: [
        AuthenticationGuard,
        CanDeactivateGuard,
        DialogService
    ]
})
export class CommonUiServicesModule {

}