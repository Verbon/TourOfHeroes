import { Component } from '@angular/core';
import { Hero } from './domain-model/hero';


import '../assets/css/styles.css';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title: string;
    public heroes: Hero[];

    public selectedHero: Hero;


    constructor() {
        this.title = 'Tour of Heroes';
        this.heroes = [
            new Hero(11, 'Mr. Nice'),
            new Hero(12, 'Narco'),
            new Hero(13, 'Bombasto'),
            new Hero(14, 'Celeritas'),
            new Hero(15, 'Magneta'),
            new Hero(16, 'RubberMan'),
            new Hero(17, 'Dynama'),
            new Hero(18, 'Dr IQ'),
            new Hero(19, 'Magma'),
            new Hero(20, 'Tornado')
        ];
    }


    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}