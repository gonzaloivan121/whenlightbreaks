import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { HeroComponent } from "@components/hero/hero.component";
import { ButtonComponent } from "@components/button/button.component";
import { HeroContentComponent } from "@components/hero/hero-content/hero-content.component";

@Component({
    selector: 'notfound-page',
    imports: [HeroComponent, ButtonComponent, HeroContentComponent],
    templateUrl: './notfound.page.html',
    styleUrl: './notfound.page.css',
})
export class NotfoundPage {
    private readonly router = inject(Router);
    private readonly location = inject(Location);
    
    /**
     * Navigates to the previous page in the browser history.
     *
     * @memberof NotfoundPage
     */
    GoBack() {
        this.location.back();
    }

    /**
     * Navigates to the home page.
     *
     * @memberof NotfoundPage
     */
    GoHome() {
        this.router.navigate(['/']);
    }
}
