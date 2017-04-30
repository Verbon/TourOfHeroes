import { Hero } from '../domain-model/hero';
import { Heroes } from '../domain-model/mock-heroes';
import { Repository } from './repository';
import { DbContext } from './db-context';


export class HeroesRepository extends Repository<Hero> {
    constructor(dbContext: DbContext) {
        super(dbContext);
    }


    public async initAsync(): Promise<void> {
        let databaseExists = await this.DbContext.checkIfDatabaseExistsAsync();
        if (!databaseExists) {
            await super.insertAllAsync(Heroes);
        }
    }
}