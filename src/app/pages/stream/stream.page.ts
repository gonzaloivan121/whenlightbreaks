import { Component, computed, inject, resource } from '@angular/core';

import { NgIcon } from '@ng-icons/core';

import { ParseAlbumCode } from '@app/types/album.type';

import { AlbumService } from '@services/album/album.service';
import { AnalyticsService } from '@services/analytics/analytics.service';

import { ButtonComponent } from '@components/button/button.component';

import { Link } from '@models/link.model';

@Component({
    imports: [NgIcon, ButtonComponent],
    selector: 'stream-page',
    styleUrl: './stream.page.css',
    templateUrl: './stream.page.html',
})
export class StreamPage {
    private readonly albumService: AlbumService = inject(AlbumService);
    private readonly analytics: AnalyticsService = inject(AnalyticsService);

    albumResource = resource({
        loader: () => this.albumService.GetAlbumByCode(ParseAlbumCode('pre-human-state')),
    });

    hasAlbum = computed(() => this.albumResource.hasValue());
    album = computed(() => this.albumResource.value());

    OpenLink(link: Link): void {
        this.analytics.TrackEvent('open_stream_link', {
            category: 'stream',
            location: 'stream_page',
            title: this.album()!.title,
            platform: link.label,
        });

        window.open(link.url, '_blank');
    }
}
