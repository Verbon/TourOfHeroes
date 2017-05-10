import { Hero } from "../domain-model/hero";
import { Heroes } from '../domain-model/mock-heroes';
import { Repository } from '../../../common/data-access/repositories/repository';
import { NeDbContext } from './nedb/nedb-context';


export class HeroesRepository extends Repository<Hero> {
    constructor(
        private readonly neDbContext: NeDbContext) {
        super(neDbContext);
    }


    public async initAsync(): Promise<void> {
        let databaseExists = await this.neDbContext.checkIfDatabaseExistsAsync();
        if (!databaseExists) {
            await super.insertAllAsync(Heroes);
        }
    }

    public getWhereAsync(predicate: (entity: Hero) => boolean): Promise<Hero[]> {
        throw new Error("Method not implemented. Use findAsync(query) instead.");
    }

    public findAsync(query: any): Promise<Hero[]> {
        return this.neDbContext.findAsync<Hero>(query);
    }

    public async updateAsync(entity: Hero): Promise<void> {
        let updateSetQuery: any = { };
        for(let property in entity) {
            if(property !== "id" && property !== "_id") {
                updateSetQuery[property] = entity[property];
            }
        }

        await this.neDbContext.updateWithQueryAsync({ id: entity.id }, { $set: updateSetQuery });
    }

    public deleteAsync(entity: Hero): Promise<void> {
        throw new Error("Method not implemented. Use deleteByIdsAsync(ids) instead.");
    }

    public async deleteByIdsAsync(ids?: number[]): Promise<void> {
        let query: any = {};
        if (ids) {
            query = { id: { $in: ids } };
        }

        await this.neDbContext.deleteWithQueryAsync(query);
    }
}