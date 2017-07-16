import { Entity } from "../../common/domain-model/entity";


export class Crisis extends Entity {
    public constructor(
        public readonly id: number,
        public name: string) {
        super();
    }
}