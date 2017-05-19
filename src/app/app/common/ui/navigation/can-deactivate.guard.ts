import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { Observable } from 'rxjs/Observable';

import { IDeactivationAware } from './deactivation-aware';


@Injectable()
export class CanDeactivateGuard implements CanDeactivate<IDeactivationAware> {
    public canDeactivate(
        component: IDeactivationAware,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            return component.canDeactivate();
    }
}