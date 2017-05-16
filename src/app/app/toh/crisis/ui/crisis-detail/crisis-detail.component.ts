import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SlideInDownTransition } from './../../../../common/ui/transitions/slide-in-down.animation';

import { Crisis } from './../../../data-access/domain-model/crisis';


@Component({
    selector: '',
    templateUrl: './crisis-detail.component.html',
    styleUrls: ['./crisis-detail.component.css'],
    animations: [
        SlideInDownTransition
    ]
})
export class CrisisDetailComponent implements OnInit {
    @HostBinding('@slide-in-down-transition')
    public routeAnimation = true;
    @HostBinding('style.display')
    public display = 'block';
    @HostBinding('style.position')
    public position = 'absolute';


    public crisis: Crisis;
    public editName: string;


    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router) {

    }


    public ngOnInit(): void {
        this.route.data
            .subscribe((data: { crisis: Crisis }) => {
                this.editName = data.crisis.name;
                this.crisis = data.crisis;
            });
    }

    public cancel(): void {
        this.goToCrises();
    }

    public save(): void {
        this.crisis.name = this.editName;
        this.goToCrises();
    }

    public goToCrises(): void {
        let crisisId = this.crisis ? this.crisis.id : null;

        this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route });
    }
}