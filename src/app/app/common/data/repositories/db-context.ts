export abstract class DbContext {
    abstract getAllAsync<T>(): Promise<T[]>;

    abstract getWhereAsync<T>(predicate: (entity: T) => boolean): Promise<T[]>;

    abstract insertAsync<T>(entity: T): Promise<void>;

    abstract insertAllAsync<T>(entities: T[]): Promise<void>;

    abstract updateAsync<T>(entity: T): Promise<void>;

    abstract deleteAsync<T>(entity: T): Promise<void>;
}