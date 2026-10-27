import { Component } from '@angular/core';

import { HeroComponent } from '@components/hero/hero.component';

import { AboutSection } from '@sections/about/about.section';

@Component({
    selector: 'home-page',
    imports: [
        HeroComponent,
        AboutSection,
    ],
    templateUrl: './home.page.html',
    styleUrl: './home.page.css',
})
export class HomePage {}
