import { Entity } from '../domain-model/entity';
import { DbContext } from './db-context';


export class Repository<T extends Entity> {
    constructor(
        protected readonly DbContext: DbContext) {

    }


    public getAllAsync(): Promise<T[]> {
        return this.DbContext.getAllAsync<T>();
    }

    public getWhereAsync(predicate: (entity: T) => boolean): Promise<T[]> {
        return this.DbContext.getWhereAsync<T>(predicate);
    }

    public insertAsync(entity: T): Promise<void> {
        return this.DbContext.insertAsync<T>(entity);
    }

    public insertAllAsync(entities: T[]): Promise<void> {
        return this.DbContext.insertAllAsync<T>(entities);
    }

    public updateAsync(entity: T): Promise<void> {
        return this.DbContext.updateAsync<T>(entity);
    }

    public deleteAsync(entity: T): Promise<void> {
        return this.DbContext.deleteAsync<T>(entity);
    }
}