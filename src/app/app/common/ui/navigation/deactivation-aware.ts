import { Observable } from 'rxjs/Observable';


export interface IDeactivationAware {
    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}