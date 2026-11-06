import { Component, computed, inject, input, resource } from '@angular/core';

import { NgIcon } from '@ng-icons/core';

import { AlbumCode } from '@app/types/album.type';

import { AlbumService } from '@services/album/album.service';

import { ButtonComponent } from '@components/button/button.component';

@Component({
    imports: [NgIcon, ButtonComponent],
    selector: 'stream-page',
    styleUrl: './stream.page.css',
    templateUrl: './stream.page.html',
})
export class StreamPage {
    private readonly albumService: AlbumService = inject(AlbumService);

    albumResource = resource({
        loader: () => this.albumService.GetAlbumByCode('pre-human-state' as AlbumCode),
    });

    hasAlbum = computed(() => this.albumResource.hasValue());
    album = computed(() => this.albumResource.value());

    OpenLink(url: string): void {
        window.open(url, '_blank');
    }
}
