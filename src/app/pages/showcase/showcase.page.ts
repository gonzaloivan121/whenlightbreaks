import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

type ShowcaseNavItem = {
    id: string;
    label: string;
    path: string;
    description: string;
};

@Component({
    selector: 'showcase-page',
    imports: [RouterLink, RouterLinkActive, RouterOutlet],
    templateUrl: './showcase.page.html',
    styleUrl: './showcase.page.css',
})
export class ShowcasePage {
    readonly navItems: readonly ShowcaseNavItem[] = [
        {
            id: 'buttons',
            label: 'Buttons',
            path: 'buttons',
            description: 'Variants, sizes, rounded states, and copyable usage code.',
        },
        {
            id: 'cards',
            label: 'Cards',
            path: 'cards',
            description: 'Fully structured cards with header, body, footer, and copyable snippets.',
        },
        {
            id: 'hero',
            label: 'Hero',
            path: 'hero',
            description: 'Image and video hero backgrounds across size, overlay, and full-screen states.',
        },
    ];
}
