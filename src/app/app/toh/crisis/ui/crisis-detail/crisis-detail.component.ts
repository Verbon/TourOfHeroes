import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { SlideInDownTransition } from './../../../../common/ui/transitions/slide-in-down.animation';
import { IDeactivationAware } from './../../../../common/ui/navigation/deactivation-aware';
import { DialogService } from './../../../../common/ui/dialogs/dialog.service';

import { Crisis } from './../../../data-access/domain-model/crisis';
import { CrisisService } from './../../foundation/crisis.service';


@Component({
    selector: '',
    templateUrl: './crisis-detail.component.html',
    styleUrls: ['./crisis-detail.component.css'],
    animations: [
        SlideInDownTransition
    ]
})
export class CrisisDetailComponent implements OnInit, IDeactivationAware {
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
        private readonly router: Router,
        private readonly dialogService: DialogService) {

    }


    public ngOnInit(): void {
        this.route.data
            .subscribe((data: { crisis: Crisis }) => {
                this.editName = data.crisis.name;
                this.crisis = data.crisis;
            });
    }

    public async canDeactivate(): Promise<boolean> {
        if(!this.crisis || this.crisis.name === this.editName) {
            return true;
        }

        return await this.dialogService.confirm('Discard changes?');
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