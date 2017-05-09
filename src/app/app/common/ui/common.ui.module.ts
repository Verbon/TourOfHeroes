import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { KebabPipe } from './kebab.pipe';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        KebabPipe
    ],
    exports: [
        CommonModule,
        FormsModule,
        KebabPipe
    ]
})
export class SharedModule {

}