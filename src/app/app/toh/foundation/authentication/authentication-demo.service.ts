import { Injectable } from '@angular/core';


@Injectable()
export class AuthenticationDemoService {
    public isLoggedIn: boolean = false;
    public redirectUrl: string;


    public loginAsync(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
                this.isLoggedIn = true;

                resolve(true);
            }, 1000);
        });
    }

    public logout(): void {
        this.isLoggedIn = false;
    }
}