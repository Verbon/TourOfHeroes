import { Injectable } from '@angular/core';

import { IEvent, Event } from "../../../common/events/event";

import { Crisis } from "../../domain-model/crisis";
import { TourOfHeroesUnitOfWorkFactory } from "../../repositories/tour-of-heroes-unit-of-work-factory.service";
import { CrisisUpdatedEventArgs } from './crisis-updated-event-args';


@Injectable()
export class CrisisService {
    private readonly crisisUpdatedEvent = new Event<CrisisUpdatedEventArgs>();


    public get crisisUpdated(): IEvent<CrisisUpdatedEventArgs> {
        return this.crisisUpdatedEvent;
    }


    public constructor(
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

        this.crisisUpdatedEvent.raise(this, new CrisisUpdatedEventArgs(crisis));
    }
}