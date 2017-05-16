import { Injectable } from '@angular/core';

import { Crisis } from './../../data-access/domain-model/crisis';
import { TourOfHeroesUnitOfWorkFactory } from './../../data-access/repositories/tour-of-heroes-unit-of-work-factory.service';


@Injectable()
export class CrisisService {
    constructor(
        private readonly tourOfHeroesUnitOfWorkFactory: TourOfHeroesUnitOfWorkFactory) {

    }


    public async getCrisisAsync(id: number): Promise<Crisis> {
        let crises = await this.getCrisesAsync();

        return crises.find(crisis => crisis.id === id);
    }

    public async getCrisesAsync(predicate?: (crisis: Crisis) => boolean): Promise<Crisis[]> {
        let uow = this.tourOfHeroesUnitOfWorkFactory.create();
        let crisesRepository = await uow.getCrisesRepositoryAsync();

        let crises = await crisesRepository.getAllAsync();
        if(predicate) {
            crises = crises.filter(predicate);
        }

        return crises;
    }

    public async updateAsync(crisis: Crisis): Promise<void> {
        let uow = this.tourOfHeroesUnitOfWorkFactory.create();
        let crisesRepository = await uow.getCrisesRepositoryAsync();

        await crisesRepository.updateAsync(crisis);
    }
}