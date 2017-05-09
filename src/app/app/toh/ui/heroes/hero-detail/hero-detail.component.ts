import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Hero } from "../../../core/domain-model/hero";
import { HeroesService } from "../../foundation/heroes/heroes.service";


@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    public hero: Hero;


    constructor(
        private heroService: HeroesService,
        private route: ActivatedRoute,
        private location: Location
    ) {


    }


    public ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHeroAsync(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    public goBack(): void {
        this.location.back();
    }

    public async save(): Promise<void> {
        await this.heroService.updateAsync(this.hero);
        this.goBack();
    }
}