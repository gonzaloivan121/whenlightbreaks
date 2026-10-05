import { Component } from '@angular/core';

import { HeroComponent } from "@components/hero/hero.component";

import { MusicSection } from "@sections/music/music.section";
import { YouTubeSection } from '@sections/youtube/youtube.section';
import { SpotifySection } from '@sections/spotify/spotify.section';

@Component({
    selector: 'music-page',
    imports: [HeroComponent, MusicSection, YouTubeSection, SpotifySection],
    templateUrl: './music.page.html',
    styleUrl: './music.page.css',
})
export class MusicPage {}
