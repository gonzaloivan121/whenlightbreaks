import { Component, input } from '@angular/core';

import { NgIcon } from '@ng-icons/core';

import { Song } from '@app/models/song.model';

@Component({
    selector: 'song-component',
    imports: [NgIcon],
    templateUrl: './song.component.html',
    styleUrl: './song.component.css',
})
export class SongComponent {
    song = input.required<Song>();
}
