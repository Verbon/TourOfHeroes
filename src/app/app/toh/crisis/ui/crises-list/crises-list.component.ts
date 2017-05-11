import { Crisis } from './../../../data-access/domain-model/crisis';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'crises-list',
    templateUrl: './crises-list.component.html',
    styleUrls: ['./crises-list.component.css']
})
export class NameComponent implements OnInit {
    public crises: Crisis[];

    constructor() { }

    ngOnInit() { }
}