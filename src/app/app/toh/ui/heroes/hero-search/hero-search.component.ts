import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Hero } from "../../../core/domain-model/hero";
import { HeroSearchService } from "../../foundation/hero-search/hero-search.service";


@Component({
    selector: 'hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
    private searchTerms = new Subject<string>();


    public heroes: Observable<Hero[]>;


    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router) {

    }


    public ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)          // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()     // ignore if next search term is same as previous
            .switchMap(term => term     // switch to new observable each time the term changes
                // return the hero search service observable
                ? this.heroSearchService.search(term)
                // or the observable of emptry heroes if there was no search term
                : Observable.of<Hero[]>([])
            )
            .catch((error: any) => {
                console.log(error);

                return Observable.of<Hero[]>([]);
            });
     }

     public search(term: string): void {
         this.searchTerms.next(term);
     }

     public goToDetail(hero: Hero): void {
         let link = ['/detail', hero.id];

         this.router.navigate(link);
     }
}