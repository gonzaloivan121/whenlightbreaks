import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToAlbumID } from '@app/types/album.type';
import { ToArtistID } from '@app/types/artist.type';
import type { Album } from '@models/album.model';

import { AlbumComponent } from './album.component';

describe('AlbumComponent', () => {
    let component: AlbumComponent;
    let fixture: ComponentFixture<AlbumComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AlbumComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AlbumComponent);
        fixture.componentRef.setInput('album', {
            id: ToAlbumID(crypto.randomUUID()),
            title: 'Test Album',
            coverUrl: 'https://example.com/cover.jpg',
            albumUrl: 'https://example.com/album',
            artistId: ToArtistID(crypto.randomUUID()),
            createdAt: new Date(),
        } satisfies Album);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
