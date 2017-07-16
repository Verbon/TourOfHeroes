import { NeDbContext } from "../../common/repositories/nedb/nedb-context";
import { NeDbRepository } from "../../common/repositories/nedb/nedb-repository";
import { Crisis } from './../domain-model/crisis';
import { Crises } from './../domain-model/mock-crises';


export class CrisesRepository extends NeDbRepository<Crisis> {
    public constructor(neDbContext: NeDbContext) {
        super(neDbContext);
    }


    public async initAsync(): Promise<void> {
        let databaseExists = await this.NeDbContext.checkIfDatabaseExistsAsync();
        if(!databaseExists) {
            await super.insertAllAsync(Crises);
        }
    }
}