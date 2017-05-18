import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/of';
import 'rxjs/add/operator/of';


@Injectable()
export class AuthenticationDemoService {
    public isLoggedIn: boolean = false;
    public redirectUrl: string;


    public login(): Observable<boolean> {
        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }

    public logout(): void {
        this.isLoggedIn = false;
    }
}