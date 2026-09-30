import { Component, computed, input } from '@angular/core';

@Component({
    selector: 'card-body-component',
    imports: [],
    templateUrl: './card-body.component.html',
    styleUrl: './card-body.component.css',
})
export class CardBodyComponent {
    imageSrc = input<string>('');
    imageAlt = input<string>('');
    imageWidth = input<number>(960);
    imageHeight = input<number>(540);

    readonly resolvedImageSrc = computed(() => this.imageSrc().trim());
    readonly hasImage = computed(() => this.resolvedImageSrc().length > 0);
}
