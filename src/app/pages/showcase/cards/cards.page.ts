import { Component, OnDestroy, signal } from '@angular/core';

import { CardBodyComponent } from '@components/card/card-body/card-body.component';
import { CardComponent } from '@components/card/card.component';
import { CardFooterComponent } from '@components/card/card-footer/card-footer.component';
import { CardHeaderComponent } from '@components/card/card-header/card-header.component';

type CardExample = {
    id: string;
    title: string;
    header: string;
    body: string;
    footer: string;
    rounded: boolean;
    elevated: boolean;
    bodyImage?: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
};

@Component({
    selector: 'cards-showcase-page',
    imports: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent],
    templateUrl: './cards.page.html',
    styleUrl: './cards.page.css',
})
export class CardsPage implements OnDestroy {
    readonly copiedExampleId = signal<string | null>(null);

    private copyResetHandle?: ReturnType<typeof setTimeout>;

    readonly examples: readonly CardExample[] = [
        {
            id: 'product-summary',
            title: 'Product Summary',
            header: 'Aurora Travel Backpack',
            body: 'Weather-resistant shell, 24-liter capacity, and quick-access front compartment for essentials.',
            footer: 'In stock · Ships tomorrow',
            rounded: true,
            elevated: true,
            bodyImage: {
                src: 'https://picsum.photos/id/1040/960/540',
                alt: 'Travel backpack near a mountain trail',
                width: 960,
                height: 540,
            },
        },
        {
            id: 'release-note',
            title: 'Release Note',
            header: 'Version 2.4.0',
            body: 'Introduces reusable showcase navigation, nested routes, and one-click snippet copy support.',
            footer: 'Published 2026-08-04',
            rounded: true,
            elevated: false,
        },
        {
            id: 'event-reminder',
            title: 'Event Reminder',
            header: 'Design Review Meeting',
            body: 'Tuesday at 10:30 AM in Horizon Room. Bring your latest interaction mocks and motion samples.',
            footer: 'Calendar synced · 4 attendees',
            rounded: false,
            elevated: false,
        },
        {
            id: 'system-status',
            title: 'System Status',
            header: 'API Health',
            body: 'All services are operational with an average response time of 118ms over the last 15 minutes.',
            footer: 'Updated 1 minute ago',
            rounded: true,
            elevated: true,
        },
    ];

    readonly totalCards = this.examples.length;

    ngOnDestroy(): void {
        if (this.copyResetHandle !== undefined) {
            clearTimeout(this.copyResetHandle);
        }
    }

    async copyCardCode(example: CardExample): Promise<void> {
        const code = this.buildCardCode(example);
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

    private buildCardCode(example: CardExample): string {
        const attributes: string[] = [];

        if (!example.rounded) {
            attributes.push('[rounded]="false"');
        }

        if (example.elevated) {
            attributes.push('[elevated]="true"');
        }

        const openingTag = attributes.length > 0 ? `<card-component ${attributes.join(' ')}>` : '<card-component>';

        return [
            openingTag,
            `  <card-header-component><h3>${this.escapeContent(example.header)}</h3></card-header-component>`,
            this.buildBodyMarkup(example),
            `  <card-footer-component><p>${this.escapeContent(example.footer)}</p></card-footer-component>`,
            '</card-component>',
        ].join('\n');
    }

    private buildBodyMarkup(example: CardExample): string {
        if (example.bodyImage) {
            const imageSrc = this.escapeAttribute(example.bodyImage.src);
            const imageAlt = this.escapeAttribute(example.bodyImage.alt);

            return `  <card-body-component imageSrc="${imageSrc}" imageAlt="${imageAlt}" [imageWidth]="${example.bodyImage.width}" [imageHeight]="${example.bodyImage.height}"></card-body-component>`;
        }

        return `  <card-body-component><p>${this.escapeContent(example.body)}</p></card-body-component>`;
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
