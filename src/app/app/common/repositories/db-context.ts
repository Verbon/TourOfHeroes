export interface DbContext {
    getAllAsync<T>(): Promise<T[]>;

    getWhereAsync<T>(predicate: (entity: T) => boolean): Promise<T[]>;

    insertAsync<T>(entity: T): Promise<void>;

    insertAllAsync<T>(entities: T[]): Promise<void>;

    updateAsync<T>(entity: T): Promise<void>;

    deleteAsync<T>(entity: T): Promise<void>;
}