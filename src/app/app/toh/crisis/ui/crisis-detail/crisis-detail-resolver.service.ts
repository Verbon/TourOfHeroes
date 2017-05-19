import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

import { Crisis } from './../../../data-access/domain-model/crisis';
import { CrisisService } from './../../foundation/crisis.service';


@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis> {
    public constructor(
        private readonly crisisService: CrisisService,
        private readonly router: Router) {

    }


    public async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Crisis> {
        let id = +route.params['id'];

        let crisis = await this.crisisService.getCrisisAsync(id);
        if(crisis) {
            return crisis;
        }
        else {
            this.router.navigate(['/crisis-center']);

            return null;
        }
    }
}