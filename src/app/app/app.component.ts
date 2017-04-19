import { Component } from '@angular/core';
import Hero from './domain-model/hero';


import '../assets/css/styles.css';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title: string;
    public hero: Hero;


    constructor() {
        this.title = 'Tour of Heroes';
        this.hero = new Hero(1, 'Windstorm');
    }
 }