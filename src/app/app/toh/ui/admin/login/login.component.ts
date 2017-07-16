import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { AuthenticationDemoService } from "../../../foundation/authentication/authentication-demo.service";


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public message: string;


    public constructor(
        public readonly authService: AuthenticationDemoService,
        private readonly router: Router) {

    }

    public ngOnInit() {

    }

    public async login(): Promise<void> {
        this.message = 'Trying to log in...';
        await this.authService.loginAsync();

        this.setMessage();
        if (this.authService.isLoggedIn) {
            let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
            let navigationExtras: NavigationExtras = {
                preserveQueryParams: true,
                preserveFragment: true
            };

            this.router.navigate([redirect], navigationExtras);
        }
    }

    public logout(): void {
        this.authService.logout();
        this.setMessage();
    }


    private setMessage(): void {
        this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`;
    }
}