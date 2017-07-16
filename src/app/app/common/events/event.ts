import { EventArgs } from './event-args';
import { EventHandler } from './event-handler';


export interface IEvent<T extends EventArgs> {
    subscribe(eventHandler: EventHandler<T>): void;

    unsubscribe(eventHandler: EventHandler<T>): void;
}

export class Event<T extends EventArgs> implements IEvent<T> {
    private readonly eventHandlers: EventHandler<T>[] = [];


    public subscribe(eventHandler: EventHandler<T>): void {
        this.eventHandlers.push(eventHandler);
    }

    public unsubscribe(eventHandler: EventHandler<T>): void {
        let eventHandlerIndex = this.eventHandlers.indexOf(eventHandler);

        this.eventHandlers.splice(eventHandlerIndex, 1);
    }

    public raise(sender: any, e: T): void {
        this.eventHandlers.slice(0).forEach(eventHandler => eventHandler(sender, e));
    }
}