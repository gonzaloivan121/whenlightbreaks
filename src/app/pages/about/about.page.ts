import { Component } from '@angular/core';

import { HeroComponent } from '@components/hero/hero.component';

import { AboutSection } from '@app/sections/about/about.section';

@Component({
    selector: 'about-page',
    imports: [HeroComponent, AboutSection],
    templateUrl: './about.page.html',
    styleUrl: './about.page.css',
})
export class AboutPage {}
