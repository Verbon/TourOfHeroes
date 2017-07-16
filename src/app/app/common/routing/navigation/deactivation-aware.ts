import { Observable } from 'rxjs/Observable';


export interface DeactivationAware {
    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}