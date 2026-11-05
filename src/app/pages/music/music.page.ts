import { Component } from '@angular/core';

import { HeroComponent } from "@components/hero/hero.component";

import { YouTubeSection } from '@sections/youtube/youtube.section';

@Component({
    selector: 'music-page',
    imports: [HeroComponent, YouTubeSection],
    templateUrl: './music.page.html',
    styleUrl: './music.page.css',
})
export class MusicPage {}
