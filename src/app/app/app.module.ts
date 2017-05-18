import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonUiModule } from './common/ui/common-ui.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ContactSupportComponent } from './support/contact-support.component';

import { TohModule } from './toh/toh.module';


@NgModule({
    imports: [
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