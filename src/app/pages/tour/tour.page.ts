import { Component } from '@angular/core';

import { HeroComponent } from "@components/hero/hero.component";

import { TourSection } from "@sections/tour/tour.section";

@Component({
    selector: 'tour-page',
    imports: [HeroComponent, TourSection],
    templateUrl: './tour.page.html',
    styleUrl: './tour.page.css',
})
export class TourPage {}
