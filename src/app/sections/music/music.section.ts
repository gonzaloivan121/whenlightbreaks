import { Component, computed, inject, resource, signal } from '@angular/core';

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

    songsResource = resource({
        loader: () => this.songService.GetSongs(),
    });

    hasSongs = computed(() => this.songsResource.hasValue());
    songs = computed(() => this.songsResource.value() ?? []);
}
