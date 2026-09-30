import { Component, computed, input } from '@angular/core';

export type HeroColor =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
export type HeroBackgroundType = 'image' | 'video';
export type HeroSize = 'small' | 'medium' | 'large';

@Component({
    selector: 'hero-component',
    imports: [],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
})
export class HeroComponent {
    backgroundType = input<HeroBackgroundType>('image');
    size = input<HeroSize>('medium');
    fullScreen = input<boolean>(false);
    overlay = input<boolean>(true);
    color = input<HeroColor>('dark');
    class = input<string>('');
    rounded = input<boolean>(false);

    imageSrc = input<string>('');
    imageAlt = input<string>('');

    videoSrc = input<string>('');
    videoPoster = input<string>('');
    videoMuted = input<boolean>(true);

    readonly resolvedImageSrc = computed(() => this.imageSrc().trim());
    readonly resolvedImageAlt = computed(() => this.imageAlt().trim());
    readonly resolvedVideoSrc = computed(() => this.videoSrc().trim());
    readonly resolvedVideoPoster = computed(() => this.videoPoster().trim());

    readonly showVideoBackground = computed(() => {
        return this.backgroundType() === 'video' && this.resolvedVideoSrc().length > 0;
    });

    readonly showImageBackground = computed(() => {
        if (this.showVideoBackground()) {
            return false;
        }

        return this.resolvedImageSrc().length > 0;
    });

    readonly heroClass = computed(() => {
        const customClass = this.class().trim();
        const classes: string[] = ['hero', this.size(), this.color()];

        if (this.fullScreen()) {
            classes.push('fullscreen');
        }

        if (this.showImageBackground()) {
            classes.push('has-image');
        }

        if (this.showVideoBackground()) {
            classes.push('has-video');
        }

        if (this.rounded()) {
            classes.push('rounded');
        }

        if (customClass) {
            classes.push(customClass);
        }

        return classes.join(' ');
    });
}