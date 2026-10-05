import { Component, signal } from '@angular/core';

import { ContainerComponent } from '@components/container/container.component';
import { TitleComponent } from '@components/title/title.component';

@Component({
    selector: 'spotify-section',
    imports: [ContainerComponent, TitleComponent],
    templateUrl: './spotify.section.html',
    styleUrl: './spotify.section.css',
})
export class SpotifySection {
    title = signal<string>('Spotify');
}
