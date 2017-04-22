import { Component, OnInit } from '@angular/core';


import { Hero } from './domain-model/hero';
import { HeroService } from './hero.service';


@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    public heroes: Hero[] = [];


    constructor(private heroService: HeroService) {

    }


    public async ngOnInit(): Promise<void> {
        let heroes = await this.heroService.getHeroesAsync();
        this.heroes = heroes.slice(1, 5);
    }
}