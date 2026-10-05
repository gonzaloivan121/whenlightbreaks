import { Component, inject, computed, resource, signal } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';

import { SeparatePipe } from '@pipes/separate/separate.pipe';

import { ContainerComponent } from '@components/container/container.component';
import { TitleComponent } from '@components/title/title.component';
import { ButtonComponent } from '@components/button/button.component';

import { ConcertService } from '@services/concert/concert.service';

@Component({
    selector: 'tour-section',
    imports: [
        ButtonComponent,
        DatePipe,
        SeparatePipe,
        TitleCasePipe,
        ContainerComponent,
        TitleComponent,
    ],
    templateUrl: './tour.section.html',
    styleUrl: './tour.section.css',
})
export class TourSection {
    title = signal<string>('Tour');

    private readonly concertService: ConcertService = inject(ConcertService);

    concertsResource = resource({
        loader: () => this.concertService.GetConcerts(),
    });

    hasConcerts = computed(() => this.concertsResource.hasValue());
    concerts = computed(() => this.concertsResource.value() ?? []);

    BuyTickets(ticketsUrl: string): void {
        window.open(ticketsUrl, '_blank', 'noopener,noreferrer');
    }
}
