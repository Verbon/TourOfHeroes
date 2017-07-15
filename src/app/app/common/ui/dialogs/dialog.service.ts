import { Injectable } from '@angular/core';


@Injectable()
export class DialogService {
    public confirm(message?: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            resolve(window.confirm(message || 'Is it OK?'));
        });
    }
}