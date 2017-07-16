import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { SlideInDownTransition } from "../../../../common/animations/slide-in-down.animation";

import { Hero } from "../../../domain-model/hero";
import { HeroesService } from "../../../foundation/heroes/heroes.service";


@Component({
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
    animations: [
        SlideInDownTransition
    ]
})
export class HeroDetailComponent implements OnInit {
    @HostBinding('@slide-in-down-transition')
    public routeAnimation = true;
    @HostBinding('style.display')
    public display = 'block';
    @HostBinding('style.position')
    public position = 'absolute';


    public hero: Hero;


    public constructor(
        private readonly heroService: HeroesService,
        private readonly route: ActivatedRoute,
        private readonly router: Router) {

    }


    public ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHeroAsync(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    public goBack(): void {
        let selectedHeroId = this.hero ? this.hero.id : null;
        this.router.navigate(['../content/list', { id: selectedHeroId }], { relativeTo: this.route });
    }

    public async save(): Promise<void> {
        await this.heroService.updateAsync(this.hero);
        this.goBack();
    }
}