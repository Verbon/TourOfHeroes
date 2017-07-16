import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { SlideInDownTransition } from "../common/animations/slide-in-down.animation";


@Component({
    templateUrl: './contact-support.component.html',
    styleUrls: ['./contact-support.component.css'],
    animations: [
        SlideInDownTransition
    ]
})
export class ContactSupportComponent implements OnInit {
    @HostBinding('@slide-in-down-transition')
    public routeAnimation = true;
    @HostBinding('style.display')
    public display = 'block';
    @HostBinding('style.position')
    public position = 'absolute';


    public details: string;
    public message: string;
    public sending: boolean = false;


    public constructor(
        private readonly router: Router) {

    }


    public ngOnInit(): void {

    }

    public send(): void {
        this.sending = true;
        this.details = 'Sending message...';

        setTimeout(() => {
            this.sending = false;
            this.closePopup();
        }, 1000);
    }

    public cancel(): void {
        this.closePopup();
    }


    private closePopup(): void {
        this.router.navigate([{ outlets: { support: null }}]);
    }
}