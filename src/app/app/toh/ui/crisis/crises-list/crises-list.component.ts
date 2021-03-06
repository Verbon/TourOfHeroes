import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import * as _ from 'lodash';

import { EventHandler } from './../../../../common/events/event-handler';

import { Crisis } from "../../../domain-model/crisis";
import { CrisisService } from "../../../foundation/crisis/crisis.service";
import { CrisisUpdatedEventArgs } from "../../../foundation/crisis/crisis-updated-event-args";


@Component({
    templateUrl: './crises-list.component.html',
    styleUrls: ['./crises-list.component.css']
})
export class CrisisListComponent implements OnInit, OnDestroy {
    public crises: Crisis[];
    public selectedId: number;


    public constructor(
        private readonly crisisService: CrisisService,
        private readonly route: ActivatedRoute,
        private readonly router: Router) {

    }


    public async ngOnInit(): Promise<void> {
        this.crisisService.crisisUpdated.subscribe(this.onCrisisUpdated);

        this.crises = await this.crisisService.getCrisesAsync();
    }

    public ngOnDestroy(): void {
        this.crisisService.crisisUpdated.unsubscribe(this.onCrisisUpdated);
    }

    public isSelected(crisis: Crisis): boolean {
        return crisis.id === this.selectedId;
    }

    public onSelect(crisis: Crisis): void {
        this.selectedId = crisis.id;

        this.router.navigate([crisis.id], { relativeTo: this.route });
    }


    private onCrisisUpdated: EventHandler<CrisisUpdatedEventArgs> = (s, e) => {
        let updatedCrisis = e.crisis;
        let indexToUpdate = _.findIndex(this.crises, c => c.id === updatedCrisis.id);

        this.crises[indexToUpdate] = updatedCrisis;
    }
}