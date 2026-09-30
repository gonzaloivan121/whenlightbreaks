import { Component, OnDestroy, signal } from '@angular/core';

import { HeroComponent, type HeroBackgroundType, type HeroSize } from '@components/hero/hero.component';

type HeroExample = {
    id: string;
    title: string;
    description: string;
    backgroundType: HeroBackgroundType;
    size: HeroSize;
    overlay: boolean;
    fullScreen: boolean;
    imageSrc: string;
    imageAlt: string;
    videoSrc: string;
    videoPoster: string;
    contentEyebrow: string;
    contentTitle: string;
    contentBody: string;
};

type BackgroundOption = {
    value: HeroBackgroundType;
    label: string;
};

type SizeOption = {
    value: HeroSize;
    label: string;
};

@Component({
    selector: 'hero-showcase-page',
    imports: [HeroComponent],
    templateUrl: './hero.page.html',
    styleUrl: './hero.page.css',
})
export class HeroPage implements OnDestroy {
    readonly copiedExampleId = signal<string | null>(null);

    private copyResetHandle?: ReturnType<typeof setTimeout>;

    private readonly imageSrc = 'https://picsum.photos/id/1018/1920/1080';
    private readonly imageAlt = 'Mountain horizon during blue hour';
    private readonly videoSrc = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
    private readonly videoPoster = 'https://picsum.photos/id/1015/1920/1080';

    readonly backgroundOptions: readonly BackgroundOption[] = [
        { value: 'image', label: 'Image' },
        { value: 'video', label: 'Video' },
    ];

    readonly sizeOptions: readonly SizeOption[] = [
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
        { value: 'large', label: 'Large' },
    ];

    readonly overlayOptions: readonly boolean[] = [true, false];
    readonly fullScreenOptions: readonly boolean[] = [false, true];

    readonly examples: readonly HeroExample[] = this.buildExamples();
    readonly sectionExamples = this.examples.filter((example) => !example.fullScreen);
    readonly fullScreenExamples = this.examples.filter((example) => example.fullScreen);
    readonly totalHeroes = this.examples.length;

    ngOnDestroy(): void {
        if (this.copyResetHandle !== undefined) {
            clearTimeout(this.copyResetHandle);
        }
    }

    async copyHeroCode(example: HeroExample): Promise<void> {
        const code = this.buildHeroCode(example);
        const copied = await this.copyToClipboard(code);

        if (!copied) {
            return;
        }

        this.copiedExampleId.set(example.id);

        if (this.copyResetHandle !== undefined) {
            clearTimeout(this.copyResetHandle);
        }

        this.copyResetHandle = setTimeout(() => {
            this.copiedExampleId.set(null);
        }, 1500);
    }

    isCopied(exampleId: string): boolean {
        return this.copiedExampleId() === exampleId;
    }

    private buildExamples(): readonly HeroExample[] {
        const examples: HeroExample[] = [];

        for (const background of this.backgroundOptions) {
            for (const size of this.sizeOptions) {
                for (const overlay of this.overlayOptions) {
                    for (const fullScreen of this.fullScreenOptions) {
                        examples.push(this.createExample(background, size, overlay, fullScreen));
                    }
                }
            }
        }

        return examples;
    }

    private createExample(background: BackgroundOption, size: SizeOption, overlay: boolean, fullScreen: boolean): HeroExample {
        const overlayLabel = overlay ? 'Overlay' : 'No Overlay';
        const screenLabel = fullScreen ? 'Full Screen' : 'Section';
        const id = `${background.value}-${size.value}-${overlay ? 'overlay' : 'no-overlay'}-${fullScreen ? 'fullscreen' : 'section'}`;
        const title = `${background.label} / ${size.label} / ${overlayLabel} / ${screenLabel}`;

        return {
            id,
            title,
            description: `backgroundType="${background.value}", size="${size.value}", overlay=${overlay}, fullScreen=${fullScreen}`,
            backgroundType: background.value,
            size: size.value,
            overlay,
            fullScreen,
            imageSrc: this.imageSrc,
            imageAlt: this.imageAlt,
            videoSrc: this.videoSrc,
            videoPoster: this.videoPoster,
            contentEyebrow: `${background.label} background`,
            contentTitle: `${screenLabel} hero in ${size.label.toLowerCase()} mode`,
            contentBody: `This variation uses ${overlayLabel.toLowerCase()} with a ${background.label.toLowerCase()} media background.`,
        };
    }

    private buildHeroCode(example: HeroExample): string {
        const attributes: string[] = [
            `backgroundType="${example.backgroundType}"`,
            `size="${example.size}"`,
            `[overlay]="${example.overlay}"`,
            `[fullScreen]="${example.fullScreen}"`,
        ];

        if (example.backgroundType === 'image') {
            attributes.push(`imageSrc="${this.escapeAttribute(example.imageSrc)}"`);
            attributes.push(`imageAlt="${this.escapeAttribute(example.imageAlt)}"`);
        } else {
            attributes.push(`videoSrc="${this.escapeAttribute(example.videoSrc)}"`);
            attributes.push(`videoPoster="${this.escapeAttribute(example.videoPoster)}"`);
        }

        return [
            `<hero-component ${attributes.join(' ')}>` ,
            `  <h1>${this.escapeContent(example.contentTitle)}</h1>`,
            `  <p>${this.escapeContent(example.contentBody)}</p>`,
            '</hero-component>',
        ].join('\n');
    }

    private escapeAttribute(value: string): string {
        return value
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    private escapeContent(value: string): string {
        return value
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    private async copyToClipboard(text: string): Promise<boolean> {
        try {
            if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(text);
                return true;
            }
        } catch {
            return this.fallbackCopy(text);
        }

        return this.fallbackCopy(text);
    }

    private fallbackCopy(text: string): boolean {
        if (typeof document === 'undefined') {
            return false;
        }

        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = text;
        tempTextArea.setAttribute('readonly', '');
        tempTextArea.style.position = 'fixed';
        tempTextArea.style.opacity = '0';

        document.body.appendChild(tempTextArea);
        tempTextArea.select();

        const copied = document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        return copied;
    }
}