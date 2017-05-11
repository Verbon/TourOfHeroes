import { Crisis } from './../domain-model/crisis';
import { Hero } from "../domain-model/hero";
import { CrisesRepository } from './crises-repository';
import { HeroesRepository } from './heroes-repository';
import { NeDbContext } from "../../../common/data-access/repositories/nedb/nedb-context";
import { NeDbRepository } from "../../../common/data-access/repositories/nedb/nedb-repository";


export class TourOfHeroesUnitOfWork {
    public async getHeroesRepositoryAsync(): Promise<NeDbRepository<Hero>> {
        let neDbContext = this.createNeDbContext('heroes');
        let heroesRepository = new HeroesRepository(neDbContext);
        await heroesRepository.initAsync();

        return heroesRepository;
    }

    public async getCrisesRepositoryAsync(): Promise<NeDbRepository<Crisis>> {
        let neDbContext = this.createNeDbContext('crises');
        let crisesRepository = new CrisesRepository(neDbContext);
        await crisesRepository.initAsync();

        return crisesRepository;
    }


    private createNeDbContext(neDbContextTableName: string): NeDbContext {
        return new NeDbContext(neDbContextTableName);
    }
}