import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToAlbumID } from '@app/types/album.type';
import { ToArtistID } from '@app/types/artist.type';
import { ToSongID } from '@app/types/song.type';
import type { Song } from '@models/song.model';

import { SongComponent } from './song.component';

describe('SongComponent', () => {
    let component: SongComponent;
    let fixture: ComponentFixture<SongComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SongComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SongComponent);
        fixture.componentRef.setInput('song', {
            id: ToSongID(crypto.randomUUID()),
            title: 'Test Song',
            coverUrl: 'https://example.com/cover.jpg',
            songUrl: 'https://example.com/song',
            albumId: ToAlbumID(crypto.randomUUID()),
            artistId: ToArtistID(crypto.randomUUID()),
            createdAt: new Date(),
        } satisfies Song);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
