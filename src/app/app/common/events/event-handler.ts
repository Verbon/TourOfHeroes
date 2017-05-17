import { EventArgs } from './event-args';


export interface IEventHandler<T extends EventArgs> {
    (sender: any, e: T): void;
}