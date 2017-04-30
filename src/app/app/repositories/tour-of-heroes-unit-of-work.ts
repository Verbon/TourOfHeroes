import { Hero } from '../domain-model/hero';
import { DbContext } from './db-context';
import { Repository } from './repository';
import { HeroesRepository } from './heroes-repository';


export class TourOfHeroesUnitOfWork {
    public async getHeroesRepositoryAsync(): Promise<Repository<Hero>> {
        let dbContext = this.createDbContext('heroes');
        let heroesRepository = new HeroesRepository(dbContext);
        await heroesRepository.initAsync();

        return heroesRepository;
    }


    private createDbContext(dbContextTableName: string): DbContext {
        return new DbContext(dbContextTableName);
    }
}