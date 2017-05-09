import { Entity } from "../../common/data/domain-model/entity";


export class Hero extends Entity {
    constructor(
        public readonly id: number,
        public name: string) {
        super();
    }
}