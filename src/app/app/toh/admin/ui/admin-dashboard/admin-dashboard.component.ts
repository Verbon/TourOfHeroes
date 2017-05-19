import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';


@Component({
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
    public sessionId: Observable<string>;
    public token: Observable<string>;


    public constructor(private readonly route: ActivatedRoute) {

    }


    public ngOnInit(): void {
        this.sessionId = this.route.queryParams.map(params => params['session_id'] || 'None');
        this.token = this.route.fragment.map(fr => fr || 'None');
    }
}