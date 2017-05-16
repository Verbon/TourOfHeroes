import { Component, OnInit } from '@angular/core';

import { Hero } from './../../../data-access/domain-model/hero';
import { HeroesService } from './../../foundation/heroes.service';


@Component({
    templateUrl: './heroes-dashboard.component.html',
    styleUrls: ['./heroes-dashboard.component.css']
})
export class HeroesDashboardComponent implements OnInit {
    public heroes: Hero[] = [];


    constructor(
        private readonly heroService: HeroesService) {

    }


    public async ngOnInit(): Promise<void> {
        let heroes = await this.heroService.getHeroesAsync();
        this.heroes = heroes.slice(1, 5);
    }
}