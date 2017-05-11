import * as fs from 'fs';
import * as path from 'path';
import * as NedbDatastore from 'nedb';

import { DbContext } from "../db-context";


export class NeDbContext extends DbContext {
    private readonly DbFilePath: string;


    constructor(dbFileName: string) {
        super();

        this.DbFilePath = path.join(__dirname, 'db', `${dbFileName}.db.json`);
    }


    public getAllAsync<T>(): Promise<T[]> {
        return this.findAsync<T>({});
    }

    public getWhereAsync<T>(predicate: (entity: T) => boolean): Promise<T[]> {
        throw new Error("Method not implemented. Use findAsync(query) instead.");
    }

    public findAsync<T>(query: any): Promise<T[]> {
        return new Promise<T[]>((resolve, reject) => {

            let db = this.openConnection();
            db.find<T>(query, (err, entities) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(entities);
                }
            });

        });
    }

    public insertAsync<T>(entity: T): Promise<void> {
        return new Promise<void>((resolve, reject) => {

            let db = this.openConnection();
            db.insert<T>(entity, (err, entities) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });

        });
    }

    public async insertAllAsync<T>(entities: T[]): Promise<void> {
        for(let entity of entities) {
            await this.insertAsync<T>(entity);
        }
    }

    public updateAsync<T>(entity: T): Promise<void> {
        throw new Error("Method not implemented. Use updateWithQueryAsync(query, updateQuery) instead.");
    }

    public updateWithQueryAsync(query: any, updateQuery: any): Promise<void> {
        return new Promise<void>((resolve, reject) => {

            let db = this.openConnection();
            db.update(query, updateQuery, { multi: true }, (err, nou, upsert) => {
                if(err) {
                    reject(err);
                }
                else{
                    resolve();
                }
            });

        });
    }

    public deleteAsync<T>(entity: T): Promise<void> {
        throw new Error("Method not implemented. User deleteWithQueryAsync(query) instead.");
    }

    public deleteWithQueryAsync(query: any): Promise<void> {
        return new Promise<void>((resolve, reject) => {

            let db = this.openConnection();
            db.remove(query, { multi: true }, (err, n) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });

        });
    }

    public checkIfDatabaseExistsAsync(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {

            fs.stat(this.DbFilePath, (err, stats) => {
                let databaseExists = !err;

                resolve(databaseExists);
            });

        });
    }


    private openConnection(): NedbDatastore {
        let dataStoreOptions: NedbDatastore.DataStoreOptions = {
            filename: this.DbFilePath,
            autoload: true
        };
        let db = new NedbDatastore(dataStoreOptions);

        return db;
    }
}