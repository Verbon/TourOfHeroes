import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import '../../../../../assets/css/styles.css';

import { Hero } from "../../../domain-model/hero";
import { HeroesService } from "../../../foundation/heroes/heroes.service";


@Component({
    templateUrl: './heroes-list.component.html',
    styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
    public heroes: Hero[];

    public selectedHero: Hero;

    public newHeroName: string;


    public constructor(
        private readonly heroService: HeroesService,
        private readonly route: ActivatedRoute,
        private readonly router: Router) {

    }


    public async ngOnInit(): Promise<void> {
        await this.refreshAsync();

        this.selectedHero = this.heroes.find(h => h.id === +this.route.snapshot.params['id']);
    }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.goToDetails();
    }

    public goToDetails(): void {
        this.router.navigate(['../../', this.selectedHero.id], { relativeTo: this.route });
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