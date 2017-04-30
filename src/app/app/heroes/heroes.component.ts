import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../domain-model/hero';
import { HeroService } from './hero.service';


import '../../assets/css/styles.css';


@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    public heroes: Hero[];

    public selectedHero: Hero;

    public newHeroName: string;


    constructor(
        private heroService: HeroService,
        private router: Router) {

    }


    public async ngOnInit(): Promise<void> {
        await this.refreshAsync();
    }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    public goToDetails(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    public async add(): Promise<void> {
        let name = this.newHeroName.trim();
        if(!name) {
            return;
        }

        await this.heroService.createAsync(name);
        this.selectedHero = null;
        this.newHeroName = '';

        await this.refreshAsync();
    }

    public async delete(hero: Hero): Promise<void> {
        await this.heroService.deleteAsync(hero.id);
        if(this.selectedHero === hero) {
            this.selectedHero = null;
        }

        await this.refreshAsync();
    }


    private async refreshAsync(): Promise<void> {
        this.heroes = await this.heroService.getHeroesAsync();
    }
}