import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { KebabPipe } from './string-transforms/kebab.pipe';


@NgModule({
    declarations: [
        KebabPipe
    ],
    exports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        KebabPipe
    ]
})
export class CommonUiModule {

}