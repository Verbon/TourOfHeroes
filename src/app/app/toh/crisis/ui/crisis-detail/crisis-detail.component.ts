import { CrisisService } from './../../foundation/crisis.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

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


    public constructor(
        private readonly crisisService: CrisisService,
        private readonly route: ActivatedRoute,
        private readonly router: Router) {

    }


    public ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.crisisService.getCrisisAsync(+params['id']))
            .subscribe(crisis => {
                this.crisis = crisis
                this.editName = crisis.name;
            });
    }

    public cancel(): void {
        this.goToCrises();
    }

    public async save(): Promise<void> {
        this.crisis.name = this.editName;
        await this.crisisService.updateAsync(this.crisis);
        this.goToCrises();
    }

    public goToCrises(): void {
        this.router.navigate(['../home'], { relativeTo: this.route });
    }
}