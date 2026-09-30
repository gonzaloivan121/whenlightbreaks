import { Component, input } from '@angular/core';

@Component({
    selector: 'hero-content-component',
    imports: [],
    templateUrl: './hero-content.component.html',
    styleUrl: './hero-content.component.css',
})
export class HeroContentComponent {
    eyebrow = input<string>();
    title = input<string>();
    description = input<string>();
}
