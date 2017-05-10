import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { KebabPipe } from './string-transforms/kebab.pipe';


@NgModule({
    declarations: [
        KebabPipe
    ],
    exports: [
        CommonModule,
        FormsModule,
        KebabPipe
    ]
})
export class CommonUiModule {

}