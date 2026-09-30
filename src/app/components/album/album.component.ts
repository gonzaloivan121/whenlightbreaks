import { Component, input } from '@angular/core';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionEnterOutline } from '@ng-icons/ionicons';

import { Album } from '@app/models/album.model';

@Component({
    selector: 'album-component',
    imports: [NgIcon],
    templateUrl: './album.component.html',
    styleUrl: './album.component.css',
    viewProviders: [provideIcons({ ionEnterOutline })],
})
export class AlbumComponent {
    album = input.required<Album>();
}
