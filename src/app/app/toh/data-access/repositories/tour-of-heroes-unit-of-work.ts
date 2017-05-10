import { NeDbContext } from './nedb/nedb-context';
import { HeroesRepository } from './heroes-repository';


export class TourOfHeroesUnitOfWork {
    public async getHeroesRepositoryAsync(): Promise<HeroesRepository> {
        let neDbContext = this.createNeDbContext('heroes');
        let heroesRepository = new HeroesRepository(neDbContext);
        await heroesRepository.initAsync();

        return heroesRepository;
    }


    private createNeDbContext(neDbContextTableName: string): NeDbContext {
        return new NeDbContext(neDbContextTableName);
    }
}