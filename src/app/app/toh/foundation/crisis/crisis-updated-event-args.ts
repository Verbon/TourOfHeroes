import { EventArgs } from './../../../common/events/event-args';

import { Crisis } from "../../domain-model/crisis";


export class CrisisUpdatedEventArgs extends EventArgs {
    public constructor(
        public readonly crisis: Crisis) {
        super();
    }
}