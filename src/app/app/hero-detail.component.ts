import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './domain-model/hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    @Input()
    public hero: Hero;


    constructor(
        private heroService: HeroService,
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
}