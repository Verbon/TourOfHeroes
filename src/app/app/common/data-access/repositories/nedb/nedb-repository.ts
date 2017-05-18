import { Entity } from "../../domain-model/entity";
import { Repository } from "../repository";
import { NeDbContext } from './nedb-context';


export class NeDbRepository<T extends Entity> extends Repository<T> {
    public constructor(
        protected readonly NeDbContext: NeDbContext) {
        super(NeDbContext);
    }


    public getWhereAsync(predicate: (entity: T) => boolean): Promise<T[]> {
        throw new Error("Method not implemented. Use findAsync(query) instead.");
    }

    public findAsync(query: any): Promise<T[]> {
        return this.NeDbContext.findAsync<T>(query);
    }

    public async updateAsync(entity: T): Promise<void> {
        let updateSetQuery: any = { };
        for(let property in entity) {
            if(property !== "id" && property !== "_id") {
                updateSetQuery[property] = entity[property];
            }
        }

        await this.NeDbContext.updateWithQueryAsync({ id: entity.id }, { $set: updateSetQuery });
    }

    public deleteAsync(entity: T): Promise<void> {
        throw new Error("Method not implemented. Use deleteByIdsAsync(ids) instead.");
    }

    public async deleteByIdsAsync(ids?: number[]): Promise<void> {
        let query: any = {};
        if (ids) {
            query = { id: { $in: ids } };
        }

        await this.NeDbContext.deleteWithQueryAsync(query);
    }
}