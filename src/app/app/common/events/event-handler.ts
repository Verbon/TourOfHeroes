import { EventArgs } from './event-args';


export interface EventHandler<T extends EventArgs> {
    (sender: any, e: T): void;
}