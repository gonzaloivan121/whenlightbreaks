import { Component, input } from '@angular/core';

import { NgIcon } from '@ng-icons/core';

import { Album } from '@models/album.model';

@Component({
    selector: 'album-component',
    imports: [NgIcon],
    templateUrl: './album.component.html',
    styleUrl: './album.component.css',
})
export class AlbumComponent {
    album = input.required<Album>();
}
