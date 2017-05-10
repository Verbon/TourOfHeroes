import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import '../../../../../assets/css/styles.css';

import { Hero } from './../../../data-access/domain-model/hero';
import { HeroesService } from './../../foundation/heroes.service';


@Component({
    selector: 'my-heroes',
    templateUrl: './heroes-list.component.html',
    styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
    public heroes: Hero[];

    public selectedHero: Hero;

    public newHeroName: string;


    constructor(
        private readonly heroService: HeroesService,
        private readonly router: Router) {

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