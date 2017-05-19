import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, NavigationExtras } from "@angular/router";

import { Observable } from 'rxjs/Observable';

import { AuthenticationDemoService } from './../../foundation/authentication/authentication-demo.service';


@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild {
    public constructor(
        private readonly authenticationService: AuthenticationDemoService,
        private readonly router: Router) {

    }


    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let url: string = state.url;

        return this.checkLogin(url);
    }

    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }


    private checkLogin(url: string): boolean {
        if(this.authenticationService.isLoggedIn) {
            return true;
        }

        this.authenticationService.redirectUrl = url;

        let sessionId = 123456789;

        let navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
        };

        this.router.navigate(['/login'], navigationExtras);

        return false;
    }
}