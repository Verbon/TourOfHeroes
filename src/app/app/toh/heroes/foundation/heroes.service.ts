import { Injectable } from '@angular/core';

import { Hero } from './../../data-access/domain-model/hero';
import { TourOfHeroesUnitOfWorkFactory } from './../../data-access/repositories/tour-of-heroes-unit-of-work-factory.service';


@Injectable()
export class HeroesService {
    constructor(
        private readonly tourOfHeroesUnitOfWorkFactory: TourOfHeroesUnitOfWorkFactory) {

    }


    public async getHeroAsync(id: number): Promise<Hero> {
        let heroes = await this.getHeroesAsync();

        return heroes.find(hero => hero.id === id);
    }

    public async getHeroesAsync(predicate?: (hero: Hero) => boolean): Promise<Hero[]> {
        let uow = this.tourOfHeroesUnitOfWorkFactory.create();
        let heroesRepository = await uow.getHeroesRepositoryAsync();

        let heroes = await heroesRepository.getAllAsync();
        if (predicate) {
            heroes = heroes.filter(predicate);
        }

        return heroes;
    }

    public async createAsync(name: string): Promise<Hero> {
        let uow = this.tourOfHeroesUnitOfWorkFactory.create();
        let heroesRepository = await uow.getHeroesRepositoryAsync();

        let heroes = await heroesRepository.getAllAsync();
        let heroesIds = heroes.map(h => h.id);
        let maxId = Math.max(...heroesIds);
        let hero = new Hero(++maxId, name);

        await heroesRepository.insertAsync(hero);

        return hero;
    }

    public async updateAsync(hero: Hero): Promise<void> {
        let uow = this.tourOfHeroesUnitOfWorkFactory.create();
        let heroesRepository = await uow.getHeroesRepositoryAsync();

        await heroesRepository.updateAsync(hero);
    }

    public async deleteAsync(id: number): Promise<void> {
        let uow = this.tourOfHeroesUnitOfWorkFactory.create();
        let heroesRepository = await uow.getHeroesRepositoryAsync();

        await heroesRepository.deleteByIdsAsync([id]);
    }
}