import { Component, signal } from '@angular/core';

import { ContainerComponent } from '@components/container/container.component';
import { TitleComponent } from '@components/title/title.component';

@Component({
    selector: 'about-section',
    imports: [ContainerComponent, TitleComponent],
    templateUrl: './about.section.html',
    styleUrl: './about.section.css',
})
export class AboutSection {
    title = signal<string>('About');
}
