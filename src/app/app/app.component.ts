import { Component, OnInit } from '@angular/core';

import { Hero } from './domain-model/hero';
import { HeroService } from './hero.service';


import '../assets/css/styles.css';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    public title: string;
    public heroes: Hero[];

    public selectedHero: Hero;


    constructor(private heroService: HeroService) {
        this.title = 'Tour of Heroes';        
    }


    public ngOnInit(): void {
        this.heroes = this.heroService.getHeroes();
    }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}