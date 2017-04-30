import * as fs from 'fs';
import * as path from 'path';
import * as NedbDatastore from 'nedb';


export class DbContext {
    private readonly DbFilePath: string;


    constructor(dbFileName: string) {
        this.DbFilePath = path.join(__dirname, 'db', `${dbFileName}.db.json`);
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

    public updateAsync(query: any, updateQuery: any): Promise<void> {
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

    public deleteAsync(query: any): Promise<void> {
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