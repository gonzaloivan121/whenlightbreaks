import { Component, input } from '@angular/core';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionEnterOutline } from '@ng-icons/ionicons';

import { Song } from '@app/models/song.model';

@Component({
    selector: 'song-component',
    imports: [NgIcon],
    templateUrl: './song.component.html',
    styleUrl: './song.component.css',
    viewProviders: [provideIcons({ ionEnterOutline })],
})
export class SongComponent {
    song = input.required<Song>();
}
