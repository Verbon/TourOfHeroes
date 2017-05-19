import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonUiServicesModule } from './common/ui/common-ui-services.module';
import { CommonFoundationServicesModule } from './common/foundation/common-foundation-services.module';
import { CommonUiModule } from './common/ui/common-ui.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ContactSupportComponent } from './support/contact-support.component';

import { TohModule } from './toh/toh.module';


@NgModule({
    imports: [
        CommonFoundationServicesModule,
        CommonUiServicesModule,
        CommonUiModule,
        BrowserModule,
        TohModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ContactSupportComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}