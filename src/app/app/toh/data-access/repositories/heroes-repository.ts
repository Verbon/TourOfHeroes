import { Hero } from "../domain-model/hero";
import { Heroes } from '../domain-model/mock-heroes';
import { NeDbContext } from "../../../common/data-access/repositories/nedb/nedb-context";
import { NeDbRepository } from "../../../common/data-access/repositories/nedb/nedb-repository";


export class HeroesRepository extends NeDbRepository<Hero> {
    public constructor(neDbContext: NeDbContext) {
        super(neDbContext);
    }


    public async initAsync(): Promise<void> {
        let databaseExists = await this.NeDbContext.checkIfDatabaseExistsAsync();
        if (!databaseExists) {
            await super.insertAllAsync(Heroes);
        }
    }
}