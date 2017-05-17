import { EventArgs } from './event-args';
import { IEventHandler } from './event-handler';


export interface IEvent<T extends EventArgs> {
    subscribe(eventHandler: IEventHandler<T>): void;

    unsubscribe(eventHandler: IEventHandler<T>): void;
}

export class Event<T extends EventArgs> implements IEvent<T> {
    private readonly eventHandlers: IEventHandler<T>[] = [];


    public subscribe(eventHandler: IEventHandler<T>): void {
        this.eventHandlers.push(eventHandler);
    }

    public unsubscribe(eventHandler: IEventHandler<T>): void {
        let eventHandlerIndex = this.eventHandlers.indexOf(eventHandler);

        this.eventHandlers.splice(eventHandlerIndex, 1);
    }

    public raise(sender: any, e: T): void {
        this.eventHandlers.slice(0).forEach(eventHandler => eventHandler(sender, e));
    }
}