import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { CrisisService } from './../../foundation/crisis.service';
import { Crisis } from './../../../data-access/domain-model/crisis';


@Component({
    templateUrl: './crises-list.component.html',
    styleUrls: ['./crises-list.component.css']
})
export class CrisisListComponent implements OnInit {
    public crises: Observable<Crisis[]>;
    public selectedId: number;


    constructor(
        private readonly crisisService: CrisisService,
        private readonly route: ActivatedRoute,
        private readonly router: Router) {

    }


    public async ngOnInit(): Promise<void> {
        this.crises = this.route.params
            .switchMap((params: Params) => {
                this.selectedId = +params['id'];

                return this.crisisService.getCrisesAsync();
            });
    }

    public isSelected(crisis: Crisis): boolean {
        return crisis.id === this.selectedId;
    }

    public onSelect(crisis: Crisis): void {
        this.selectedId = crisis.id;

        this.router.navigate([crisis.id], { relativeTo: this.route });
    }
}