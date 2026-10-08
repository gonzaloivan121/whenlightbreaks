import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ContainerComponent } from '@components/container/container.component';
import { TitleComponent } from '@components/title/title.component';
import { SongComponent } from '@components/song/song.component';

import { SongService } from '@app/services/song/song.service';

@Component({
    selector: 'music-section',
    imports: [ContainerComponent, TitleComponent, SongComponent],
    templateUrl: './music.section.html',
    styleUrl: './music.section.css',
})
export class MusicSection {
    title = signal<string>('Music');

    private readonly songService: SongService = inject(SongService);

    songsSignal = toSignal(this.songService.GetSongs());
}
