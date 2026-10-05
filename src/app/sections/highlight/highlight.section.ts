import { Component, signal } from '@angular/core';

import { ContainerComponent } from '@components/container/container.component';
import { TitleComponent } from '@components/title/title.component';
import { ButtonComponent } from '@components/button/button.component';

@Component({
    selector: 'highlight-section',
    imports: [ContainerComponent, TitleComponent, ButtonComponent],
    templateUrl: './highlight.section.html',
    styleUrl: './highlight.section.css',
})
export class HighlightSection {
    title = signal<string>('Highlight');
}
