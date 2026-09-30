import { Component } from '@angular/core';

import { HeroComponent } from '@components/hero/hero.component';

import { MusicSection } from '@sections/music/music.section';
import { TourSection } from '@sections/tour/tour.section';
import { AboutSection } from '@sections/about/about.section';

@Component({
    selector: 'home-page',
    imports: [
        HeroComponent,
        MusicSection,
        TourSection,
        AboutSection,
    ],
    templateUrl: './home.page.html',
    styleUrl: './home.page.css',
})
export class HomePage {}
