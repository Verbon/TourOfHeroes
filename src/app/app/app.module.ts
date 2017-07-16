import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ContactSupportComponent } from './support/contact-support.component';

import { TohModule } from './toh/toh.module';


@NgModule({
    imports: [
        SharedModule,
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