import { Component } from '@angular/core';

import { HeroComponent } from "@components/hero/hero.component";

import { MusicSection } from "@sections/music/music.section";

@Component({
    selector: 'music-page',
    imports: [HeroComponent, MusicSection],
    templateUrl: './music.page.html',
    styleUrl: './music.page.css',
})
export class MusicPage {}
