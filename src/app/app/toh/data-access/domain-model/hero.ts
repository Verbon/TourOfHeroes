import { Entity } from "../../../common/data-access/domain-model/entity";


export class Hero extends Entity {
    public constructor(
        public readonly id: number,
        public name: string) {
        super();
    }
}