import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public title: string;


    constructor() {
        this.title = 'Tour of Heroes';
    }
}