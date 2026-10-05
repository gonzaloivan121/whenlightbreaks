import { Component, signal } from '@angular/core';

import { ContainerComponent } from '@components/container/container.component';
import { TitleComponent } from '@components/title/title.component';

@Component({
    selector: 'youtube-section',
    imports: [ContainerComponent, TitleComponent],
    templateUrl: './youtube.section.html',
    styleUrl: './youtube.section.css',
})
export class YouTubeSection {
    title = signal<string>('Pre-Human State');
}
