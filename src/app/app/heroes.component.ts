import { Component, OnInit } from '@angular/core';

import { Hero } from './domain-model/hero';
import { HeroService } from './hero.service';


import '../assets/css/styles.css';


@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    public heroes: Hero[];

    public selectedHero: Hero;


    constructor(private heroService: HeroService) {

    }


    public async ngOnInit(): Promise<void> {
        this.heroes = await this.heroService.getHeroesAsync();
    }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}