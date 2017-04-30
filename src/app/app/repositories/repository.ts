import { Entity } from '../domain-model/entity';
import { DbContext } from './db-context';


export class Repository<T extends Entity> {
    constructor(
        protected DbContext: DbContext) {

    }


    public async getAllAsync(): Promise<T[]> {
        let entities = this.DbContext.findAsync<T>({});

        return entities;
    }

    public insertAsync(entity: T): Promise<void> {
        return this.DbContext.insertAsync<T>(entity);
    }

    public insertAllAsync(entities: T[]): Promise<void> {
        return this.DbContext.insertAsync<T[]>(entities);
    }

    public async updateAsync(entity: T): Promise<void> {
        let updateSetQuery: any = { };
        for(let property in entity) {
            if(property !== "id" && property !== "_id") {
                updateSetQuery[property] = entity[property];
            }
        }

        await this.DbContext.updateAsync({ id: entity.id }, { $set: updateSetQuery });
    }

    public async deleteAsync(ids?: number[]): Promise<void> {
        let query: any = {};
        if (ids) {
            query = { id: { $in: ids } };
        }

        await this.DbContext.deleteAsync(query);
    }
}